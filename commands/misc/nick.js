module.exports.run =(client, message, args) => {
   const target = message.mentions.members.first();
      const nick = args.slice(1).join(' ');

      if(!target) {
         message.member.setNickname(nick);
         message.channel.send(`${message.author} changed his nickname to **${nick}**!`);
      } else {
         target.member.setNickname(nick);
         message.channel.send(`${message.author} changed ${target} nickname to **${nick}**!`);
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
