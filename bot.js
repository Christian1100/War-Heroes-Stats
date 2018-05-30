const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", async() => {
    console.log("Bot is online!");
});

let prefix = ";";
client.on("message", async(message) => {
	if (message.content.startsWith(`;{prefix}ping`)) {
		await message.channel.send(new Date().getTime() - msg.createdTimestamp + " ms");
	}
});

