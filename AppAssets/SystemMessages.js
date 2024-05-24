const UserData = require('./UserPatch.js');
module.exports = [
	// MessageData
	{
		id: '1000000000000000000',
		type: 0,
		channel_id: '1000000000000000000', // If you want to use it, must set ChannelId to 1000000000000000000
		author: UserData['1110633451159306240'], // Custom User Data here
		attachments: [],
		content: null,
		embeds: [
			{
				type: 'rich',
				description: `Bienvenido a discord!`,
				color: 16750296,
				timestamp: '2022-12-31T17:00:00+00:00',
				footer: {
					text: 'SnapPix',
				},
			},
		], // Custom Embed Data here
		mentions: [],
		mention_roles: [],
		pinned: false,
		mention_everyone: false,
		tts: false,
		timestamp: new Date().toISOString(),
		edited_timestamp: null,
		flags: 16,
		components: [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 5,
						label: 'Github',
						emoji: {
							name: 'github',
							id: '889092230063734795',
						},
						url: 'https://github.com/aiko-chan-ai/DiscordBotClient',
					},
					{
						type: 2,
						style: 5,
						label: 'Download App',
						emoji: {
							name: 'taive',
							id: '863716659159891998',
						},
						url: 'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
					},
					{
						type: 2,
						style: 5,
						label: 'Bugs',
						emoji: {
							name: 'BugHunter_lvl1',
							id: '873790531887579187',
						},
						url: 'https://github.com/aiko-chan-ai/DiscordBotClient/issues',
					},
				],
			},
		], // Custom Msg Components Data here
	},
];
