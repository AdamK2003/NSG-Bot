module.exports.run =(client, message, args) => {
   message.channel.send(`Pong! ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
};

module.exports.help = {
   name: "ping",
   aliases: ['ping'],
   category: 'server',
   description: "ping the bot",
   usage: " ",
   cooldown: 6,
   args: false
};     
