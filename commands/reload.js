const Discord = require("discord.js")
const config = require('./config.json');

exports.run = (client, message, args) => {
    if(message.author.id !== "295193883875344384") return message.channel.send(':closed_lock_with_key: **You are not a bot owner!**')
    if (!args[0]) return message.channel.send("You must give me a command to reload \nUsage: `c!reload ...`");
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        const embed = new Discord.RichEmbed()
        .setTitle(':white_check_mark: Done!')
        .setColor(0x00AE86)
        .setFooter(`Cookie v${config.version}b`)
        .setDescription('The command **' + args[0]  + '** has been reloaded')
        message.channel.send({embed});
    }

