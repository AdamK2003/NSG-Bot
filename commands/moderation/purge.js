const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
   if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.channel.send(`Please ${message.author},specify a number beteen 1 and 100!`);

   const messages = await message.channel.messages.fetch({
      limit: Math.min(args[0], 100),
      before: message.id,
   });

    // If the author don't have perm
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!');
    // If the bot don't have perm
   if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.');
   

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
   description: "Delete a certain amount of messages (between 1 and 100 at a time)",
   usage: "(amount)",
   cooldown: 0,
   args: true
};     
