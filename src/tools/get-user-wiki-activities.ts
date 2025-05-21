import { z } from "zod";
import { GetUserWikiActivitiesService } from "../services/get-user-wiki-activities.js";
import type { ActivityType } from "../services/get-user-wiki-activities.js";

const activityTypeEnum = z.enum(["CREATED", "UPDATED"]);

const getUserWikiActivitiesParams = z.object({
	id: z.string().min(1).describe("The Ethereum address of the user"),
	activityType: activityTypeEnum
		.optional()
		.describe("Type of activity: CREATED or UPDATED"),
	timeFrameSeconds: z
		.number()
		.optional()
		.describe("Optional time frame in seconds to filter results"),
});

type GetUserWikiActivitiesParams = z.infer<typeof getUserWikiActivitiesParams>;

export const getWikiActivitiesTool = {
	name: "GET_USER_WIKI_ACTIVITIES",
	description:
		"Get wiki activities (creations or edits) for a specific user on IQ.wiki",
	parameters: getUserWikiActivitiesParams,
	execute: async (params: GetUserWikiActivitiesParams) => {
		try {
			const service = new GetUserWikiActivitiesService();
			const activities = await service.execute(
				params.id,
				params.activityType as ActivityType | undefined,
				params.timeFrameSeconds,
			);

			// Use appropriate formatting based on activity type
			if (params.activityType === activityTypeEnum.enum.CREATED) {
				return service.formatCreated(activities);
			}

			if (params.activityType === activityTypeEnum.enum.UPDATED) {
				return service.formatEdited(activities);
			}

			// Default format for mixed or unspecified activities
			return service.format(activities);
		} catch (error) {
			if (error instanceof Error) {
				console.log(`Error in GET_USER_WIKI_ACTIVITIES tool: ${error.message}`);
				return `Error retrieving user wiki activities: ${error.message}`;
			}
			return "An unknown error occurred while fetching user wiki activities";
		}
	},
} as const;
