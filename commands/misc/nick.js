module.exports.run =(client, message, args) => {
   const user = message.mentions.users.first();
      const target = message.guild.member(user);
      let nick = args.slice(2).join(' ');

      target.setNickname(nick).then(async m => {
         await message.channel.send(`${target} nickname changed to "${nick}"`)
      })
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
