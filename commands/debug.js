const Discord = require("discord.js")

exports.run = (client, message, args) => {
    if(message.author.id !== "448274830194769921") return message.channel.send(':closed_lock_with_key: **You are not a bot owner!**')
    try {
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send((evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`**Error!** \`\`\`xl\n${(err)}\`\`\``);
    }
  }