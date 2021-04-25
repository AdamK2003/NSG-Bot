const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   
   const user = message.mentions.users.first();
      const target = message.guild.member(user);

         let reason = args.slice(1).join(' ');
         if(!reason) reason = "Not Specified";

       if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!');
       if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.');
       if(!target) return message.channel.send('Can\'t seem to find this user.');
       if(!reason) return(reason = "No reason were specified");

       const embed = new MessageEmbed()
       .setColor("#f20000")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Ban!`, `${message.author.tag} banned ${user.tag} from the server!`)
       .addField(`Reason:`, `${reason}`)
       .setTimestamp()

         message.channel.send(embed).then(async m => {
            await client.channels.cache.get("823962434703327253").send(embed);
            target.ban();
         })
};

module.exports.help = {
   name: "ban",
   aliases: ['ban'],
   category: 'moderation',
   description: "ban a user",
   usage: "(member) (reason)",
   cooldown: 0,
   args: true
};
