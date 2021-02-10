const Discord = require("discord.js")
const config = require('./config.json');

exports.run = (client, message, args) => {
  let sicon = message.guild.iconURL;
    const embed = new Discord.RichEmbed()
    .setTitle('Showing info for ' + message.guild.name)
    .setColor(0x00AE86)
    .setThumbnail(sicon)
    .setFooter(`Cookie v${config.version}b`)
    .setDescription(':id: **Server ID**: ' + message.guild.id + '\n:flag_white: **Server region**: ' + message.guild.region + '\n:crown: **Server owner**: ' + message.guild.owner + '\n:hash: **Channels**: ' + message.guild.channels.size + '\n:bust_in_silhouette: **Members**: ' + message.guild.memberCount + '\n:scroll: **Role count**: ' + message.guild.roles.size)
    message.channel.send({embed});
    }