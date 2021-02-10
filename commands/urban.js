const config = require('./config.json');
const urban = require('relevant-urban'), 
  Discord = require('discord.js'); 

exports.run = async (client, message, args, tools) => {
  if (!message.channel.nsfw) return message.channel.send(":warning: **Error**: \nThis channel isn't marked as NSFW, please try again in a channel that is marked as NSFW");
  if (!args[0]) return message.channel.send('Please give me some text to look up on urban! \nUsage: `c!urban ...`');
  let res = await urban(args.join(' ')).catch(e => { 
    return message.channel.send(':warning: **Error**: \nNo following matches for: "**' + args.join(" ") +'**"');
  });

  const embed = new Discord.RichEmbed()
    .setColor('0x00AE86') 
    .setFooter(`Cookie v${config.version}b`)
    .setTitle(res.word)
    .setDescription(`:speaking_head: **Definition**:\n${res.definition}\n\n:regional_indicator_e: **Example**:\n${res.example}\n\n:bust_in_silhouette: **Author**:\n${res.author}\n\n:thumbsup: **Ratings**: \nUpvotes: ${res.thumbsUp} - Downvotes: ${res.thumbsDown}\n\n:label: **Tags**: \n${res.tags.join(', ')}\n\n:link: **URL**: \n[Click here](${res.urbanURL})`) // The description now holds the main response
    if (res.tags.length > 0 && res.tags.join(' ').length < 1024) {
    if (res.definition.length > 0 && res.tags.join(' ').length < 1024) {
    }
  message.channel.send(embed); 
}
}

