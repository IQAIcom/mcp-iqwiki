import { z } from "zod";
import { GetUserCreatedWikisService } from "../services/get-user-created-wikis.js";

const getUserCreatedWikisParams = z.object({
	id: z.string().min(1).describe("The Ethereum address of the user"),
	timeFrameSeconds: z
		.number()
		.optional()
		.describe("Optional time frame in seconds to filter results"),
});

type GetUserCreatedWikisParams = z.infer<typeof getUserCreatedWikisParams>;

export const getUserCreatedWikisTool = {
	name: "GET_USER_CREATED_WIKIS",
	description: "Get wikis created by a specific user on IQ.wiki",
	parameters: getUserCreatedWikisParams,
	execute: async (params: GetUserCreatedWikisParams) => {
		try {
			const service = new GetUserCreatedWikisService();
			const wikis = await service.execute(params.id, params.timeFrameSeconds);

			return service.format(wikis);
		} catch (error) {
			if (error instanceof Error) {
				console.log(`Error in GET_USER_CREATED_WIKIS tool: ${error.message}`);
				return `Error retrieving user created wikis: ${error.message}`;
			}
			return "An unknown error occurred while fetching user created wikis";
		}
	},
} as const;
