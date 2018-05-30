const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", async() => {
    console.log("Bot is online!");
});

client.on('message', msg => {
    var cont = msg.content;
    author = msg.member;
    chan = msg.channel;
    guild = msg.guild;
    
    if (author.id != client.user.id && cont.startsWith(';'))
    {
        if(cont.startsWith(';ping')) 
        {
            msg.channel.send(new Date().getTime() - msg.createdTimestamp + ' ms');        
        }
    }
});
