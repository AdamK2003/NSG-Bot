module.exports.run =(client, message, args) => {
   let target = message.mentions.members.first();

      if(!target) {
         let nick = args.slice(0).join(' ');
         message.member.setNickname(nick);
         if(nick) return message.channel.send(`${message.author} changed his nickname to **${nick}**!`);
         return message.channel.send(`${message.author} reset their nickname!`)
      } else {
         let nick = args.slice(1).join(' ');
         target.setNickname(nick);
         if(nick) return message.channel.send(`${message.author} changed ${target}'s nickname to **${nick}**!`);
         return message.channel.send(`${message.author} reset ${target}'s nickname!`)
      }
   };



module.exports.help = {
   name: "nick",
   aliases: ['nick'],
   category: 'misc',
   description: "Nick yourself or someone",
   usage: "[mention] <nickname>",
   cooldown: 10,
   args: true
};     
