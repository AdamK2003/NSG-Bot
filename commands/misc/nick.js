module.exports.run =(client, message, args) => {
   const user = message.mentions.users.first();
      const target = message.guild.member(user);
      const nick = args.slice(1).join(' ');

      if(!nick) return("Please enter a nickname");
      if(!target) return(message.author.setNickname(nick));
      if(!nick) return(message.author.setNickname(message.meber.tag));

      target.setNickname(nick);
   };


 module.exports.help = {
    name: "nick",
    aliases: ['nick'],
    category: 'misc',
    description: "Nick yourself or someone",
    usage: "(mention) (nickname)",
    cooldown: 10,
    args: true
 };     
 
