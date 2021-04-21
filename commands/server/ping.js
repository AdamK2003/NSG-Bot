module.exports.run =(client, message, args) => {
   message.channel.send("Pong!")
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