module.exports.run =(client, message, args) => {
   message.channel.send(args.join(" "));
   message.delete();
};

module.exports.help = {
   name: "say",
   aliases: ['say', 'repeat'],
   category: 'misc',
   description: "make the bot say what you said",
   usage: "(wyw)",
   cooldown: 10,
   args: true
};     