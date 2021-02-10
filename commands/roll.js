const Discord = require('discord.js');
const config = require('./config.json');

exports.run = (client, message, args) => {
    let reply = ["1", "3", "5", "6", "2", "4"];

    let dice = new Discord.RichEmbed()
    .setFooter(`Cookie v${config.version}b`)
    .setColor("0x00AE86")
    .setThumbnail('http://moziru.com/images/dice-clipart-six-sided-2.png')
    .setTitle(':game_die: Dice')
    .setDescription('The dice rolled a **' + reply[Math.floor(Math.random() * reply.length)] + '** (six-sided die)')
    message.channel.send(dice)
}