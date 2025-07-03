import dedent from "dedent";
import { client } from "../lib/graphql.js";
import { SEARCH_WIKIS_QUERY } from "../lib/queries.js";

export class SearchWikiService {
	async execute(query: string) {
		const response = await client.request(SEARCH_WIKIS_QUERY, { query });
		return response.search;
	}

	format(search: Awaited<ReturnType<typeof this.execute>>) {
		const formattedSearch = dedent`
			📜 Search Results
			- Answer: ${search.answer}
			- Wiki Suggestions: ${(search.suggestions ?? [])
				.map(
					(suggestion: {
						id: string;
						title: string;
					}) => `${suggestion.title} (${suggestion.id})`,
				)
				.join(", ")}
		`;

		return formattedSearch;
	}
}
