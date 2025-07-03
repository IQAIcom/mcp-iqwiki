import { z } from "zod";
import { SearchWikiService } from "../services/search-wiki.js";

const searchWikiParams = z.object({
	query: z.string().min(1).describe("The query to search for"),
});

type SearchWikiParams = z.infer<typeof searchWikiParams>;

export const searchWikiTool = {
	name: "SEARCH_WIKI",
	description: "Search for a wiki from IQ.wiki by query",
	parameters: searchWikiParams,
	execute: async (params: SearchWikiParams) => {
		try {
			const service = new SearchWikiService();
			const search = await service.execute(params.query);

			return service.format(search);
		} catch (error) {
			if (error instanceof Error) {
				console.log(`Error in SEARCH_WIKI tool: ${error.message}`);
				return `Error searching for wiki: ${error.message}`;
			}
			return "An unknown error occurred while searching for wiki data";
		}
	},
} as const;
