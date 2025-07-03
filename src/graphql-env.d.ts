/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
	Activity: {
		kind: "OBJECT";
		name: "Activity";
		fields: {
			block: {
				name: "block";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			content: {
				name: "content";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
			created_timestamp: {
				name: "created_timestamp";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			datetime: {
				name: "datetime";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			hidden: {
				name: "hidden";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			ipfs: {
				name: "ipfs";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			language: {
				name: "language";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Language"; ofType: null };
				};
			};
			type: {
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "Status"; ofType: null };
				};
			};
			updated_timestamp: {
				name: "updated_timestamp";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			user: {
				name: "user";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "User"; ofType: null };
				};
			};
			wikiId: {
				name: "wikiId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	ActivityType: { name: "ActivityType"; enumValues: "CREATED" | "UPDATED" };
	Address: {
		kind: "OBJECT";
		name: "Address";
		fields: {
			address: {
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	AdvancedSettings: {
		kind: "OBJECT";
		name: "AdvancedSettings";
		fields: {
			SIGN_EDITS_WITH_RELAYER: {
				name: "SIGN_EDITS_WITH_RELAYER";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
		};
	};
	Blog: {
		kind: "OBJECT";
		name: "Blog";
		fields: {
			body: {
				name: "body";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			contributor: {
				name: "contributor";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			cover_image: {
				name: "cover_image";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			digest: {
				name: "digest";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			excerpt: {
				name: "excerpt";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			hidden: {
				name: "hidden";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			hiddenAt: {
				name: "hiddenAt";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			image_sizes: {
				name: "image_sizes";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			publishedAtTimestamp: {
				name: "publishedAtTimestamp";
				type: { kind: "SCALAR"; name: "Float"; ofType: null };
			};
			publisher: {
				name: "publisher";
				type: { kind: "OBJECT"; name: "Project"; ofType: null };
			};
			slug: {
				name: "slug";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			timestamp: {
				name: "timestamp";
				type: { kind: "SCALAR"; name: "Float"; ofType: null };
			};
			title: {
				name: "title";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			transaction: {
				name: "transaction";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	Boolean: unknown;
	BrainPass: {
		kind: "OBJECT";
		name: "BrainPass";
		fields: {
			created: {
				name: "created";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			image: {
				name: "image";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			metadataHash: {
				name: "metadataHash";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			owner: {
				name: "owner";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			passId: {
				name: "passId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			passName: {
				name: "passName";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			price: {
				name: "price";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			tokenId: {
				name: "tokenId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			transactionHash: {
				name: "transactionHash";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			transactionType: {
				name: "transactionType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			updated: {
				name: "updated";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
		};
	};
	Category: {
		kind: "OBJECT";
		name: "Category";
		fields: {
			cardImage: {
				name: "cardImage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			description: {
				name: "description";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			heroImage: {
				name: "heroImage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			icon: {
				name: "icon";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			title: {
				name: "title";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			weight: {
				name: "weight";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			wikis: {
				name: "wikis";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
		};
	};
	Content: {
		kind: "OBJECT";
		name: "Content";
		fields: {
			input: {
				name: "input";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			output: {
				name: "output";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	ContentFeedbackSite: {
		name: "ContentFeedbackSite";
		enumValues: "IQWIKI" | "IQSOCIAL" | "IQSEARCH";
	};
	Count: {
		kind: "OBJECT";
		name: "Count";
		fields: {
			amount: {
				name: "amount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	DateTime: unknown;
	Direction: { name: "Direction"; enumValues: "ASC" | "DESC" };
	EventType: {
		name: "EventType";
		enumValues: "CREATED" | "DEFAULT" | "MULTIDATE";
	};
	Events: {
		kind: "OBJECT";
		name: "Events";
		fields: {
			action: {
				name: "action";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			continent: {
				name: "continent";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			country: {
				name: "country";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			date: {
				name: "date";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			description: {
				name: "description";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
			link: {
				name: "link";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			multiDateEnd: {
				name: "multiDateEnd";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			multiDateStart: {
				name: "multiDateStart";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			title: {
				name: "title";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			type: {
				name: "type";
				type: { kind: "ENUM"; name: "EventType"; ofType: null };
			};
		};
	};
	Explorer: {
		kind: "OBJECT";
		name: "Explorer";
		fields: {
			baseUrl: {
				name: "baseUrl";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			created: {
				name: "created";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			explorer: {
				name: "explorer";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			hidden: {
				name: "hidden";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
		};
	};
	ExplorerCount: {
		kind: "OBJECT";
		name: "ExplorerCount";
		fields: {
			count: {
				name: "count";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	Feedback: {
		kind: "OBJECT";
		name: "Feedback";
		fields: {
			content: {
				name: "content";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Content"; ofType: null };
					};
				};
			};
			contentId: {
				name: "contentId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			message: {
				name: "message";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			rating: {
				name: "rating";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			reportType: {
				name: "reportType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			userId: {
				name: "userId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	Float: unknown;
	HiIQHolder: {
		kind: "OBJECT";
		name: "HiIQHolder";
		fields: {
			amount: {
				name: "amount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			created: {
				name: "created";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			day: {
				name: "day";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
		};
	};
	HiIQHolderAddress: {
		kind: "OBJECT";
		name: "HiIQHolderAddress";
		fields: {
			address: {
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			block: {
				name: "block";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			created: {
				name: "created";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			tokens: {
				name: "tokens";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
		};
	};
	ID: unknown;
	IQHolder: {
		kind: "OBJECT";
		name: "IQHolder";
		fields: {
			amount: {
				name: "amount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			created: {
				name: "created";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			day: {
				name: "day";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
		};
	};
	Image: {
		kind: "OBJECT";
		name: "Image";
		fields: {
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			type: {
				name: "type";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	Int: unknown;
	IntervalByDays: {
		name: "IntervalByDays";
		enumValues: "DAY" | "WEEK" | "MONTH" | "NINETY_DAYS" | "YEAR";
	};
	IpfsHash: {
		kind: "OBJECT";
		name: "IpfsHash";
		fields: {
			IpfsHash: {
				name: "IpfsHash";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			IsDuplicate: {
				name: "IsDuplicate";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			PinSize: {
				name: "PinSize";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			Timestamp: {
				name: "Timestamp";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	IqSubscription: {
		kind: "OBJECT";
		name: "IqSubscription";
		fields: {
			auxiliaryId: {
				name: "auxiliaryId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
			subscriptionType: {
				name: "subscriptionType";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			userId: {
				name: "userId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			wiki: {
				name: "wiki";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
				};
			};
		};
	};
	Language: {
		kind: "OBJECT";
		name: "Language";
		fields: {
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			title: {
				name: "title";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	LinkedWikis: {
		kind: "OBJECT";
		name: "LinkedWikis";
		fields: {
			blockchains: {
				name: "blockchains";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
			};
			founders: {
				name: "founders";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
			};
			speakers: {
				name: "speakers";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "SCALAR"; name: "String"; ofType: null };
					};
				};
			};
		};
	};
	Links: {
		kind: "OBJECT";
		name: "Links";
		fields: {
			instagram: {
				name: "instagram";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			lens: {
				name: "lens";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			twitter: {
				name: "twitter";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			website: {
				name: "website";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
		};
	};
	MarketRankData: {
		kind: "UNION";
		name: "MarketRankData";
		fields: {};
		possibleTypes: "NftRankListData" | "TokenRankListData";
	};
	Media: {
		kind: "OBJECT";
		name: "Media";
		fields: {
			caption: {
				name: "caption";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			size: {
				name: "size";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			source: {
				name: "source";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "ENUM"; name: "MediaSource"; ofType: null };
				};
			};
			thumbnail: {
				name: "thumbnail";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			type: {
				name: "type";
				type: { kind: "ENUM"; name: "MediaType"; ofType: null };
			};
		};
	};
	MediaSource: {
		name: "MediaSource";
		enumValues: "IPFS_IMG" | "VIMEO" | "YOUTUBE" | "IPFS_VID";
	};
	MediaType: { name: "MediaType"; enumValues: "GALLERY" | "ICON" };
	Metadata: {
		kind: "OBJECT";
		name: "Metadata";
		fields: {
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			value: {
				name: "value";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	Mutation: {
		kind: "OBJECT";
		name: "Mutation";
		fields: {
			addExplorer: {
				name: "addExplorer";
				type: { kind: "OBJECT"; name: "Explorer"; ofType: null };
			};
			addWikiSubscription: {
				name: "addWikiSubscription";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "IqSubscription"; ofType: null };
				};
			};
			contentFeedback: {
				name: "contentFeedback";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			createProfile: {
				name: "createProfile";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "UserProfile"; ofType: null };
				};
			};
			flagWiki: {
				name: "flagWiki";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			hideBlog: {
				name: "hideBlog";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			hideWiki: {
				name: "hideWiki";
				type: { kind: "OBJECT"; name: "Wiki"; ofType: null };
			};
			linkWikiToRankData: {
				name: "linkWikiToRankData";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			pinImage: {
				name: "pinImage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "IpfsHash"; ofType: null };
				};
			};
			pinJSON: {
				name: "pinJSON";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "IpfsHash"; ofType: null };
				};
			};
			promoteWiki: {
				name: "promoteWiki";
				type: { kind: "OBJECT"; name: "Wiki"; ofType: null };
			};
			relayer: {
				name: "relayer";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Relayer"; ofType: null };
				};
			};
			removeWikiSubscription: {
				name: "removeWikiSubscription";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			revalidatePage: {
				name: "revalidatePage";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			toggleUserStateById: {
				name: "toggleUserStateById";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			unhideBlog: {
				name: "unhideBlog";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			unhideWiki: {
				name: "unhideWiki";
				type: { kind: "OBJECT"; name: "Wiki"; ofType: null };
			};
			updateExplorer: {
				name: "updateExplorer";
				type: { kind: "SCALAR"; name: "Boolean"; ofType: null };
			};
			wikiViewCount: {
				name: "wikiViewCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
		};
	};
	NftListData: {
		kind: "OBJECT";
		name: "NftListData";
		fields: {
			alias: {
				name: "alias";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			floor_price_eth: {
				name: "floor_price_eth";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			floor_price_in_usd_24h_percentage_change: {
				name: "floor_price_in_usd_24h_percentage_change";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			floor_price_usd: {
				name: "floor_price_usd";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			h24_volume_native_currency: {
				name: "h24_volume_native_currency";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			h24_volume_usd: {
				name: "h24_volume_usd";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			hasWiki: {
				name: "hasWiki";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			image: {
				name: "image";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			market_cap_usd: {
				name: "market_cap_usd";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			native_currency: {
				name: "native_currency";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			native_currency_symbol: {
				name: "native_currency_symbol";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	NftRankListData: {
		kind: "OBJECT";
		name: "NftRankListData";
		fields: {
			author: {
				name: "author";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			block: {
				name: "block";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			blockchainWikis: {
				name: "blockchainWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			categories: {
				name: "categories";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Category"; ofType: null };
						};
					};
				};
			};
			content: {
				name: "content";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			created: {
				name: "created";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			events: {
				name: "events";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Events"; ofType: null };
					};
				};
			};
			founderWikis: {
				name: "founderWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			hidden: {
				name: "hidden";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			images: {
				name: "images";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Image"; ofType: null };
						};
					};
				};
			};
			ipfs: {
				name: "ipfs";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			language: {
				name: "language";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Language"; ofType: null };
				};
			};
			linkedWikis: {
				name: "linkedWikis";
				type: { kind: "OBJECT"; name: "LinkedWikis"; ofType: null };
			};
			media: {
				name: "media";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Media"; ofType: null };
					};
				};
			};
			metadata: {
				name: "metadata";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Metadata"; ofType: null };
						};
					};
				};
			};
			nftMarketData: {
				name: "nftMarketData";
				type: { kind: "OBJECT"; name: "NftListData"; ofType: null };
			};
			promoted: {
				name: "promoted";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			speakerWikis: {
				name: "speakerWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			summary: {
				name: "summary";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			tags: {
				name: "tags";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Tag"; ofType: null };
						};
					};
				};
			};
			title: {
				name: "title";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			transactionHash: {
				name: "transactionHash";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			user: {
				name: "user";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "User"; ofType: null };
				};
			};
			version: {
				name: "version";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			views: {
				name: "views";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			visits: {
				name: "visits";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
		};
	};
	Notifications: {
		kind: "OBJECT";
		name: "Notifications";
		fields: {
			EDIT_NOTIFICATIONS: {
				name: "EDIT_NOTIFICATIONS";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			EVERIPEDIA_NOTIFICATIONS: {
				name: "EVERIPEDIA_NOTIFICATIONS";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			WIKI_OF_THE_DAY: {
				name: "WIKI_OF_THE_DAY";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			WIKI_OF_THE_MONTH: {
				name: "WIKI_OF_THE_MONTH";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
		};
	};
	OrderBy: {
		name: "OrderBy";
		enumValues:
			| "ID"
			| "VIEWS"
			| "BLOCK"
			| "CREATED"
			| "UPDATED"
			| "DAY"
			| "DATE"
			| "TOKENS";
	};
	Project: {
		kind: "OBJECT";
		name: "Project";
		fields: {
			project: {
				name: "project";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Address"; ofType: null };
				};
			};
		};
	};
	Query: {
		kind: "OBJECT";
		name: "Query";
		fields: {
			IQHolders: {
				name: "IQHolders";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "IQHolder"; ofType: null };
						};
					};
				};
			};
			activities: {
				name: "activities";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Activity"; ofType: null };
						};
					};
				};
			};
			activitiesByCategory: {
				name: "activitiesByCategory";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Activity"; ofType: null };
						};
					};
				};
			};
			activitiesByUser: {
				name: "activitiesByUser";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Activity"; ofType: null };
						};
					};
				};
			};
			activitiesByWikId: {
				name: "activitiesByWikId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Activity"; ofType: null };
						};
					};
				};
			};
			activityById: {
				name: "activityById";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Activity"; ofType: null };
				};
			};
			activityByWikiIdAndBlock: {
				name: "activityByWikiIdAndBlock";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Activity"; ofType: null };
				};
			};
			addressToWiki: {
				name: "addressToWiki";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "WikiUrl"; ofType: null };
						};
					};
				};
			};
			averageRating: {
				name: "averageRating";
				type: { kind: "OBJECT"; name: "RatingsAverage"; ofType: null };
			};
			categories: {
				name: "categories";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Category"; ofType: null };
						};
					};
				};
			};
			categoryById: {
				name: "categoryById";
				type: { kind: "OBJECT"; name: "Category"; ofType: null };
			};
			categoryByTitle: {
				name: "categoryByTitle";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Category"; ofType: null };
						};
					};
				};
			};
			categoryTotal: {
				name: "categoryTotal";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Count"; ofType: null };
				};
			};
			dailyStakedIQ: {
				name: "dailyStakedIQ";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "StakedIQ"; ofType: null };
						};
					};
				};
			};
			dailyTreasury: {
				name: "dailyTreasury";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Treasury"; ofType: null };
						};
					};
				};
			};
			editorCount: {
				name: "editorCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Count"; ofType: null };
				};
			};
			eventWikis: {
				name: "eventWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			explorerCount: {
				name: "explorerCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "ExplorerCount"; ofType: null };
				};
			};
			explorers: {
				name: "explorers";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Explorer"; ofType: null };
						};
					};
				};
			};
			getBlog: {
				name: "getBlog";
				type: { kind: "OBJECT"; name: "Blog"; ofType: null };
			};
			getBlogSuggestions: {
				name: "getBlogSuggestions";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Blog"; ofType: null };
						};
					};
				};
			};
			getBlogs: {
				name: "getBlogs";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: { kind: "OBJECT"; name: "Blog"; ofType: null };
					};
				};
			};
			getHiddenBlogs: {
				name: "getHiddenBlogs";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: { kind: "OBJECT"; name: "Blog"; ofType: null };
					};
				};
			};
			getProfile: {
				name: "getProfile";
				type: { kind: "OBJECT"; name: "UserProfile"; ofType: null };
			};
			getProfileLikeUsername: {
				name: "getProfileLikeUsername";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "UserProfile"; ofType: null };
						};
					};
				};
			};
			hiIQHolders: {
				name: "hiIQHolders";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "HiIQHolder"; ofType: null };
						};
					};
				};
			};
			hiIQHoldersCount: {
				name: "hiIQHoldersCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "HiIQHolder"; ofType: null };
						};
					};
				};
			};
			hiIQHoldersRank: {
				name: "hiIQHoldersRank";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: {
								kind: "OBJECT";
								name: "HiIQHolderAddress";
								ofType: null;
							};
						};
					};
				};
			};
			isAdmin: {
				name: "isAdmin";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			languages: {
				name: "languages";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Language"; ofType: null };
						};
					};
				};
			};
			pageViewsCount: {
				name: "pageViewsCount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Count"; ofType: null };
				};
			};
			promotedWikis: {
				name: "promotedWikis";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
			rankList: {
				name: "rankList";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: { kind: "UNION"; name: "MarketRankData"; ofType: null };
					};
				};
			};
			ratingsByUser: {
				name: "ratingsByUser";
				type: { kind: "OBJECT"; name: "Feedback"; ofType: null };
			};
			ratingsCount: {
				name: "ratingsCount";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "RatingsCount"; ofType: null };
					};
				};
			};
			retrieveBrainPass: {
				name: "retrieveBrainPass";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "BrainPass"; ofType: null };
						};
					};
				};
			};
			search: {
				name: "search";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "SearchResult"; ofType: null };
				};
			};
			searchExplorers: {
				name: "searchExplorers";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Explorer"; ofType: null };
						};
					};
				};
			};
			searchHiIQHoldersByAddress: {
				name: "searchHiIQHoldersByAddress";
				type: { kind: "OBJECT"; name: "HiIQHolderAddress"; ofType: null };
			};
			searchRank: {
				name: "searchRank";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: { kind: "UNION"; name: "MarketRankData"; ofType: null };
					};
				};
			};
			tagById: {
				name: "tagById";
				type: { kind: "OBJECT"; name: "Tag"; ofType: null };
			};
			tags: {
				name: "tags";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Tag"; ofType: null };
						};
					};
				};
			};
			tagsById: {
				name: "tagsById";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Tag"; ofType: null };
						};
					};
				};
			};
			tagsPopular: {
				name: "tagsPopular";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Tag"; ofType: null };
						};
					};
				};
			};
			tokenStats: {
				name: "tokenStats";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "TokenData"; ofType: null };
				};
			};
			totalEventWikis: {
				name: "totalEventWikis";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Count"; ofType: null };
				};
			};
			userById: {
				name: "userById";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			usernameTaken: {
				name: "usernameTaken";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			users: {
				name: "users";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "User"; ofType: null };
						};
					};
				};
			};
			usersById: {
				name: "usersById";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "User"; ofType: null };
						};
					};
				};
			};
			usersHidden: {
				name: "usersHidden";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "User"; ofType: null };
						};
					};
				};
			};
			validWikiSlug: {
				name: "validWikiSlug";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "UNION"; name: "SlugResult"; ofType: null };
				};
			};
			wiki: {
				name: "wiki";
				type: { kind: "OBJECT"; name: "Wiki"; ofType: null };
			};
			wikiSubscriptions: {
				name: "wikiSubscriptions";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "IqSubscription"; ofType: null };
						};
					};
				};
			};
			wikiViews: {
				name: "wikiViews";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "WikiViews"; ofType: null };
						};
					};
				};
			};
			wikis: {
				name: "wikis";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
			wikisByCategory: {
				name: "wikisByCategory";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
			wikisByTitle: {
				name: "wikisByTitle";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
			wikisCreated: {
				name: "wikisCreated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "WikiStats"; ofType: null };
						};
					};
				};
			};
			wikisCreatedByUser: {
				name: "wikisCreatedByUser";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "WikiUserStats"; ofType: null };
				};
			};
			wikisEdited: {
				name: "wikisEdited";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "WikiStats"; ofType: null };
						};
					};
				};
			};
			wikisEditedByUser: {
				name: "wikisEditedByUser";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "WikiUserStats"; ofType: null };
				};
			};
			wikisHidden: {
				name: "wikisHidden";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
			wikisPerVisits: {
				name: "wikisPerVisits";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
		};
	};
	RankType: { name: "RankType"; enumValues: "NFT" | "TOKEN" };
	RatingsAverage: {
		kind: "OBJECT";
		name: "RatingsAverage";
		fields: {
			average: {
				name: "average";
				type: { kind: "SCALAR"; name: "Float"; ofType: null };
			};
			contentId: {
				name: "contentId";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			votes: {
				name: "votes";
				type: { kind: "SCALAR"; name: "Float"; ofType: null };
			};
		};
	};
	RatingsCount: {
		kind: "OBJECT";
		name: "RatingsCount";
		fields: {
			contentId: {
				name: "contentId";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			count: {
				name: "count";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			rating: {
				name: "rating";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	Relayer: {
		kind: "OBJECT";
		name: "Relayer";
		fields: {
			hash: {
				name: "hash";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	SearchResult: {
		kind: "OBJECT";
		name: "SearchResult";
		fields: {
			answer: {
				name: "answer";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			suggestions: {
				name: "suggestions";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "WikiSuggestion"; ofType: null };
					};
				};
			};
		};
	};
	SignaturePayloadInput: {
		kind: "INPUT_OBJECT";
		name: "SignaturePayloadInput";
		isOneOf: false;
		inputFields: [
			{
				name: "ipfs";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "userAddr";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "deadline";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "v";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "r";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
			{
				name: "s";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
				defaultValue: null;
			},
		];
	};
	Slug: {
		kind: "OBJECT";
		name: "Slug";
		fields: {
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	SlugResult: {
		kind: "UNION";
		name: "SlugResult";
		fields: {};
		possibleTypes: "Slug" | "Valid";
	};
	StakedIQ: {
		kind: "OBJECT";
		name: "StakedIQ";
		fields: {
			amount: {
				name: "amount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			created: {
				name: "created";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
		};
	};
	Status: { name: "Status"; enumValues: "CREATED" | "UPDATED" };
	String: unknown;
	Subscription: {
		kind: "OBJECT";
		name: "Subscription";
		fields: {
			marketCapSearchSubscription: {
				name: "marketCapSearchSubscription";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
		};
	};
	Tag: {
		kind: "OBJECT";
		name: "Tag";
		fields: {
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			wikis: {
				name: "wikis";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
		};
	};
	TokenCategory: { name: "TokenCategory"; enumValues: "AI" | "STABLE_COINS" };
	TokenData: {
		kind: "OBJECT";
		name: "TokenData";
		fields: {
			diluted_market_cap: {
				name: "diluted_market_cap";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			diluted_market_cap_percentage_change: {
				name: "diluted_market_cap_percentage_change";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			market_cap: {
				name: "market_cap";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			market_cap_percentage_change: {
				name: "market_cap_percentage_change";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			price_percentage_change: {
				name: "price_percentage_change";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			symbol: {
				name: "symbol";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			token_image_url: {
				name: "token_image_url";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			token_price_in_usd: {
				name: "token_price_in_usd";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			volume: {
				name: "volume";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			volume_percentage_change: {
				name: "volume_percentage_change";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
		};
	};
	TokenListData: {
		kind: "OBJECT";
		name: "TokenListData";
		fields: {
			alias: {
				name: "alias";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			current_price: {
				name: "current_price";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			hasWiki: {
				name: "hasWiki";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			image: {
				name: "image";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			market_cap: {
				name: "market_cap";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			market_cap_change_24h: {
				name: "market_cap_change_24h";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			market_cap_rank: {
				name: "market_cap_rank";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
			name: {
				name: "name";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			price_change_24h: {
				name: "price_change_24h";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
				};
			};
		};
	};
	TokenRankListData: {
		kind: "OBJECT";
		name: "TokenRankListData";
		fields: {
			author: {
				name: "author";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			block: {
				name: "block";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			blockchainWikis: {
				name: "blockchainWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			categories: {
				name: "categories";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Category"; ofType: null };
						};
					};
				};
			};
			content: {
				name: "content";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			created: {
				name: "created";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			events: {
				name: "events";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Events"; ofType: null };
					};
				};
			};
			founderWikis: {
				name: "founderWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			hidden: {
				name: "hidden";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			images: {
				name: "images";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Image"; ofType: null };
						};
					};
				};
			};
			ipfs: {
				name: "ipfs";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			language: {
				name: "language";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Language"; ofType: null };
				};
			};
			linkedWikis: {
				name: "linkedWikis";
				type: { kind: "OBJECT"; name: "LinkedWikis"; ofType: null };
			};
			media: {
				name: "media";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Media"; ofType: null };
					};
				};
			};
			metadata: {
				name: "metadata";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Metadata"; ofType: null };
						};
					};
				};
			};
			promoted: {
				name: "promoted";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			speakerWikis: {
				name: "speakerWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			summary: {
				name: "summary";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			tags: {
				name: "tags";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Tag"; ofType: null };
						};
					};
				};
			};
			title: {
				name: "title";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			tokenMarketData: {
				name: "tokenMarketData";
				type: { kind: "OBJECT"; name: "TokenListData"; ofType: null };
			};
			transactionHash: {
				name: "transactionHash";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			user: {
				name: "user";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "User"; ofType: null };
				};
			};
			version: {
				name: "version";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			views: {
				name: "views";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			visits: {
				name: "visits";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
		};
	};
	Treasury: {
		kind: "OBJECT";
		name: "Treasury";
		fields: {
			created: {
				name: "created";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			totalValue: {
				name: "totalValue";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
		};
	};
	Upload: unknown;
	User: {
		kind: "OBJECT";
		name: "User";
		fields: {
			active: {
				name: "active";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			id: { name: "id"; type: { kind: "SCALAR"; name: "ID"; ofType: null } };
			profile: {
				name: "profile";
				type: { kind: "OBJECT"; name: "UserProfile"; ofType: null };
			};
			wikis: {
				name: "wikis";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
			wikisCreated: {
				name: "wikisCreated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "UNION"; name: "UserWikis"; ofType: null };
				};
			};
			wikisEdited: {
				name: "wikisEdited";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "UNION"; name: "UserWikis"; ofType: null };
				};
			};
		};
	};
	UserActivity: {
		kind: "OBJECT";
		name: "UserActivity";
		fields: {
			activity: {
				name: "activity";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Activity"; ofType: null };
					};
				};
			};
		};
	};
	UserProfile: {
		kind: "OBJECT";
		name: "UserProfile";
		fields: {
			active: {
				name: "active";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			advancedSettings: {
				name: "advancedSettings";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "AdvancedSettings"; ofType: null };
					};
				};
			};
			avatar: {
				name: "avatar";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			banner: {
				name: "banner";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			bio: {
				name: "bio";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			created: {
				name: "created";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			email: {
				name: "email";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			links: {
				name: "links";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Links"; ofType: null };
					};
				};
			};
			notifications: {
				name: "notifications";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Notifications"; ofType: null };
					};
				};
			};
			updated: {
				name: "updated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			username: {
				name: "username";
				type: { kind: "SCALAR"; name: "String"; ofType: null };
			};
			wikiSubscribed: {
				name: "wikiSubscribed";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
						};
					};
				};
			};
			wikiSubscriptions: {
				name: "wikiSubscriptions";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			wikisCreated: {
				name: "wikisCreated";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "UNION"; name: "UserWikis"; ofType: null };
				};
			};
			wikisEdited: {
				name: "wikisEdited";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "UNION"; name: "UserWikis"; ofType: null };
				};
			};
		};
	};
	UserWikis: {
		kind: "UNION";
		name: "UserWikis";
		fields: {};
		possibleTypes: "UserActivity" | "WikiCount";
	};
	Valid: {
		kind: "OBJECT";
		name: "Valid";
		fields: {
			valid: {
				name: "valid";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
		};
	};
	Wiki: {
		kind: "OBJECT";
		name: "Wiki";
		fields: {
			author: {
				name: "author";
				type: { kind: "OBJECT"; name: "User"; ofType: null };
			};
			block: {
				name: "block";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			blockchainWikis: {
				name: "blockchainWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			categories: {
				name: "categories";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Category"; ofType: null };
						};
					};
				};
			};
			content: {
				name: "content";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			created: {
				name: "created";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			events: {
				name: "events";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Events"; ofType: null };
					};
				};
			};
			founderWikis: {
				name: "founderWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			hidden: {
				name: "hidden";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Boolean"; ofType: null };
				};
			};
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			images: {
				name: "images";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Image"; ofType: null };
						};
					};
				};
			};
			ipfs: {
				name: "ipfs";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			language: {
				name: "language";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "Language"; ofType: null };
				};
			};
			linkedWikis: {
				name: "linkedWikis";
				type: { kind: "OBJECT"; name: "LinkedWikis"; ofType: null };
			};
			media: {
				name: "media";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Media"; ofType: null };
					};
				};
			};
			metadata: {
				name: "metadata";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Metadata"; ofType: null };
						};
					};
				};
			};
			promoted: {
				name: "promoted";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			speakerWikis: {
				name: "speakerWikis";
				type: {
					kind: "LIST";
					name: never;
					ofType: {
						kind: "NON_NULL";
						name: never;
						ofType: { kind: "OBJECT"; name: "Wiki"; ofType: null };
					};
				};
			};
			summary: {
				name: "summary";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			tags: {
				name: "tags";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: {
						kind: "LIST";
						name: never;
						ofType: {
							kind: "NON_NULL";
							name: never;
							ofType: { kind: "OBJECT"; name: "Tag"; ofType: null };
						};
					};
				};
			};
			title: {
				name: "title";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			transactionHash: {
				name: "transactionHash";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			updated: {
				name: "updated";
				type: { kind: "SCALAR"; name: "DateTime"; ofType: null };
			};
			user: {
				name: "user";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "OBJECT"; name: "User"; ofType: null };
				};
			};
			version: {
				name: "version";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			views: {
				name: "views";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
			visits: {
				name: "visits";
				type: { kind: "SCALAR"; name: "Int"; ofType: null };
			};
		};
	};
	WikiCount: {
		kind: "OBJECT";
		name: "WikiCount";
		fields: {
			count: {
				name: "count";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	WikiStats: {
		kind: "OBJECT";
		name: "WikiStats";
		fields: {
			amount: {
				name: "amount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
			endOn: {
				name: "endOn";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			startOn: {
				name: "startOn";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
		};
	};
	WikiSuggestion: {
		kind: "OBJECT";
		name: "WikiSuggestion";
		fields: {
			id: {
				name: "id";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "ID"; ofType: null };
				};
			};
			title: {
				name: "title";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	WikiUrl: {
		kind: "OBJECT";
		name: "WikiUrl";
		fields: {
			wiki: {
				name: "wiki";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
		};
	};
	WikiUserStats: {
		kind: "OBJECT";
		name: "WikiUserStats";
		fields: {
			address: {
				name: "address";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "String"; ofType: null };
				};
			};
			amount: {
				name: "amount";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
	WikiViews: {
		kind: "OBJECT";
		name: "WikiViews";
		fields: {
			day: {
				name: "day";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "DateTime"; ofType: null };
				};
			};
			visits: {
				name: "visits";
				type: {
					kind: "NON_NULL";
					name: never;
					ofType: { kind: "SCALAR"; name: "Int"; ofType: null };
				};
			};
		};
	};
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
	name: never;
	query: "Query";
	mutation: "Mutation";
	subscription: "Subscription";
	types: introspection_types;
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
	interface setupSchema {
		introspection: introspection;
	}
}
