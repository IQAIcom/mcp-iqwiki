import { describe, it, expect, vi, beforeEach } from "vitest";
import { IQ_BASE_URL } from "../constants.js";
import { client } from "../lib/graphql.js";
import { WIKI_QUERY } from "../lib/queries.js";
import { GetWikiService } from "../services/get-wiki.js";

vi.mock("../lib/graphql", () => ({
	client: {
		request: vi.fn(),
	},
}));

describe("GetWikiService", () => {
	let service: GetWikiService;

	beforeEach(() => {
		service = new GetWikiService();
		vi.clearAllMocks();
	});

	describe("execute", () => {
		it("should return wiki data if found", async () => {
			const mockWiki = {
				id: "123",
				title: "Test Wiki",
				summary: "This is a test summary.",
				transactionHash: "0xabc",
			};
			vi.mocked(client.request).mockResolvedValue({ wiki: mockWiki });

			const result = await service.execute("123");

			expect(client.request).toHaveBeenCalledTimes(1);
			expect(client.request).toHaveBeenCalledWith(WIKI_QUERY, {
				id: "123",
			});
			expect(result).toEqual(mockWiki);
		});

		it("should throw an error if wiki is not found", async () => {
			vi.mocked(client.request).mockResolvedValue({ wiki: null });

			await expect(service.execute("456")).rejects.toThrow("Wiki Not found");
			expect(client.request).toHaveBeenCalledTimes(1);
			expect(client.request).toHaveBeenCalledWith(WIKI_QUERY, {
				id: "456",
			});
		});

		it("should re-throw the error message from the client request", async () => {
			const errorMessage = "Network error";
			vi.mocked(client.request).mockRejectedValue(new Error(errorMessage));

			await expect(service.execute("789")).rejects.toThrow(errorMessage);
			expect(client.request).toHaveBeenCalledTimes(1);
			expect(client.request).toHaveBeenCalledWith(WIKI_QUERY, {
				id: "789",
			});
		});
	});

	describe("format", () => {
		it("should format the wiki details correctly", () => {
			const mockWiki = {
				id: "wikiId123",
				title: "My Awesome Wiki",
				summary: "This is a summary of my awesome wiki.",
				transactionHash: "0xdeadbeef1234567890abcdef",
			};

			const expectedFormattedString = `
            📜 Wiki Details
- Title: My Awesome Wiki
- Summary: This is a summary of my awesome wiki.

🔗 Source: ${IQ_BASE_URL}/wikiId123
🔗 Transaction: https://polygonscan.com/tx/0xdeadbeef1234567890abcdef
            `;

			const result = service.format(mockWiki);
			expect(result.trim()).toEqual(expectedFormattedString.trim());
		});
	});
});
