module.exports.run =(client, message, args) => {

     message.member.setNickname(args[1]).then(async m => {
         await message.channel.send(`${message.author} nickname changed to "${nick}"`)
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
 
