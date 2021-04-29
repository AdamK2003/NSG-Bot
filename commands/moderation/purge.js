const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
   if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.channel.send(`Please ${message.author},specify a number beteen 1 and 100!`);

   const messages = await message.channel.messages.fetch({
      limit: Math.min(args[0], 100),
      before: message.id,
   });

   const embed = new MessageEmbed()
       .setColor("#f20000")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Purge`, `${message.author.tag} deleted ${args[0]} messages in ${message.channel}`)
       .setTimestamp()

         await message.channel.bulkDelete(messages).then(async m => {
            await message.channel.send(embed);
            message.delete();
         })
};


module.exports.help = {
   name: "purge",
   aliases: ['purge'],
   category: 'moderation',
   description: "Delete a certain amunt of message between 1 and 100",
   usage: "(amount)",
   cooldown: 0,
   args: true
};     
