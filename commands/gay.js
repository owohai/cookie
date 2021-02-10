const Discord = require('discord.js');
const config = require('./config.json');

exports.run = (client, message, args) => {
    let replies = ["**10%** gay :slight_smile:", "**30%** gay :slight_smile:", "**50%** gay :slight_smile:", "**70%** gay :gay_pride_flag: ", "**80%** gay :gay_pride_flag: ", "**100%** gay :gay_pride_flag:"];

    let result = Math.floor((Math.random() * replies.length));

    let embed = new Discord.RichEmbed()
    .setFooter(`Cookie v${config.version}b`)
    .setColor("0x00AE86")
    .addField("You are ", replies[result]);
    message.channel.send(embed)
}