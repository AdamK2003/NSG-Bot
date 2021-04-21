const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   
   const user = message.mentions.users.first();
      const target = message.guild.member(user);

         let reason = args.slice(1).join(' ');
         if(!reason) reason = "None";

       // If the author don't have perm
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!');
       // If the bot don't have perm
       if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have the right permissions.');
       // If the bot don't find the user
       if(!target) return message.channel.send('Can\'t seem to find this user.');

       const embed = new MessageEmbed()
       .setColor("#f20000")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Kick!`, `${message.author.tag} kicked ${user.tag}`)
       .addField(`Reason:`, `${reason}`)
       .setTimestamp()

       target.kick().then(async m => {
            await client.channels.cache.get("823962434703327253").send(embed);
            message.channel.send(embed);
         })
};

module.exports.help = {
   name: "kick",
   aliases: ['kick'],
   category: 'moderation',
   description: "kick a user",
   usage: "(member) (reason)",
   cooldown: 0,
   args: true
};     