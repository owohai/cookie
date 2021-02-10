const Discord = require("discord.js")
const snekfetch = require('snekfetch');
const config = require('./config.json');

exports.run = (client, message, args) => {
    if (!args.slice(0)
    .join(' ')) return message.channel.send('Please give me some text to post to hastebin \nUsage: `c!hastebin ...`')
snekfetch.post('https://hastebin.com/documents')
    .send(args.slice(0)
        .join(' '))
    .then(body => {
        const embed = new Discord.RichEmbed()
        .setTitle(':white_check_mark: Done!')
        .setColor(0x00AE86)
        .setFooter(`Cookie v${config.version}b`)
        .setDescription('https://hastebin.com/' + body.body.key)
        message.channel.send({embed});
    })}