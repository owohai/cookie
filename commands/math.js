const Discord = require('discord.js');
var math = require('mathjs');
const config = require('./config.json');

exports.run = (client, message, args) => {
    let input = args.join(" ");
    if (!input) {
        message.channel.send('Please give me a mathematical question (ex: 1 + 1) \nUsage `c!calc ...');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.channel.send(`**${err}**`);
    }

    const embed = new Discord.RichEmbed()
        .setFooter(`Cookie v${config.version}b`)
        .setColor('0x00AE86')
        .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png')
        .addField(':question: Question:', question, true)
        .addField(':iphone: Answer:', answer)
        message.channel.send(embed)
}