const Discord = require('discord.js');
const config = require('./config.json');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setFooter("Cookie v1.8b")
    .setColor("0x00AE86")
    .setThumbnail('https://emojipedia-us.s3.amazonaws.com/thumbs/160/twitter/73/black-question-mark-ornament_2753.png')
    .setTitle('About me')
    .setDescription(`Hi! i\'m cookie, cookie is a multi-functional bot with useful commands and more, I was created by **OwaHai** and also with the help of several contributors :slight_smile: \n\n:computer: **Statistics** \n**Servers**: ` + client.guilds.size + `\n**Users**: ` + client.users.size + `\n**Version**: ${config.version}\n\n:link: **Links** \n[Invite](https://discordapp.com/oauth2/authorize?client_id=449942798351859752&scope=bot&permissions=2080898239)`)
    message.channel.send(embed)
}