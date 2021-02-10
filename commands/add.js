const Discord = require("discord.js");
const config = require('./config.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor(3750205)
    .setFooter(`Cookie v${config.version}b`)
    .setTitle(`Add cookie to your server!`)
    .setDescription('Click [here](https://discordapp.com/oauth2/authorize?client_id=449942798351859752&scope=bot&permissions=2080898239) to add cookie to your server.')
    message.channel.send(embed)
}