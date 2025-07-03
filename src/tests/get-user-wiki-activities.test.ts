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
import { IQ_BASE_URL, IQ_REVISION_URL } from "../constants.js";
import { client } from "../lib/graphql.js";
import { GetUserWikiActivitiesService } from "../services/get-user-wiki-activities.js";

vi.mock("../lib/graphql.js", () => ({
	client: {
		request: vi.fn(),
	},
}));

const MOCK_DATE = new Date("2025-06-24T10:00:00.000Z");
const originalDate = global.Date;

describe("GetUserWikiActivitiesService", () => {
	let service: GetUserWikiActivitiesService;

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
		service = new GetUserWikiActivitiesService();
		vi.clearAllMocks();
	});

	const mockActivities = [
		{
			id: "activity1",
			type: "CREATED",
			datetime: new Date(MOCK_DATE.getTime() - 10 * 1000).toISOString(),
			content: [
				{
					id: "wiki1",
					title: "Created Wiki 1",
					summary: "Summary 1",
					transactionHash: "0xhash1",
				},
			],
		},
		{
			id: "activity2",
			type: "UPDATED",
			datetime: new Date(MOCK_DATE.getTime() - 20 * 1000).toISOString(),
			content: [
				{
					id: "wiki2",
					title: "Updated Wiki 2",
					summary: "Summary 2",
					transactionHash: "0xhash2",
				},
			],
		},
		{
			id: "activity3",
			type: "CREATED",
			datetime: new Date(MOCK_DATE.getTime() - 70 * 1000).toISOString(),
			content: [
				{
					id: "wiki3",
					title: "Created Wiki 3",
					summary: "Summary 3",
					transactionHash: "0xhash3",
				},
			],
		},
		{
			id: "activity4",
			type: "UPDATED",
			datetime: new Date(MOCK_DATE.getTime() - 3600 * 1000).toISOString(),
			content: [
				{
					id: "wiki4",
					title: "Updated Wiki 4",
					summary: "Summary 4",
					transactionHash: "0xhash4",
				},
			],
		},
	];

	const mockWikiMetadata = {
		wiki: {
			id: "wiki2",
			metadata: [
				{ id: "words-changed", value: "100" },
				{ id: "percent-changed", value: "10" },
				{ id: "blocks-changed", value: "3" },
			],
		},
	};

	const mockWikiMetadataNoBlocks = {
		wiki: {
			id: "wiki2",
			metadata: [
				{ id: "words-changed", value: "50" },
				{ id: "percent-changed", value: "5" },
			],
		},
	};

	describe("execute", () => {
		it("should filter activities by type 'CREATED'", async () => {
			vi.mocked(client.request).mockResolvedValue({
				activitiesByUser: mockActivities,
			});

			const result = await service.execute("user123", "CREATED");

			expect(result).toHaveLength(2);
			expect(result[0].type).toBe("CREATED");
			expect(result[1].type).toBe("CREATED");
		});

		it("should filter activities by type AND timeFrame", async () => {
			vi.mocked(client.request).mockResolvedValue({
				activitiesByUser: mockActivities,
			});

			const result = await service.execute("user123", "CREATED", 30);

			expect(result).toHaveLength(1);
			expect(result[0].id).toBe("activity1");
		});

		it("should throw 'User has no wiki activities' error if no activities found", async () => {
			vi.mocked(client.request).mockResolvedValue({ activitiesByUser: [] });

			await expect(service.execute("user123")).rejects.toThrow(
				"User has no wiki activities",
			);
		});

		it("should throw 'User has no wiki activities of type CREATED' error if no activities of specific type found", async () => {
			vi.mocked(client.request).mockResolvedValue({
				activitiesByUser: [mockActivities[1], mockActivities[3]],
			});

			await expect(service.execute("user123", "CREATED")).rejects.toThrow(
				"User has no created wiki activities",
			);
		});

		it("should throw 'No wiki activities found in the last X' error if no activities in timeframe", async () => {
			vi.mocked(client.request).mockResolvedValue({
				activitiesByUser: mockActivities,
			});

			await expect(service.execute("user123", undefined, 1)).rejects.toThrow(
				"No wiki activities found in the last 0 minute(s)",
			);
		});

		it("should throw 'No wiki updated activities found in the last X' error if no filtered activities in timeframe", async () => {
			vi.mocked(client.request).mockResolvedValue({
				activitiesByUser: mockActivities,
			});

			await expect(service.execute("user123", "UPDATED", 1)).rejects.toThrow(
				"No wiki updated activities found in the last 0 minute(s)",
			);
		});

		it("should re-throw the error message from the client request for USER_ACTIVITIES_QUERY", async () => {
			const errorMessage = "GraphQL network error";

			vi.mocked(client.request).mockRejectedValue(new Error(errorMessage));

			await expect(service.execute("user123")).rejects.toThrow(errorMessage);
		});

		it("should continue processing even if wiki metadata fetch fails for one item", async () => {
			vi.mocked(client.request).mockResolvedValueOnce({
				activitiesByUser: [mockActivities[1]],
			});
			vi.mocked(client.request).mockRejectedValueOnce(
				new Error("Wiki metadata fetch failed"),
			);

			const consoleErrorSpy = vi
				.spyOn(console, "error")
				.mockImplementation(() => {});

			const result = await service.execute("user123", "UPDATED");

			expect(result).toHaveLength(1);
			expect(result[0].id).toBe("activity2");
			expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
			expect(consoleErrorSpy).toHaveBeenCalledWith(
				expect.stringContaining("Error fetching metadata for wiki wiki2"),
				expect.any(Error),
			);
			consoleErrorSpy.mockRestore();
		});
	});

	describe("formatCreated", () => {
		it("should format created activities correctly", () => {
			const createdActivities = [mockActivities[0]];

			const result = service.formatCreated(createdActivities);

			const expectedFormattedString = dedent`
                📜 Created Wiki Details
                - Title: Created Wiki 1
                - Summary: Summary 1
                - Created: ${new Date(
									mockActivities[0].datetime,
								).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki1
                🔗 Transaction: https://polygonscan.com/tx/0xhash1
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format multiple created activities correctly, joined by double newline", () => {
			const createdActivities = [mockActivities[0], mockActivities[2]];

			const result = service.formatCreated(createdActivities);

			const expectedFormattedString1 = dedent`
                📜 Created Wiki Details
                - Title: Created Wiki 1
                - Summary: Summary 1
                - Created: ${new Date(
									mockActivities[0].datetime,
								).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki1
                🔗 Transaction: https://polygonscan.com/tx/0xhash1
            `;

			const expectedFormattedString2 = dedent`
                📜 Created Wiki Details
                - Title: Created Wiki 3
                - Summary: Summary 3
                - Created: ${new Date(
									mockActivities[2].datetime,
								).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki3
                🔗 Transaction: https://polygonscan.com/tx/0xhash3
            `;
			expect(result.trim()).toEqual(
				`${expectedFormattedString1}\n\n${expectedFormattedString2}`.trim(),
			);
		});
	});

	describe("formatEdited", () => {
		it("should format edited activities with enriched metadata correctly", async () => {
			const updatedActivity = JSON.parse(JSON.stringify(mockActivities[1]));
			updatedActivity.enrichedMetadata = {
				wordsChanged: "100",
				percentChanged: "10",
				blocksChanged: "3",
			};

			const result = service.formatEdited([updatedActivity]);

			const expectedFormattedString = dedent`
                📜 Edited Wiki Details
                - Title: Updated Wiki 2
                - Summary: Summary 2
                - Edited: ${new Date(updatedActivity.datetime).toLocaleString()}
                - Changes: 100 words (10%)
                - Modified sections: 3

                🔗 Source: ${IQ_REVISION_URL}/${updatedActivity.id}
                🔗 Transaction: https://polygonscan.com/tx/0xhash2
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format edited activities with partial enriched metadata (no blocks changed)", async () => {
			const updatedActivity = JSON.parse(JSON.stringify(mockActivities[1]));
			updatedActivity.enrichedMetadata = {
				wordsChanged: "50",
				percentChanged: "5",
				blocksChanged: "Unknown",
			};

			const result = service.formatEdited([updatedActivity]);

			const expectedFormattedString = dedent`
                📜 Edited Wiki Details
                - Title: Updated Wiki 2
                - Summary: Summary 2
                - Edited: ${new Date(updatedActivity.datetime).toLocaleString()}
                - Changes: 50 words (5%)

                🔗 Source: ${IQ_REVISION_URL}/${updatedActivity.id}
                🔗 Transaction: https://polygonscan.com/tx/0xhash2
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format edited activities without enriched metadata gracefully", () => {
			const updatedActivity = JSON.parse(JSON.stringify(mockActivities[1]));
			delete updatedActivity.enrichedMetadata;

			const result = service.formatEdited([updatedActivity]);

			const expectedFormattedString = dedent`
                📜 Edited Wiki Details
                - Title: Updated Wiki 2
                - Summary: Summary 2
                - Edited: ${new Date(updatedActivity.datetime).toLocaleString()}
                - Edit details not available

                🔗 Source: ${IQ_REVISION_URL}/${updatedActivity.id}
                🔗 Transaction: https://polygonscan.com/tx/0xhash2
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});
	});

	describe("format", () => {
		it("should format created activities using the general format method", () => {
			const createdActivity = mockActivities[0];

			const result = service.format([createdActivity]);

			const expectedFormattedString = dedent`
                📜 Wiki Created
                - Title: Created Wiki 1
                - Summary: Summary 1
                - Created: ${new Date(
									createdActivity.datetime,
								).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki1
                🔗 Transaction: https://polygonscan.com/tx/0xhash1
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format updated activities with enriched metadata using the general format method", () => {
			const updatedActivity = JSON.parse(JSON.stringify(mockActivities[1]));
			updatedActivity.enrichedMetadata = {
				wordsChanged: "100",
				percentChanged: "10",
				blocksChanged: "3",
			};

			const result = service.format([updatedActivity]);

			const expectedFormattedString = dedent`
                📜 Wiki Edited
                - Title: Updated Wiki 2
                - Summary: Summary 2
                - Edited: ${new Date(updatedActivity.datetime).toLocaleString()}
                - Changes: 100 words (10%)
                - Modified sections: 3

                🔗 Source: ${IQ_REVISION_URL}/${updatedActivity.id}
                🔗 Transaction: https://polygonscan.com/tx/0xhash2
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format updated activities without enriched metadata using the general format method gracefully", () => {
			const updatedActivity = JSON.parse(JSON.stringify(mockActivities[1]));
			delete updatedActivity.enrichedMetadata;

			const result = service.format([updatedActivity]);

			const expectedFormattedString = dedent`
                📜 Wiki Edited
                - Title: Updated Wiki 2
                - Summary: Summary 2
                - Edited: ${new Date(updatedActivity.datetime).toLocaleString()}

                🔗 Source: ${IQ_REVISION_URL}/${updatedActivity.id}
                🔗 Transaction: https://polygonscan.com/tx/0xhash2
            `;
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});

		it("should format a mix of created and updated activities", async () => {
			const mixedActivities = JSON.parse(JSON.stringify(mockActivities));
			mixedActivities[1].enrichedMetadata = {
				wordsChanged: "100",
				percentChanged: "10",
				blocksChanged: "3",
			};
			mixedActivities[3].enrichedMetadata = {
				wordsChanged: "50",
				percentChanged: "5",
				blocksChanged: "Unknown",
			};
			vi.mocked(client.request)
				.mockResolvedValueOnce({ activitiesByUser: mixedActivities })
				.mockResolvedValueOnce(mockWikiMetadata)
				.mockResolvedValueOnce(mockWikiMetadataNoBlocks);

			const processedActivities = await service.execute("user123");
			const result = service.format(processedActivities);

			const expectedFormattedCreated1 = dedent`
                📜 Wiki Created
                - Title: Created Wiki 1
                - Summary: Summary 1
                - Created: ${new Date(
									mixedActivities[0].datetime,
								).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki1
                🔗 Transaction: https://polygonscan.com/tx/0xhash1
            `;

			const expectedFormattedUpdated1 = dedent`
                📜 Wiki Edited
                - Title: Updated Wiki 2
                - Summary: Summary 2
                - Edited: ${new Date(
									mixedActivities[1].datetime,
								).toLocaleString()}
                - Changes: 100 words (10%)
                - Modified sections: 3

                🔗 Source: ${IQ_REVISION_URL}/${mixedActivities[1].id}
                🔗 Transaction: https://polygonscan.com/tx/0xhash2
            `;

			const expectedFormattedCreated2 = dedent`
                📜 Wiki Created
                - Title: Created Wiki 3
                - Summary: Summary 3
                - Created: ${new Date(
									mixedActivities[2].datetime,
								).toLocaleString()}

                🔗 Source: ${IQ_BASE_URL}/wiki3
                🔗 Transaction: https://polygonscan.com/tx/0xhash3
            `;

			const expectedFormattedUpdated2 = dedent`
                📜 Wiki Edited
                - Title: Updated Wiki 4
                - Summary: Summary 4
                - Edited: ${new Date(
									mixedActivities[3].datetime,
								).toLocaleString()}
                - Changes: 50 words (5%)

                🔗 Source: ${IQ_REVISION_URL}/${mixedActivities[3].id}
                🔗 Transaction: https://polygonscan.com/tx/0xhash4
            `;

			const expectedResult = [
				expectedFormattedCreated1,
				expectedFormattedUpdated1,
				expectedFormattedCreated2,
				expectedFormattedUpdated2,
			].join("\n\n");

			expect(result.trim()).toEqual(expectedResult.trim());
		});
	});
});
