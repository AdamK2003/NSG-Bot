const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
         const user_mention = message.mentions.users.first();

         if (!args.length) {

            const embed = new MessageEmbed()
            .setColor("#ffff00")
            .addField(`Account Created the:`, ` ${message.author.createdAt}`)
            .addField(`User PFP:`, `${message.author.displayAvatarURL({ format : 'png'})}`)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ format : 'png'})}`)
            .setFooter(`ID: ${message.author.id}`)
            
            return message.channel.send(embed);
         } else {

            const embed = new MessageEmbed()
            .setColor("#ffff00")
            .addField(`Account Created the:`, ` ${user_mention.createdAt}`)
            .addField(`User PFP:`, `${user_mention.displayAvatarURL({ format : 'png'})}`)
            .setAuthor(`${user_mention.tag}`, `${user_mention.displayAvatarURL({ format : 'png'})}`)
            .setFooter(`ID: ${user_mention.id}`)
           
            return message.channel.send(embed);
         }
      };
    
module.exports.help = {
         name: "info",
         aliases: ['information', 'user'],
         category: 'server',
         description: "give info about a user",
         usage: "(member)",
         cooldown: 10,
         args: false
      };     
