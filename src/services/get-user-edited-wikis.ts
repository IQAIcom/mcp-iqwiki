import dedent from "dedent";
import { IQ_BASE_URL, IQ_REVISION_URL } from "../constants.js";
import { client } from "../lib/graphql.js";
import { USER_EDITED_WIKIS_QUERY } from "../lib/queries.js";

export class GetUserEditedWikisService {
	async execute(id: string, timeFrameSeconds?: number) {
		try {
			// biome-ignore lint/suspicious/noExplicitAny: the type UserWikiResponse is not exposing updated
			const response: any = await client.request(USER_EDITED_WIKIS_QUERY, {
				id,
			});

			if (!response.userById) {
				throw new Error("user does not exist");
			}
			if (!response.userById.wikisEdited.activity) {
				throw new Error("user has not edited any wikis");
			}

			let wikis = response.userById.wikisEdited.activity[0].content;

			// Since the updated field is null for edited wikis, we need to detect edits by metadata
			// Filter out wikis that aren't actually edits (they should have previous_cid in metadata)
			// biome-ignore lint/suspicious/noExplicitAny: the type wiki is not exposing metadata
			wikis = wikis.filter((wiki: any) => {
				// Check for edit-specific metadata
				const hasMetadata = wiki.metadata && Array.isArray(wiki.metadata);
				if (!hasMetadata) return false;

				// Look for previous_cid which indicates this is an edit
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				return wiki.metadata.some((meta: any) => meta.id === "previous_cid");
			});

			// Filter by time if timeFrameSeconds is provided
			// Since we don't have updated timestamps, we'll use timestamp from references if available
			if (timeFrameSeconds && wikis.length > 0) {
				const now = new Date();
				const timeLimit = new Date(now.getTime() - timeFrameSeconds * 1000);

				// We need to skip time filtering because we don't have reliable timestamps
				// Just inform the user that we can't filter by time
				if (wikis.length === 0) {
					// Convert seconds to a human-readable format for the error message
					const timeFrameText =
						timeFrameSeconds >= 86400
							? `${timeFrameSeconds / 86400} day(s)`
							: timeFrameSeconds >= 3600
								? `${timeFrameSeconds / 3600} hour(s)`
								: `${timeFrameSeconds / 60} minute(s)`;

					throw new Error(`No edited wikis found in the last ${timeFrameText}`);
				}
			}

			return wikis;
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	format(wikis: any) {
		return (
			wikis
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				.map((wiki: any) => {
					// Find edit-related metadata
					const wordsChanged =
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						wiki.metadata.find((m: any) => m.id === "words-changed")?.value ||
						"Unknown";
					const percentChanged =
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						wiki.metadata.find((m: any) => m.id === "percent-changed")?.value ||
						"Unknown";
					const blocksChanged =
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
						wiki.metadata.find((m: any) => m.id === "blocks-changed")?.value ||
						"Unknown";

					// Get the date from updated or fallback to a reasonable alternative
					const date = new Date(wiki.updated || wiki.created);
					const formattedDate = date.toLocaleString();

					return dedent`
						📜 Wiki Edited
						- Title: ${wiki.title}
						- Summary: ${wiki.summary}
						- Edited: ${formattedDate}
						- Changes: ${wordsChanged} words (${percentChanged}%)
						- Modified sections: ${blocksChanged}

						🔗 Source: ${IQ_REVISION_URL}/${wiki.ipfs}
						🔗 Transaction: https://polygonscan.com/tx/${wiki.transactionHash}
					`;
				})
				.join("\n\n")
		);
	}
}
