module.exports.run =(client, message, args) => {
   if(message.member.hasPermission("MANAGE_MESSAGES")) return
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