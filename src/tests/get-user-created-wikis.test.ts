import dedent from "dedent";
import { IQ_BASE_URL } from "../constants.js";
import { client } from "../lib/graphql.js";
import { USER_CREATED_WIKIS_QUERY } from "../lib/queries.js";
import { GetUserCreatedWikisService } from "../services/get-user-created-wikis.js";

jest.mock("../lib/graphql.js", () => ({
	client: {
		request: jest.fn(),
	},
}));

const MOCK_DATE = new Date("2025-06-24T10:00:00.000Z");
const originalDate = global.Date;

describe("GetUserCreatedWikisService", () => {
	let service: GetUserCreatedWikisService;

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
		service = new GetUserCreatedWikisService();
		jest.clearAllMocks();
	});

	const mockCreatedWikis = [
		{
			id: "wiki1",
			title: "Created Wiki Alpha",
			summary: "This is the first created wiki.",
			transactionHash: "0xhashAlpha",
			created: new Date(MOCK_DATE.getTime() - 10 * 1000).toISOString(),
		},
		{
			id: "wiki2",
			title: "Created Wiki Beta",
			summary: "This is the second created wiki.",
			transactionHash: "0xhashBeta",
			created: new Date(MOCK_DATE.getTime() - 50 * 1000).toISOString(),
		},
		{
			id: "wiki3",
			title: "Created Wiki Gamma (Older)",
			summary: "This wiki is older than 1 minute.",
			transactionHash: "0xhashGamma",
			created: new Date(MOCK_DATE.getTime() - 120 * 1000).toISOString(),
		},
		{
			id: "wiki4",
			title: "Created Wiki Delta (Very Old)",
			summary: "This wiki is very old.",
			transactionHash: "0xhashDelta",
			created: new Date(MOCK_DATE.getTime() - 3600 * 1000).toISOString(),
		},
	];

	describe("execute", () => {
		it("should return all created wikis when no timeFrame is specified", async () => {
			(client.request as jest.Mock).mockResolvedValue({
				userById: {
					wikisCreated: {
						activity: [{ content: mockCreatedWikis }],
					},
				},
			});

			const result = await service.execute("user123");

			expect(client.request).toHaveBeenCalledWith(USER_CREATED_WIKIS_QUERY, {
				id: "user123",
			});
			expect(result).toHaveLength(mockCreatedWikis.length);
			expect(result).toEqual(mockCreatedWikis);
		});

		it("should filter wikis by timeFrame (e.g., 30 seconds)", async () => {
			(client.request as jest.Mock).mockResolvedValue({
				userById: {
					wikisCreated: {
						activity: [{ content: mockCreatedWikis }],
					},
				},
			});

			const result = await service.execute("user123", 30);

			expect(result).toHaveLength(1);
			expect(result[0].id).toBe("wiki1");
			expect(new Date(result[0].created!).getTime()).toBeGreaterThanOrEqual(
				MOCK_DATE.getTime() - 30 * 1000,
			);
		});

		it("should filter wikis by timeFrame (e.g., 60 seconds)", async () => {
			(client.request as jest.Mock).mockResolvedValue({
				userById: {
					wikisCreated: {
						activity: [{ content: mockCreatedWikis }],
					},
				},
			});

			const result = await service.execute("user123", 60);

			expect(result).toHaveLength(2);
			expect(result.some((w: any) => w.id === "wiki1")).toBe(true);
			expect(result.some((w: any) => w.id === "wiki2")).toBe(true);
			expect(
				result.every(
					(w: any) =>
						new Date(w.created!) >= new Date(MOCK_DATE.getTime() - 60 * 1000),
				),
			).toBe(true);
		});

		it("should throw 'user does not exist' if userById is null", async () => {
			(client.request as jest.Mock).mockResolvedValue({ userById: null });

			await expect(service.execute("nonexistentUser")).rejects.toThrow(
				"user does not exist",
			);
		});

		it("should throw 'user has not created any wikis' if wikisCreated.activity is null", async () => {
			(client.request as jest.Mock).mockResolvedValue({
				userById: {
					wikisCreated: {
						activity: null,
					},
				},
			});

			await expect(service.execute("userNoCreated")).rejects.toThrow(
				"user has not created any wikis",
			);
		});

		it("should throw 'user has not created any wikis' if wikisCreated.activity is an empty array", async () => {
			(client.request as jest.Mock).mockResolvedValue({
				userById: {
					wikisCreated: {
						activity: [],
					},
				},
			});

			await expect(service.execute("userNoCreated")).rejects.toThrow(
				"Cannot read properties of undefined (reading 'content')",
			);
		});

		it("should throw 'user has not created any wikis' if wikisCreated.activity[0].content is empty", async () => {
			(client.request as jest.Mock).mockResolvedValue({
				userById: {
					wikisCreated: {
						activity: [{ content: [] }],
					},
				},
			});

			await expect(service.execute("userNoCreated")).resolves.toStrictEqual([]);
		});

		it("should throw 'No created wikis found in the last X' error if no wikis in timeframe", async () => {
			(client.request as jest.Mock).mockResolvedValue({
				userById: {
					wikisCreated: {
						activity: [{ content: [mockCreatedWikis[3]] }],
					},
				},
			});

			await expect(service.execute("user123", 90)).rejects.toThrow(
				"No created wikis found in the last 1.5 minute(s)",
			);
		});

		it("should re-throw the error message from the GraphQL client if request fails", async () => {
			const errorMessage = "Network connectivity issue";
			(client.request as jest.Mock).mockRejectedValue(new Error(errorMessage));

			await expect(service.execute("userError")).rejects.toThrow(errorMessage);
		});
	});

	describe("format", () => {
		it("should format a single created wiki correctly", () => {
			const wiki = mockCreatedWikis[0];
			const result = service.format([wiki]);

			const expectedFormattedString = dedent`
                📜 Wiki Created
                - Title: Created Wiki Alpha
                - Summary: This is the first created wiki.
                - Created: ${new Date(wiki.created!).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki1
                🔗 Transaction: https://polygonscan.com/tx/0xhashAlpha
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format multiple created wikis correctly, joined by double newline", () => {
			const wikisToFormat = [mockCreatedWikis[0], mockCreatedWikis[1]];
			const result = service.format(wikisToFormat);

			const expectedFormattedString1 = dedent`
                📜 Wiki Created
                - Title: Created Wiki Alpha
                - Summary: This is the first created wiki.
                - Created: ${new Date(
									wikisToFormat[0].created!,
								).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki1
                🔗 Transaction: https://polygonscan.com/tx/0xhashAlpha
            `;

			const expectedFormattedString2 = dedent`
                📜 Wiki Created
                - Title: Created Wiki Beta
                - Summary: This is the second created wiki.
                - Created: ${new Date(
									wikisToFormat[1].created!,
								).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki2
                🔗 Transaction: https://polygonscan.com/tx/0xhashBeta
            `;
			expect(result.trim()).toEqual(
				`${expectedFormattedString1}\n\n${expectedFormattedString2}`.trim(),
			);
		});

		it("should handle a wiki with missing 'created' field gracefully in formatting (uses current date if not available)", () => {
			const wikiWithoutCreated = {
				id: "wikiNoDate",
				title: "Wiki with no date",
				summary: "This wiki is missing a creation date.",
				transactionHash: "0xhashNoDate",
				created: null,
			};

			const result = service.format([wikiWithoutCreated]);
			const expectedFormattedString = dedent`
                📜 Wiki Created
                - Title: Wiki with no date
                - Summary: This wiki is missing a creation date.
                - Created: 6/24/2025, 11:00:00 AM

                🔗 Source: ${IQ_BASE_URL}/wikiNoDate
                🔗 Transaction: https://polygonscan.com/tx/0xhashNoDate
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});
	});
});
