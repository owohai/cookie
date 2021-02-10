const Discord = require('discord.js');
const config = require('./config.json');

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(':warning: **Error**: \nYou do not have the permissions to kick members.')
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.channel.send(':warning: **Error**: \nI did not find the user you were trying to kick.');
    if(!member.kickable) 
      return message.channel.send(':warning: **Error**: \nI cannot kick this user because they have a higher role than me.');
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "None";
    
    await member.kick(reason)
      .catch(error => message.channel.send(':warning: **Error**: \nI cannot kick ' + member.user.tag + ' because of ' + err + '.'));
      let kickembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(':white_check_mark: User kicked!')
    .setFooter(`Cookie v${config.version}b`)
    .setDescription(`:bust_in_silhouette: **Username**: ` + member.user.tag + `\n:id: **User ID**: ` + member.user.id + `\n:question: **Reason**: ` + reason);
    message.channel.send(kickembed);
}