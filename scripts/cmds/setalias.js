module.exports = {
	config: {
		name: "setalias",
		version: "1.7",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Thêm tên gọi khác cho lệnh",
			en: "Add an alias for the command"
		},
		longDescription: {
			vi: "Thêm tên gọi khác cho 1 lệnh bất kỳ trong nhóm của bạn",
			en: "Add an alias for any command in your group"
		},
		category: "𝗖𝗨𝗦𝗧𝗢𝗠",
		guide: {
			vi: "  Lệnh dùng để thêm/xóa tên gọi khác cho 1 lệnh nào đó để tiện sử dụng trong nhóm chat của bạn"
				+ "\n   {pn} add <tên gọi khác> <tên lệnh>: dùng để thêm tên gọi khác cho lệnh trong nhóm chat của bạn"
				+ "\n   {pn} add <tên gọi khác> <tên lệnh> -g: dùng để thêm tên gọi khác cho lệnh trong toàn hệ thống (chỉ admin bot)"
				+ "\nVí dụ:\n    {pn} add ctrk customrankcard"
				+ "\n\n   {pn} [remove | rm] <tên gọi khác> <tên lệnh>: dùng để xóa tên gọi khác của lệnh trong nhóm chat của bạn"
				+ "\n   {pn} [remove | rm] <tên gọi khác> <tên lệnh> -g: dùng để xóa tên gọi khác của lệnh trong toàn hệ thống (chỉ admin bot)"
				+ "\nVí dụ:\n    {pn} rm ctrk customrankcard"
				+ "\n\n   {pn} list: dùng để xem danh sách tên gọi khác của các lệnh trong nhóm bạn"
				+ "\n   {pn} list -g: dùng để xem danh sách tên gọi khác của các lệnh trong nhóm bạn",
			en: "  This command is used to add/remove alias for any command in your group"
				+ "\n   {pn} add <alias> <command>: add an alias for the command in your group"
				+ "\n   {pn} add <alias> <command> -g: add an alias for the command in the whole system (only bot admin)"
				+ "\nExample:\n    {pn} add ctrk customrankcard"
				+ "\n\n   {pn} [remove | rm] <alias> <command>: remove an alias for the command in your group"
				+ "\n   {pn} [remove | rm] <alias> <command> -g: remove an alias for the command in the whole system (only bot admin)"
				+ "\nExample:\n    {pn} rm ctrk customrankcard"
				+ "\n\n   {pn} list: list all alias for commands in your group"
				+ "\n   {pn} list -g: list all alias for commands in the whole system",
      fr: "  Cette commande est utilisée pour ajouter/supprimer des pseudonymes pour n'importe quelle commande dans votre groupe"
    + "\n   {pn} add <pseudonyme> <commande>: ajoute un pseudonyme pour la commande dans votre groupe"
    + "\n   {pn} add <pseudonyme> <commande> -g: ajoute un pseudonyme pour la commande dans tout le système (seulement l'administrateur du bot)"
    + "\nExemple:\n    {pn} add ctrk customrankcard"
    + "\n\n   {pn} [remove | rm] <pseudonyme> <commande>: supprime un pseudonyme pour la commande dans votre groupe"
    + "\n   {pn} [remove | rm] <pseudonyme> <commande> -g: supprime un pseudonyme pour la commande dans tout le système (seulement l'administrateur du bot)"
    + "\nExemple:\n    {pn} rm ctrk customrankcard"
    + "\n\n   {pn} list: liste tous les pseudonymes pour les commandes dans votre groupe"
    + "\n   {pn} list -g: liste tous les pseudonymes pour les commandes dans tout le système"
		}
	},

	langs: {
		vi: {
			commandNotExist: "❌ Lệnh \"%1\" không tồn tại",
			aliasExist: "❌ Tên gọi \"%1\" đã tồn tại cho lệnh \"%2\" trong hệ thống",
			addAliasSuccess: "✅ Đã thêm tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noPermissionAdd: "❌ Bạn không có quyền thêm tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			aliasIsCommand: "❌ Tên gọi \"%1\" trùng với tên lệnh khác trong hệ thống bot",
			aliasExistInGroup: "❌ Tên gọi \"%1\" đã tồn tại cho lệnh \"%2\" trong nhóm này",
			addAliasToGroupSuccess: "✅ Đã thêm tên gọi \"%1\" cho lệnh \"%2\" trong nhóm chat của bạn",
			aliasNotExist: "❌ Tên gọi \"%1\" không tồn tại trong lệnh \"%2\"",
			removeAliasSuccess: "✅ Đã xóa tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noPermissionDelete: "❌ Bạn không có quyền xóa tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noAliasInGroup: "❌ Lệnh \"%1\" không có tên gọi khác nào trong nhóm của bạn",
			removeAliasInGroupSuccess: "✅ Đã xóa tên gọi \"%1\" khỏi lệnh \"%2\" trong nhóm chat của bạn",
			aliasList: "📜 Danh sách tên gọi khác của các lệnh trong hệ thống:\n%1",
			noAliasInSystem: "⚠️ Hiện tại không có tên gọi nào trong hệ thống",
			notExistAliasInGroup: "⚠️ Nhóm bạn chưa cài đặt tên gọi khác cho lệnh nào cả",
			aliasListInGroup: "📜 Danh sách tên gọi khác của các lệnh trong nhóm chat của bạn:\n%1"
		},
		en: {
			commandNotExist: "❌ Command \"%1\" does not exist",
			aliasExist: "❌ Alias \"%1\" already exists for command \"%2\" in the system",
			addAliasSuccess: "✅ Added alias \"%1\" for command \"%2\" in the system",
			noPermissionAdd: "❌ You do not have permission to add alias \"%1\" for command \"%2\" in the system",
			aliasIsCommand: "❌ Alias \"%1\" is the same as another command in the system",
			aliasExistInGroup: "❌ Alias \"%1\" already exists for command \"%2\" in this group",
			addAliasToGroupSuccess: "✅ Added alias \"%1\" for command \"%2\" in your group chat",
			aliasNotExist: "❌ Alias \"%1\" does not exist for command \"%2\"",
			removeAliasSuccess: "✅ Removed alias \"%1\" for command \"%2\" in the system",
			noPermissionDelete: "❌ You do not have permission to remove alias \"%1\" for command \"%2\" in the system",
			noAliasInGroup: "❌ Command \"%1\" does not have any other alias in your group",
			removeAliasInGroupSuccess: "✅ Removed alias \"%1\" for command \"%2\" in your group chat",
			aliasList: "📜 List of other aliases for commands in the system:\n%1",
			noAliasInSystem: "⚠️ There are no aliases in the system",
			notExistAliasInGroup: "⚠️ Your group has not set any other aliases for commands",
			aliasListInGroup: "📜 List of other aliases for commands in your group chat:\n%1"},
    fr: {
    commandNotExist: "❌ La commande \"%1\" n'existe pas",
    aliasExist: "❌ Le pseudonyme \"%1\" existe déjà pour la commande \"%2\" dans le système",
    addAliasSuccess: "✅ Ajout du pseudonyme \"%1\" pour la commande \"%2\" dans le système",
    noPermissionAdd: "❌ Vous n'avez pas la permission d'ajouter le pseudonyme \"%1\" pour la commande \"%2\" dans le système",
    aliasIsCommand: "❌ Le pseudonyme \"%1\" est identique à une autre commande dans le système",
    aliasExistInGroup: "❌ Le pseudonyme \"%1\" existe déjà pour la commande \"%2\" dans ce groupe",
    addAliasToGroupSuccess: "✅ Ajout du pseudonyme \"%1\" pour la commande \"%2\" dans votre groupe de discussion",
    aliasNotExist: "❌ Le pseudonyme \"%1\" n'existe pas pour la commande \"%2\"",
    removeAliasSuccess: "✅ Suppression du pseudonyme \"%1\" pour la commande \"%2\" dans le système",
    noPermissionDelete: "❌ Vous n'avez pas la permission de supprimer le pseudonyme \"%1\" pour la commande \"%2\" dans le système",
    noAliasInGroup: "❌ La commande \"%1\" n'a pas d'autre pseudonyme dans votre groupe",
    removeAliasInGroupSuccess: "✅ Suppression du pseudonyme \"%1\" pour la commande \"%2\" dans votre groupe de discussion",
    aliasList: "📜 Liste des autres pseudonymes pour les commandes dans le système:\n%1",
    noAliasInSystem: "⚠ Il n'y a pas de pseudonymes dans le système",
    notExistAliasInGroup: "⚠ Votre groupe n'a défini aucun autre pseudonyme pour les commandes",
    aliasListInGroup: "📜 Liste des autres pseudonymes pour les commandes dans votre groupe de discussion:\n%1"
		}
	},

	onStart: async function ({ message, event, args, threadsData, globalData, role, getLang }) {
		const aliasesData = await threadsData.get(event.threadID, "data.aliases", {});

		switch (args[0]) {
			case "add": {
				if (!args[2])
					return message.SyntaxError();
				const commandName = args[2].toLowerCase();
				if (!global.GoatBot.commands.has(commandName))
					return message.reply(getLang("commandNotExist", commandName));
				const alias = args[1].toLowerCase();

				if (args[3] == '-g') {
					if (role > 1) {
						const globalAliasesData = await globalData.get('setalias', 'data', []);
						const globalAliasesExist = globalAliasesData.find(item => item.aliases.includes(alias));
						if (globalAliasesExist)
							return message.reply(getLang("aliasExist", alias, globalAliasesExist.commandName));
						if (global.GoatBot.aliases.has(alias))
							return message.reply(getLang("aliasExist", alias, global.GoatBot.aliases.get(alias)));
						const globalAliasesThisCommand = globalAliasesData.find(aliasData => aliasData.commandName == commandName);
						if (globalAliasesThisCommand)
							globalAliasesThisCommand.aliases.push(alias);
						else
							globalAliasesData.push({
								commandName,
								aliases: [alias]
							});
						await globalData.set('setalias', globalAliasesData, 'data');
						global.GoatBot.aliases.set(alias, commandName);
						return message.reply(getLang("addAliasSuccess", alias, commandName));
					}
					else {
						return message.reply(getLang("noPermissionAdd", alias, commandName));
					}
				}

				if (global.GoatBot.commands.get(alias))
					return message.reply(getLang("aliasIsCommand", alias));
				if (global.GoatBot.aliases.has(alias))
					return message.reply(getLang("aliasExist", alias, global.GoatBot.aliases.get(alias)));
				for (const cmdName in aliasesData)
					if (aliasesData[cmdName].includes(alias))
						return message.reply(getLang("aliasExistInGroup", alias, cmdName));

				const oldAlias = aliasesData[commandName] || [];
				oldAlias.push(alias);
				aliasesData[commandName] = oldAlias;
				await threadsData.set(event.threadID, aliasesData, "data.aliases");
				return message.reply(getLang("addAliasToGroupSuccess", alias, commandName));
			}
			case "remove":
			case "rm": {
				if (!args[2])
					return message.SyntaxError();
				const commandName = args[2].toLowerCase();
				const alias = args[1].toLowerCase();

				if (!global.GoatBot.commands.has(commandName))
					return message.reply(getLang("commandNotExist", commandName));

				if (args[3] == '-g') {
					if (role > 1) {
						const globalAliasesData = await globalData.get('setalias', 'data', []);
						const globalAliasesThisCommand = globalAliasesData.find(aliasData => aliasData.commandName == commandName);
						if (!globalAliasesThisCommand || !globalAliasesThisCommand.aliases.includes(alias))
							return message.reply(getLang("aliasNotExist", alias, commandName));
						globalAliasesThisCommand.aliases.splice(globalAliasesThisCommand.aliases.indexOf(alias), 1);
						await globalData.set('setalias', globalAliasesData, 'data');
						global.GoatBot.aliases.delete(alias);
						return message.reply(getLang("removeAliasSuccess", alias, commandName));
					}
					else {
						return message.reply(getLang("noPermissionDelete", alias, commandName));
					}
				}

				const oldAlias = aliasesData[commandName];
				if (!oldAlias)
					return message.reply(getLang("noAliasInGroup", commandName));
				const index = oldAlias.indexOf(alias);
				if (index === -1)
					return message.reply(getLang("aliasNotExist", alias, commandName));
				oldAlias.splice(index, 1);
				await threadsData.set(event.threadID, aliasesData, "data.aliases");
				return message.reply(getLang("removeAliasInGroupSuccess", alias, commandName));
			}
			case "list": {
				if (args[1] == '-g') {
					const globalAliasesData = await globalData.get('setalias', 'data', []);
					const globalAliases = globalAliasesData.map(aliasData => ({
						commandName: aliasData.commandName,
						aliases: aliasData.aliases.join(', ')
					}));
					return message.reply(
						globalAliases.length ?
							getLang("aliasList", globalAliases.map(alias => `• ${alias.commandName}: ${alias.aliases}`).join('\n')) :
							getLang("noAliasInSystem")
					);
				}

				if (!Object.keys(aliasesData).length)
					return message.reply(getLang("notExistAliasInGroup"));
				const list = Object.keys(aliasesData).map(commandName => `\n• ${commandName}: ${aliasesData[commandName].join(", ")} `);
				return message.reply(getLang("aliasListInGroup", list.join("\n")));
			}
			default: {
				return message.SyntaxError();
			}
		}
	}
};