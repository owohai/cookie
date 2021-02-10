const Discord = require("discord.js")
const config = require('./config.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(args.join(" "))
    .setFooter(`Message created by ${message.author.username} | Cookie v${config.version}b`);
    if (!args[0]) return message.channel.send("You must give me some text to say \nUsage: `c!say ...`");
    message.channel.send({embed})
}
