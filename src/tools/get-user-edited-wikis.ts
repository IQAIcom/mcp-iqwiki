import { z } from "zod";
import { GetUserEditedWikisService } from "../services/get-user-edited-wikis.js";

const getUserEditedWikisParams = z.object({
	id: z.string().min(1).describe("The Ethereum address of the user"),
	timeFrameSeconds: z
		.number()
		.optional()
		.describe("Optional time frame in seconds to filter results"),
});

type GetUserEditedWikisParams = z.infer<typeof getUserEditedWikisParams>;

export const getUserEditedWikisTool = {
	name: "GET_USER_EDITED_WIKIS",
	description: "Get wikis edited by a specific user on IQ.wiki",
	parameters: getUserEditedWikisParams,
	execute: async (params: GetUserEditedWikisParams) => {
		try {
			const service = new GetUserEditedWikisService();
			const wikis = await service.execute(params.id, params.timeFrameSeconds);

			return service.format(wikis);
		} catch (error) {
			if (error instanceof Error) {
				console.log(`Error in GET_USER_EDITED_WIKIS tool: ${error.message}`);
				return `Error retrieving user edited wikis: ${error.message}`;
			}
			return "An unknown error occurred while fetching user edited wikis";
		}
	},
} as const;
