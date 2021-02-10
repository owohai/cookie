const Discord = require("discord.js");
const config = require('./config.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor(3750205)
    .setFooter(`Cookie v${config.version}b`)
    .setAuthor('Help has been sent!', 'https://cookie.had-a.party/692edff3.png')
    .setDescription('Check your DMs.')
    message.channel.send({embed});
    const help = new Discord.RichEmbed()
   .setTitle(':cookie: Cookie')
   .setColor(0x00AE86)
   .setFooter(`Cookie v${config.version}b`)
   .setDescription('**help** \nThis command \nUsage: `c!help`\n**ping** \nPong! `60`ms \nUsage: `c!ping` \n**hastebin** \nUploads some text to hastebin \nUsage: `c!hastebin ...` \n**invite** \nGives you the server invite of the server you are in \nUsage: `c!invite`\n**serverinfo** \nGives you information about the server you are in \nUsage: `c!serverinfo` \n**about** \nShows you information about me \nUsage: `c!about`\n**math** \nCalculate something, like 2 + 2 \nUsage `c!math ...`\n**urban** \nSearches the urban dictionary for something \nUsage `c!urban ...`\n**shorten** \nShortens a link \nUsage: `c!shorten ...` \n**add** \nGives you a link to add cookie to your server \nUsage: `c!add`')
   message.author.send(help);
   const help2 = new Discord.RichEmbed()
   .setColor(0x00AE86)
   .setFooter(`Cookie v${config.version}b`)
   .addField(':confetti_ball: Fun', '**say** \nSays what you say \nUsage: `c!say ...` \n**8ball** \nAsks the 8ball about something \nUsage: `c!8ball ...` \n**roll** \nRoll the dice! (six-sided die) \nUsage: `c!roll` \n**reverse** \nReverses your text \nUsage: `c!reverse ...` \n**gay** \nShows how much you are gay \nUsage: `c!gay`')
   message.author.send(help2);
   const help3 = new Discord.RichEmbed()
   .setColor(0x00AE86)
   .setFooter(`Cookie v${config.version}b`)
   .addField(':tools: Moderation', '**kick** \nKicks a user with a reason or no reason \nUsage: `c!kick @... ...` \n**ban** \nBans a user with a reason or no reason \nUsage: `c!ban @... ...` \n**nuke** \nDeletes messages from a user or without a user \nUsage: `c!nuke @... ...`')
   message.author.send(help3);
    }