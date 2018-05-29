const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
    var cont = msg.content;
    author = msg.member;
    chan = msg.channel;
    guild = msg.guild;
    
    if (author.id != client.user.id && cont.startsWith(';'))
    {
        if(message.content.startsWith(";ping")) 
        {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
        }
    }
});

