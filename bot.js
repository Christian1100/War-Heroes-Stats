const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", async() => {
    console.log("Bot is online!");
});

const prefix = ";";
client.on("message", async(message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith("ping")) {
    await message.channel.send(new Date().getTime() - msg.createdTimestamp + " ms");
  }
});
