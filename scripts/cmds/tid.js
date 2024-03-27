module.exports = {
	config: {
		name: "tid",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Xem id nhóm chat của bạn",
			en: "View threadID of your group chat"
		},
		category: "𝗥𝘆ū_",
		guide: {
			en: "{pn}"
		}
	},

	onStart: async function ({ message, event }) {
		message.reply(event.threadID.toString());
	}
};
