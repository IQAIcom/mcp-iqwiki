// For jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest/presets/default-esm", // Use the ESM preset for ts-jest
	testEnvironment: "node",
	testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
	// This is crucial for resolving imports in ESM when 'type: module' is set
	moduleNameMapper: {
		// This maps any .js import to its corresponding .ts file for ts-jest
		// It's often helpful when you have imports ending in .js in your TS source.
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	extensionsToTreatAsEsm: [".ts", ".tsx"], // Tell Jest to treat .ts and .tsx files as ESM
	transform: {
		"^.+\\.(ts|tsx)$": [
			"ts-jest",
			{
				useESM: true, // Crucial for ts-jest to emit ESM compatible code
			},
		],
	},
};
