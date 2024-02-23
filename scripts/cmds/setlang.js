const fs = require("fs-extra");

module.exports = {
	config: {
		name: "setlang",
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Cài đặt ngôn ngữ",
			en: "Set default language",
      fr: "Définir la langue par défaut"


		},
		longDescription: {
			vi: "Cài đặt ngôn ngữ của bot cho nhóm chat hiện tại hoặc tất cả các nhóm chat",
			en: "Set default language of bot for current chat or all chats",
      fr: "Définir la langue par défaut du bot pour le chat en cours ou pour tous les chats"
		},
		category: "𝗖𝗨𝗦𝗧𝗢𝗠",
		guide: {
			vi: "   {pn} <language code ISO 639-1"
				+ "\n   Ví dụ:"
				+ "\n    {pn} en"
				+ "\n    {pn} vi",
			en: "\n   {pn} <language code ISO 639-1"
				+ "\n   Example:"
				+ "\n    {pn} en"
				+ "\n    {pn} vi",
      fr: "\n   {pn} <code langue ISO 639-1"
       + " \n Exemple :"
       + " \n {pn} en"
       + " \n {pn} vi"
       +"  \n  {pn} fr"
    
		}
	},

	langs: {
    fr: {
 setLangForAll: "Définir la langue par défaut du bot sur : %1",
 setLangForCurrent: "Définir la langue par défaut pour le chat actuel : %1",
 noPermission : "Seul l'administrateur du bot peut utiliser cette commande",
 langNotFound : "Impossible de trouver la langue: %1"
   },
		vi: {
			setLangForAll: "Đã cài đặt ngôn ngữ mặc định cho bot là: %1",
			setLangForCurrent: "Đã cài đặt ngôn ngữ mặc định cho nhóm chat này là: %1",
			noPermission: "Chỉ admin bot mới có thể sử dụng lệnh này",
			langNotFound: "Không tìm thấy ngôn ngữ: %1"
		},
		en: {
			setLangForAll: "Set default language of bot to: %1",
			setLangForCurrent: "Set default language for current chat: %1",
			noPermission: "Only bot admin can use this command",
			langNotFound: "Can't find language: %1"
		}
	},

	onStart: async function ({ message, args, getLang, threadsData, role, event }) {
		if (!args[0])
			return message.SyntaxError;
		let langCode = args[0].toLowerCase();
		if (langCode == "default" || langCode == "reset")
			langCode = null;

		if (["-g", "-global", "all"].includes(args[1]?.toLowerCase())) {
			if (role < 2)
				return message.reply(getLang("noPermission"));
			const pathLanguageFile = `${process.cwd()}/languages/${langCode}.lang`;
			if (!fs.existsSync(pathLanguageFile))
				return message.reply(getLang("langNotFound", langCode));
			const readLanguage = fs.readFileSync(pathLanguageFile, "utf-8");
			const languageData = readLanguage
				.split(/\r?\n|\r/)
				.filter(line => line && !line.trim().startsWith("#") && !line.trim().startsWith("//") && line != "");

			global.language = {};
			for (const sentence of languageData) {
				const getSeparator = sentence.indexOf('=');
				const itemKey = sentence.slice(0, getSeparator).trim();
				const itemValue = sentence.slice(getSeparator + 1, sentence.length).trim();
				const head = itemKey.slice(0, itemKey.indexOf('.'));
				const key = itemKey.replace(head + '.', '');
				const value = itemValue.replace(/\\n/gi, '\n');
				if (!global.language[head])
					global.language[head] = {};
				global.language[head][key] = value;
			}
			global.GoatBot.config.language = langCode;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("setLangForAll", langCode));
		}

		await threadsData.set(event.threadID, langCode, "data.lang");
		return message.reply((global.GoatBot.commands.get("setlang")?.langs[langCode]?.setLangForCurrent || "Set default language for current chat: %1").replace("%1", langCode));
	}
};