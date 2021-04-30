module.exports.run =(client, message, args) => {
   const target = message.mentions.users.first();
      const targetR = message.guild.member(target);
      const nick = args.slice(1).join(' ');

      if(!target) {
         message.author.setNickname(nick);
         message.channel.send(`${message.author} changed his nickname to **${nick}**!`);
      } else {
         target.setNickname(nick);
         targetR.setNickname(nick);
         message.channel.send(`${message.author} changed ${target} nickname to **${nick}**!`);
      }
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
