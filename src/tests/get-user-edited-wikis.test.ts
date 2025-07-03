import dedent from "dedent";
import {
	afterAll,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
	vi,
} from "vitest";
import { IQ_REVISION_URL } from "../constants.js";
import { client } from "../lib/graphql.js";
import { USER_EDITED_WIKIS_QUERY } from "../lib/queries.js";
import { GetUserEditedWikisService } from "../services/get-user-edited-wikis.js";

vi.mock("../lib/graphql.js", () => ({
	client: {
		request: vi.fn(),
	},
}));

const MOCK_DATE = new Date("2025-06-24T10:00:00.000Z");
const originalDate = global.Date;

describe("GetUserEditedWikisService", () => {
	let service: GetUserEditedWikisService;

	beforeAll(() => {
		global.Date = class extends originalDate {
			constructor(dateString?: string) {
				super();
				if (dateString) {
					return new originalDate(dateString);
				}
				return MOCK_DATE;
			}
		} as any;
	});

	afterAll(() => {
		global.Date = originalDate;
	});

	beforeEach(() => {
		service = new GetUserEditedWikisService();
		vi.clearAllMocks();
	});

	const mockEditedWikis = [
		{
			id: "wiki1",
			ipfs: "ipfs-hash-1",
			title: "Edited Wiki 1",
			summary: "Summary of edit 1",
			transactionHash: "0xhash1",
			updated: new Date(MOCK_DATE.getTime() - 10 * 1000).toISOString(),
			created: new Date(MOCK_DATE.getTime() - 100 * 1000).toISOString(),
			metadata: [
				{ id: "previous_cid", value: "old_cid_1" },
				{ id: "words-changed", value: "50" },
				{ id: "percent-changed", value: "5" },
				{ id: "blocks-changed", value: "2" },
			],
		},
		{
			id: "wiki2",
			ipfs: "ipfs-hash-2",
			title: "Edited Wiki 2",
			summary: "Summary of edit 2 (no blocks changed)",
			transactionHash: "0xhash2",
			updated: new Date(MOCK_DATE.getTime() - 60 * 1000).toISOString(),
			created: new Date(MOCK_DATE.getTime() - 200 * 1000).toISOString(),
			metadata: [
				{ id: "previous_cid", value: "old_cid_2" },
				{ id: "words-changed", value: "10" },
				{ id: "percent-changed", value: "1" },
			],
		},
		{
			id: "wiki3",
			ipfs: "ipfs-hash-3",
			title: "Edited Wiki 3 (older)",
			summary: "Summary of edit 3",
			transactionHash: "0xhash3",
			updated: new Date(MOCK_DATE.getTime() - 3600 * 1000).toISOString(),
			created: new Date(MOCK_DATE.getTime() - 4000 * 1000).toISOString(),
			metadata: [
				{ id: "previous_cid", value: "old_cid_3" },
				{ id: "words-changed", value: "200" },
				{ id: "percent-changed", value: "20" },
				{ id: "blocks-changed", value: "5" },
			],
		},
		{
			id: "wiki4",
			ipfs: "ipfs-hash-4",
			title: "Non-edited Wiki 4",
			summary: "This is not an edit.",
			transactionHash: "0xhash4",
			updated: new Date(MOCK_DATE.getTime() - 5 * 1000).toISOString(),
			created: new Date(MOCK_DATE.getTime() - 5 * 1000).toISOString(),
			metadata: [{ id: "category", value: "test" }],
		},
	];

	describe("execute", () => {
		it("should return edited wikis when user has them", async () => {
			vi.mocked(client.request).mockResolvedValue({
				userById: {
					wikisEdited: {
						activity: [{ content: mockEditedWikis }],
					},
				},
			});

			const result = await service.execute("user123");

			expect(client.request).toHaveBeenCalledWith(USER_EDITED_WIKIS_QUERY, {
				id: "user123",
			});
			expect(result).toHaveLength(3);
			expect(result.some((w: any) => w.id === "wiki4")).toBe(false);
			expect(
				result.every((w: any) =>
					w.metadata.some((m: any) => m.id === "previous_cid"),
				),
			).toBe(true);
		});

		it("should throw 'user does not exist' if userById is null", async () => {
			vi.mocked(client.request).mockResolvedValue({ userById: null });

			await expect(service.execute("nonexistentUser")).rejects.toThrow(
				"user does not exist",
			);
		});

		it("should throw 'user has not edited any wikis' if wikisEdited.activity is null", async () => {
			vi.mocked(client.request).mockResolvedValue({
				userById: {
					wikisEdited: {
						activity: null,
					},
				},
			});

			await expect(service.execute("userNoEdits")).rejects.toThrow(
				"user has not edited any wikis",
			);
		});

		it("should throw errorif wikisEdited.activity is an empty array", async () => {
			vi.mocked(client.request).mockResolvedValue({
				userById: {
					wikisEdited: {
						activity: [],
					},
				},
			});

			await expect(service.execute("userNoEdits")).rejects.toThrow(
				"Cannot read properties of undefined (reading 'content')",
			);
		});

		it("should throw 'user has not edited any wikis' if wikisEdited.activity[0].content is empty or contains no valid edits", async () => {
			vi.mocked(client.request).mockResolvedValue({
				userById: {
					wikisEdited: {
						activity: [{ content: [mockEditedWikis[3]] }],
					},
				},
			});

			await expect(service.execute("userNoRealEdits")).resolves.toStrictEqual(
				[],
			);
		});

		it("should throw error message from GraphQL client if request fails", async () => {
			const errorMessage = "GraphQL Error: Internal Server Error";
			vi.mocked(client.request).mockRejectedValue(new Error(errorMessage));

			await expect(service.execute("someUser")).rejects.toThrow(errorMessage);
		});

		it("should not filter by timeFrameSeconds but provide an error about it if no wikis are found after metadata filter", async () => {
			vi.mocked(client.request).mockResolvedValue({
				userById: {
					wikisEdited: {
						activity: [
							{
								content: [
									{
										id: "wikiOnlyCreated",
										title: "Wiki created",
										summary: "no metadata previous_cid",
										transactionHash: "0xhashCreated",
										metadata: [],
										updated: new Date().toISOString(),
										created: new Date().toISOString(),
									},
								],
							},
						],
					},
				},
			});
			await expect(
				service.execute("userFilteredOutByMetadata", 60),
			).resolves.toStrictEqual([]);
		});

		it("should return wikis without applying time filtering (as per current implementation's logic)", async () => {
			vi.mocked(client.request).mockResolvedValue({
				userById: {
					wikisEdited: {
						activity: [{ content: mockEditedWikis }],
					},
				},
			});

			const result = await service.execute("user123", 10);
			expect(result).toHaveLength(3);
			expect(result.some((w: any) => w.id === "wiki3")).toBe(true);
		});
	});

	describe("format", () => {
		it("should format a single edited wiki correctly with all metadata", () => {
			const wiki = mockEditedWikis[0];
			const result = service.format([wiki]);

			const expectedFormattedString = dedent`
                📜 Wiki Edited
                - Title: Edited Wiki 1
                - Summary: Summary of edit 1
                - Edited: ${new Date(wiki.updated!).toLocaleString()}
                - Changes: 50 words (5%)
                - Modified sections: 2

                🔗 Source: ${IQ_REVISION_URL}/${wiki.ipfs}
                🔗 Transaction: https://polygonscan.com/tx/${
									wiki.transactionHash
								}
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format an edited wiki gracefully if some metadata is missing", () => {
			const wiki = mockEditedWikis[1];
			const result = service.format([wiki]);

			const expectedFormattedString = dedent`
                📜 Wiki Edited
                - Title: Edited Wiki 2
                - Summary: Summary of edit 2 (no blocks changed)
                - Edited: ${new Date(wiki.updated!).toLocaleString()}
                - Changes: 10 words (1%)
                - Modified sections: Unknown

                🔗 Source: ${IQ_REVISION_URL}/${wiki.ipfs}
                🔗 Transaction: https://polygonscan.com/tx/${
									wiki.transactionHash
								}
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should use 'created' date if 'updated' is null/undefined", () => {
			const wikiWithOnlyCreated = {
				...mockEditedWikis[0],
				updated: null,
				created: new Date(MOCK_DATE.getTime() - 50000).toISOString(),
			};
			const result = service.format([wikiWithOnlyCreated]);

			const expectedFormattedString = dedent`
                📜 Wiki Edited
                - Title: Edited Wiki 1
                - Summary: Summary of edit 1
                - Edited: ${new Date(
									wikiWithOnlyCreated.created!,
								).toLocaleString()}
                - Changes: 50 words (5%)
                - Modified sections: 2

                🔗 Source: ${IQ_REVISION_URL}/${wikiWithOnlyCreated.ipfs}
                🔗 Transaction: https://polygonscan.com/tx/${
									wikiWithOnlyCreated.transactionHash
								}
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format multiple edited wikis correctly, joined by double newline", () => {
			const wikisToFormat = [mockEditedWikis[0], mockEditedWikis[1]];
			const result = service.format(wikisToFormat);

			const expectedFormattedString1 = dedent`
                📜 Wiki Edited
                - Title: Edited Wiki 1
                - Summary: Summary of edit 1
                - Edited: ${new Date(
									wikisToFormat[0].updated!,
								).toLocaleString()}
                - Changes: 50 words (5%)
                - Modified sections: 2

                🔗 Source: ${IQ_REVISION_URL}/${wikisToFormat[0].ipfs}
                🔗 Transaction: https://polygonscan.com/tx/${
									wikisToFormat[0].transactionHash
								}
            `;

			const expectedFormattedString2 = dedent`
                📜 Wiki Edited
                - Title: Edited Wiki 2
                - Summary: Summary of edit 2 (no blocks changed)
                - Edited: ${new Date(
									wikisToFormat[1].updated!,
								).toLocaleString()}
                - Changes: 10 words (1%)
                - Modified sections: Unknown

                🔗 Source: ${IQ_REVISION_URL}/${wikisToFormat[1].ipfs}
                🔗 Transaction: https://polygonscan.com/tx/${
									wikisToFormat[1].transactionHash
								}
            `;
			expect(result.trim()).toEqual(
				`${expectedFormattedString1}\n\n${expectedFormattedString2}`.trim(),
			);
		});
	});
});
