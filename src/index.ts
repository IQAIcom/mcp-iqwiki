#!/usr/bin/env node
import { FastMCP } from "fastmcp";
import { getUserCreatedWikisTool } from "./tools/get-user-created-wikis.js";
import { getUserEditedWikisTool } from "./tools/get-user-edited-wikis.js";
import { getWikiActivitiesTool } from "./tools/get-user-wiki-activities.js";
import { getWikiTool } from "./tools/get-wiki.js";
import { searchWikiTool } from "./tools/search-wiki.js";

async function main() {
	console.log("Initializing IQ Wiki MCP Server...");

	const server = new FastMCP({
		name: "IQ Wiki MCP Server",
		version: "0.0.1",
	});

	server.addTool(getWikiTool);
	server.addTool(getUserCreatedWikisTool);
	server.addTool(getUserEditedWikisTool);
	server.addTool(getWikiActivitiesTool);
	server.addTool(searchWikiTool);

	try {
		await server.start({
			transportType: "stdio",
		});
		console.log("✅ IQ Wiki MCP Server started successfully over stdio.");
		console.log("   You can now connect to it using an MCP client.");
		console.log(
			"   Available tools: GET_WIKI, GET_USER_CREATED_WIKIS, GET_USER_EDITED_WIKIS, GET_USER_WIKI_ACTIVITIES",
		);
	} catch (error) {
		console.error("❌ Failed to start IQ Wiki MCP Server:", error);
		process.exit(1);
	}
}

main().catch((error) => {
	console.error(
		"❌ An unexpected error occurred in the IQ Wiki MCP Server:",
		error,
	);
	process.exit(1);
});
