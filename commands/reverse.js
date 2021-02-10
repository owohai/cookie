const Discord = require('discord.js')
const config = require('./config.json');

exports.run = (client, message, args, tools) => {
  if(!args[0]) return message.channel.send('You must give me some text to reverse \nUsage: `c!reverse ...`');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let reverse = reverseString(args.join(' ')) 
  if(args[0] === reverse) {
  reverse = `${args.join(' ')}, You broke it! Congrats, you've found one of the easter eggs.`
  }

  const reverseEmbed = new Discord.RichEmbed()
  .setTitle(':white_check_mark: Done!')
  .setColor(0x00AE86)
  .setFooter(`Cookie v${config.version}b`)
  .setDescription('```' + reverse + '```')
  message.channel.send(reverseEmbed)
}