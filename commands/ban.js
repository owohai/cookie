const Discord = require('discord.js');
const config = require('./config.json');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(':warning: **Error**: \nYou do not have the permissions to ban members.')
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.channel.send(':warning: **Error**: \nI did not find the user you were trying to ban.');
    if(!member.bannable) 
      return message.channel.send(':warning: **Error**: \nI cannot ban this user because they have a higher role than me.');
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "None";
    
    await member.ban(reason)
      .catch(error => message.channel.send(':warning: **Error**: \nI cannot ban ' + member.user.tag + ' because of ' + err + '.'));
      let banembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(':white_check_mark: User banned!')
    .setFooter(`Cookie v${config.version}b`)
    .setDescription(`:bust_in_silhouette: **Username**: ` + member.user.tag + `\n:id: **User ID**: ` + member.user.id + `\n:question: **Reason**: ` + reason);
    message.channel.send(banembed);
}