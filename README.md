# MCP-IQWiki: Model Context Protocol Server for IQ.wiki

This project implements a Model Context Protocol (MCP) server to interact with IQ.wiki data. It allows MCP-compatible clients (like AI assistants, IDE extensions, or custom applications) to access wiki information such as specific wikis by ID, user-created wikis, user-edited wikis, and detailed wiki activities.

## Features (MCP Tools)

The server exposes the following tools that MCP clients can utilize:

- **`GET_WIKI`**: Get details about a specific wiki from the IQ.wiki platform.

  - Parameters: `id` (string) - The ID of the wiki to retrieve.

- **`GET_USER_CREATED_WIKIS`**: List wikis created by a specific user on IQ.wiki.

  - Parameters: `id` (string) - The Ethereum address of the user.
  - Parameters: `timeFrameSeconds` (number, optional) - Time frame in seconds to filter results.

- **`GET_USER_EDITED_WIKIS`**: List wikis edited by a specific user on IQ.wiki.

  - Parameters: `id` (string) - The Ethereum address of the user.
  - Parameters: `timeFrameSeconds` (number, optional) - Time frame in seconds to filter results.

- **`GET_USER_WIKI_ACTIVITIES`**: Get detailed wiki activities (creations or edits) for a user on IQ.wiki.
  - Parameters: `id` (string) - The Ethereum address of the user.
  - Parameters: `activityType` (enum: "CREATED" | "UPDATED", optional) - Type of activity to filter by.
  - Parameters: `timeFrameSeconds` (number, optional) - Time frame in seconds to filter results.

## Prerequisites

- Node.js (v16 or newer recommended)
- pnpm (See <https://pnpm.io/installation>)

## Installation

There are a few ways to use `mcp-iqwiki`:

**1. Using `pnpm dlx` (Recommended for most MCP client setups):**

You can run the server directly using `pnpm dlx` without needing a global installation. This is often the easiest way to integrate with MCP clients.

```bash
pnpm dlx @iqai/mcp-iqwiki
```

**2. Global Installation from npm (via pnpm):**

Install the package globally to make the `mcp-iqwiki` command available system-wide:

```bash
pnpm add -g @iqai/mcp-iqwiki
```

**3. Building from Source (for development or custom modifications):**

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/IQAIcom/mcp-iqwiki.git
    cd mcp-iqwiki
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Build the server:**
    This compiles the TypeScript code to JavaScript in the `dist` directory.

    ```bash
    pnpm run build
    ```

## Running the Server with an MCP Client

MCP clients (like AI assistants, IDE extensions, etc.) will run this server as a background process. You need to configure the client to tell it how to start your server.

Below is an example configuration snippet that an MCP client might use (e.g., in a `mcp_servers.json` or similar configuration file):

```json
{
  "mcpServers": {
    "iq-wiki-mcp-server": {
      "command": "pnpm",
      "args": ["dlx", "@iqai/mcp-iqwiki"]
    }
  }
}
```

**Alternative if Globally Installed:**

If you have installed `mcp-iqwiki` globally, you can simplify the command:

```json
{
  "mcpServers": {
    "iq-wiki-mcp-server": {
      "command": "mcp-iqwiki",
      "args": []
    }
  }
}
```

## Tool Examples

Below are examples of how to use each tool in this MCP server:

### GET_WIKI

```json
{
  "id": "bitcoin"
}
```

Response:

```
📜 Wiki Details
- Title: Bitcoin
- Summary: Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.

🔗 Source: https://iq.wiki/wiki/bitcoin
🔗 Transaction: https://polygonscan.com/tx/0x...
```

Error Response:

```
Error retrieving wiki: Wiki Not found
```

### GET_USER_CREATED_WIKIS

```json
{
  "id": "0x8AF7a19a26d8FBC48dEfB35AEfb15Ec8c407f889",
  "timeFrameSeconds": 3600
}
```

Response:

```
📜 Wiki Created
- Title: Ethereum
- Summary: Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform.
- Created: 1/1/2024, 12:00:00 AM

🔗 Source: https://iq.wiki/wiki/ethereum
🔗 Transaction: https://polygonscan.com/tx/0x...
```

Error Response:

```
Error retrieving user created wikis: user does not exist
```

### GET_USER_EDITED_WIKIS

```json
{
  "id": "0x8AF7a19a26d8FBC48dEfB35AEfb15Ec8c407f889"
}
```

Response:

```
📜 Wiki Edited
- Title: Ethereum
- Summary: Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform.
- Edited: 1/2/2024, 12:00:00 AM
- Changes: 10 words (5%)
- Modified sections: 2

🔗 Source: https://revision.iq.wiki/ipfs/...
🔗 Transaction: https://polygonscan.com/tx/0x...
```

Error Response:

```
Error retrieving user edited wikis: user does not exist
```

### GET_USER_WIKI_ACTIVITIES

```json
{
  "id": "0x8AF7a19a26d8FBC48dEfB35AEfb15Ec8c407f889",
  "activityType": "CREATED",
  "timeFrameSeconds": 86400
}
```

Response:

```
📜 Created Wiki Details
- Title: Bitcoin
- Summary: Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
- Created: 1/1/2024, 12:00:00 AM

🔗 Source: https://iq.wiki/wiki/bitcoin
🔗 Transaction: https://polygonscan.com/tx/0x...
```

Error Response:

```
Error retrieving user wiki activities: User has no wiki activities
```
