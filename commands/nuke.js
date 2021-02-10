const Discord = require('discord.js');
const config = require('./config.json');

exports.run = async(client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(':warning: **Error**: \nYou do not have permissons to manage messages')
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.channel.send(':warning: **Error**: \nYou did not give me an amount of messages to delete');
if (!amount && !user) return message.channel.send(':warning: **Error**: \nYou did not give me a user and amount, or just an amount, of messages to delete');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => message.channel.send(`:warning: **Error**: \n${err}`));
let kickembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTitle(`:fire: Successfully deleted ${amount} messages`)
    .setFooter(`Cookie v${config.version}b`)
    message.channel.send(kickembed);
})}