const Discord = require('discord.js');
const weather = require('weather-js');
const fs = require('fs');
const client = new Discord.Client();
const config = require('./config.json');

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
 client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
 });
 
client.on('ready', () => {
  console.log(`Ready!`)
  });

client.on("message", message => {
  if(message.channel.type === "dm") return;

  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length).toLowerCase();
  let args = message.content.split(" ").slice(1);

  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(client, message, args)
}
,);
client.login(config.token);
