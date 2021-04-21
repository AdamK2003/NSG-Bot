const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   const user = message.mentions.users.first();
      const target = message.guild.member(user);

      let roleName = args.slice(1).join(' ');
      let role = message.guild.roles.cache.find(r => r.name === roleName);

             // If the author don't have perm
             if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!');
             // If the bot don't have perm
             if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.');
             // If the bot don't find the user
             if(!target) return message.channel.send('Can\'t seem to find this user.');

      const embed = new MessageEmbed()
       .setColor("#f20000")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Role Removed!`, `${message.author.tag} removed the ${role.name} role from ${user.tag}`)
       .setTimestamp()

         target.roles.remove(role).then(async m => {
            await message.channel.send(embed);
            client.channels.cache.get("823962434703327253").send(embed);
         })
};

module.exports.help = {
   name: "removerole",
   aliases: ['removerole', 'remove', 'rrole'],
   category: 'moderation',
   description: "remove a role from a member",
   usage: "(member) (role)",
   cooldown: 6,
   args: true
};     