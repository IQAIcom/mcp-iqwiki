import dedent from "dedent";
import { IQ_BASE_URL } from "../constants.js";
import { client } from "../lib/graphql.js";
import { USER_CREATED_WIKIS_QUERY } from "../lib/queries.js";

export class GetUserCreatedWikisService {
	async execute(id: string, timeFrameSeconds?: number) {
		try {
			const response: any = await client.request(USER_CREATED_WIKIS_QUERY, {
				id,
			});

			if (!response.userById) {
				throw new Error("user does not exist");
			}
			if (!response.userById.wikisCreated.activity) {
				throw new Error("user has not created any wikis");
			}

			let wikis = response.userById.wikisCreated.activity[0].content;

			// Filter by time if timeFrameSeconds is provided
			if (timeFrameSeconds) {
				const now = new Date();
				const timeLimit = new Date(now.getTime() - timeFrameSeconds * 1000);

				// Filter wikis by creation time
				wikis = wikis.filter((wiki: any) => {
					if (!wiki.created) return false;
					const wikiDate = new Date(wiki.created);
					return wikiDate >= timeLimit;
				});

				if (wikis.length === 0) {
					// Convert seconds to a human-readable format for the error message
					const timeFrameText =
						timeFrameSeconds >= 86400
							? `${timeFrameSeconds / 86400} day(s)`
							: timeFrameSeconds >= 3600
								? `${timeFrameSeconds / 3600} hour(s)`
								: `${timeFrameSeconds / 60} minute(s)`;

					throw new Error(
						`No created wikis found in the last ${timeFrameText}`,
					);
				}
			}

			return wikis;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	format(wikis: any) {
		return wikis
			.map((wiki: any) => {
				const date = new Date(wiki.created);
				const formattedDate = date.toLocaleString();

				return dedent`
						📜 Wiki Created
						- Title: ${wiki.title}
						- Summary: ${wiki.summary}
						- Created: ${formattedDate}

						🔗 Source: ${IQ_BASE_URL}/${wiki.id}
						🔗 Transaction: https://polygonscan.com/tx/${wiki.transactionHash}
					`;
			})
			.join("\n\n");
	}
}
