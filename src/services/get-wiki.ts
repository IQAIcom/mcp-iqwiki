import dedent from "dedent";
import { IQ_BASE_URL } from "../constants.js";
import { client } from "../lib/graphql.js";
import { WIKI_QUERY } from "../lib/queries.js";

export class GetWikiService {
	async execute(id: string) {
		try {
			const response = await client.request(WIKI_QUERY, {
				id,
			});

			if (!response.wiki) {
				throw new Error("Wiki Not found");
			}
			return response.wiki;
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			throw new Error(error.message);
		}
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	format(wiki: any) {
		const formattedWiki = dedent`
			📜 Wiki Details
			- Title: ${wiki.title}
			- Summary: ${wiki.summary}

			🔗 Source: ${IQ_BASE_URL}/${wiki.id}
			🔗 Transaction: https://polygonscan.com/tx/${wiki.transactionHash}
		`;

		return formattedWiki;
	}
}
