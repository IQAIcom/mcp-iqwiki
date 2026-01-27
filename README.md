# 📚 IQ Wiki MCP Server

[![npm version](https://img.shields.io/npm/v/@iqai/mcp-iqwiki.svg)](https://www.npmjs.com/package/@iqai/mcp-iqwiki)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 📖 Overview

The IQ Wiki MCP Server enables AI agents to interact with [IQ.wiki](https://iq.wiki), a blockchain-powered encyclopedia for crypto and DeFi knowledge. This server provides comprehensive access to wiki data, user contributions, and activity tracking.

By implementing the Model Context Protocol (MCP), this server allows Large Language Models (LLMs) to discover wiki articles, search for knowledge, and track user wiki activities directly through their context window, bridging the gap between AI and decentralized knowledge.

## ✨ Features

*   **Wiki Access**: Retrieve detailed information about any wiki article on IQ.wiki by ID.
*   **User Contributions**: Track wikis created or edited by specific users based on their Ethereum address.
*   **Activity Tracking**: Monitor detailed wiki activities (creations and edits) with optional time filtering.
*   **Search**: Search for wiki articles using natural language queries.

## 📦 Installation

### 🚀 Using npx (Recommended)

To use this server without installing it globally:

```bash
npx @iqai/mcp-iqwiki
```

### 📦 Using pnpm dlx

```bash
pnpm dlx @iqai/mcp-iqwiki
```

### 🔧 Build from Source

```bash
git clone https://github.com/IQAIcom/mcp-iqwiki.git
cd mcp-iqwiki
pnpm install
pnpm run build
```

## ⚡ Running with an MCP Client

Add the following configuration to your MCP client settings (e.g., `claude_desktop_config.json`).

### 📋 Minimal Configuration

```json
{
  "mcpServers": {
    "iq-wiki": {
      "command": "npx",
      "args": ["-y", "@iqai/mcp-iqwiki"]
    }
  }
}
```

### ⚙️ Advanced Configuration (Local Build)

```json
{
  "mcpServers": {
    "iq-wiki": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-iqwiki/dist/index.js"]
    }
  }
}
```

## 💡 Usage Examples

### 🔍 Wiki Discovery
*   "Get the wiki article for Bitcoin"
*   "Search for wikis about DeFi protocols"
*   "Find information about Ethereum"

### 👤 User Contributions
*   "What wikis has 0x8AF7a19a26d8FBC48dEfB35AEfb15Ec8c407f889 created?"
*   "Show wikis edited by this user in the last 24 hours"
*   "Get all wiki activities for this Ethereum address"

### 📊 Activity Tracking
*   "List recent wiki creations by user 0x..."
*   "Show wiki edits in the last hour"
*   "Track user wiki contributions over time"

## 🛠️ MCP Tools

<!-- AUTO-GENERATED TOOLS START -->

### `GET_USER_CREATED_WIKIS`
Get wikis created by a specific user on IQ.wiki

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✅ | The Ethereum address of the user |
| `timeFrameSeconds` | number |  | Optional time frame in seconds to filter results |

### `GET_USER_EDITED_WIKIS`
Get wikis edited by a specific user on IQ.wiki

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✅ | The Ethereum address of the user |
| `timeFrameSeconds` | number |  | Optional time frame in seconds to filter results |

### `GET_USER_WIKI_ACTIVITIES`
Get wiki activities (creations or edits) for a specific user on IQ.wiki

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✅ | The Ethereum address of the user |
| `activityType` | string |  | Type of activity: CREATED or UPDATED |
| `timeFrameSeconds` | number |  | Optional time frame in seconds to filter results |

### `GET_WIKI`
Get details about a specific wiki from IQ.wiki by ID

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | ✅ | The ID of the wiki to retrieve |

### `SEARCH_WIKI`
Search for a wiki from IQ.wiki by query

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | ✅ | The query to search for |

<!-- AUTO-GENERATED TOOLS END -->

## 👨‍💻 Development

### 🏗️ Build Project
```bash
pnpm run build
```

### 👁️ Development Mode (Watch)
```bash
pnpm run watch
```

### ✅ Linting & Formatting
```bash
pnpm run lint
pnpm run format
```

### 🧪 Testing
```bash
pnpm test
```

### 📁 Project Structure
*   `src/tools/`: Individual tool definitions
*   `src/services/`: API client and business logic
*   `src/lib/`: Shared utilities
*   `src/index.ts`: Server entry point

## 📚 Resources

*   [IQ.wiki Platform](https://iq.wiki)
*   [Model Context Protocol (MCP)](https://modelcontextprotocol.io)
*   [IQ.wiki Documentation](https://learn.iq.wiki)

## ⚠️ Disclaimer

This tool interacts with IQ.wiki blockchain data. Users should verify all information independently. Wiki content is community-contributed and may change over time.

## 📄 License

[MIT](LICENSE)
