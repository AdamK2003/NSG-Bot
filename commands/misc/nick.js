module.exports.run =(client, message, args) => {
     let nick = message.content.substring(5);

     message.member.setNickname(nick).then(async m => {
         await message.channel.send(`${message.author} nickname changed to ${nick}`);
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
 
