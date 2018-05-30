const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", async() => {
    console.log("Bot is online!");
});

const prefix = ";";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send(new Date().getTime() - msg.createdTimestamp + " ms");
  }
});
