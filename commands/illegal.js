const Discord = require('discord.js');
var Jimp = require("jimp");
const config = require('./config.json');

exports.run = (client, message, args) => {
    let meow = message.content.split(" ").slice(1);
    let args1 = meow.join(' ');
    let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;
    if (!args1) {
        return message.channel.send('Please give me some words to make illegal \nUsage: `c!illegal ...`')
    }
    if (meow.length > 1) {
        return message.channel.send('**Max 1 word**')
    }
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setFooter(`Cookie v${config.version}b`)
    .setTitle(':white_check_mark: Done')
    .setImage(illegal);
    message.channel.send({embed})
}
