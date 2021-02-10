const Discord = require('discord.js');
const config = require('./config.json');

exports.run = async(client, message, args) => {
    user = message.author;
    if (message.mentions.users.size > 1) { return message.channel.send('Max 1 user \nUsage: `c!userinfo ...`')
 } else if (message.mentions.users.size > 0) { user = message.mentions.users.array()[0]; }
  gamename = "Not playing a game"; gamestream = "Not streaming";
  if (user.presence.game) {
      gamename = user.presence.game.name;
      gamestream = user.presence.game.streaming;
  }
        let embed = new Discord.RichEmbed()
        .setTitle('Showing userinfo for ' + user.username)
        .setColor(0x00AE86)
        .setThumbnail(user.avatarURL)
        .setFooter(`Cookie v${config.version}b`)
        .setDescription(':id: **ID**: ' + user.id + '\n:hash: **Tag**: ' + user.tag + '\n:robot: **Robot**: ' + user.bot + '\n:information_desk_person: **Status**: ' + user.presence.status +'\n:video_game: **Game**: ' + gamename)
        message.channel.send(embed)
}
