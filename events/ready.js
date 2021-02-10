const config = require('./config.json');

exports.run = async(client, message, args) => {
   client.user.setActivity(`c!help | v${config.version}b`, { type: "WATCHING" })
}
