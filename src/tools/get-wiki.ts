import { z } from "zod";
import { GetWikiService } from "../services/get-wiki.js";

const getWikiParams = z.object({
	id: z.string().min(1).describe("The ID of the wiki to retrieve"),
});

type GetWikiParams = z.infer<typeof getWikiParams>;

export const getWikiTool = {
	name: "GET_WIKI",
	description: "Get details about a specific wiki from IQ.wiki by ID",
	parameters: getWikiParams,
	execute: async (params: GetWikiParams) => {
		try {
			const service = new GetWikiService();
			const wiki = await service.execute(params.id);

			return service.format(wiki);
		} catch (error) {
			if (error instanceof Error) {
				console.log(`Error in GET_WIKI tool: ${error.message}`);
				return `Error retrieving wiki: ${error.message}`;
			}
			return "An unknown error occurred while fetching wiki data";
		}
	},
} as const;
