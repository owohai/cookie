const Discord = require("discord.js")
const config = require('./config.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle(":ping_pong: Pong!")
    .setColor(0x00AE86)
    .setFooter(`Ping is ` + client.ping + `ms | Cookie v${config.version}b`)
    message.channel.send(embed);
}