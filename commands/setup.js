const Discord = require("discord.js");

exports.run = (client, message, args, collected, size) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':warning: **Error!**: \nYou are not a server administrator, please run this command when your role has the administrator permissions.')
   message.reply('say no!!!!!!!!!!!!!!')
   const filter = m => m.content.startsWith('no');
   message.channel.awaitMessages(filter, { max: 1, time: 60000})
   if (!collected) return message.channel.send(':warning: **COMMAND ABORTED**\nYou did not respond with a yes or no');
        message.channel.send(":octagonal_sign: **COMMAND ABORTED** Ok, " + message.author +" i've aborted the command. - no changes have been done")
    }