module.exports.run =(client, message, args) => {
      let nick = args.slice(0).join(' ');

      if(!nick) return(message.channel.send(`Please specify which nickname you want! ${message.author}`))

      message.author.setNickname(nick).then(async m => {
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
 
