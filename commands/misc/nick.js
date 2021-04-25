module.exports.run =(client, message, args) => {
   const user = message.mentions.users.first();
      const target = message.guild.member(user);
      const myself = message.author;
      const nick = args.slice(1).join(' ');

      if(!nick) return("Please enter a nickname");
      if(!target) return(myself.setNickname());

      target.setNickname(nick);
      console.log(message.channel.send(args.join(" ")));
   };


 module.exports.help = {
    name: "nick",
    aliases: ['nick'],
    category: 'misc',
    description: "Nick yourself or someone",
    usage: "(wyw)",
    cooldown: 10,
    args: true
 };     
 
