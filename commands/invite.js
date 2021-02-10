const Discord = require("discord.js");
const config = require('./config.json');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send(':warning: **Error**: You do not have the permissions to create a server invite.');
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(':white_check_mark: Invite made!')
    .setFooter(`Cookie v${config.version}b`)
    .setDescription(`${invite}`);
    message.channel.send(embed);
  })}