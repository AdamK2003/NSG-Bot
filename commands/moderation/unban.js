const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
   
   const user = await client.users.fetch(args [0]);

       if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!');
       if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.');
       if(!target) return message.channel.send('Can\'t seem to find this user.');
       if(!reason) return(reason = "No reason were specified");

       const embed = new MessageEmbed()
       .setColor("#f20000")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Unban!`, `${message.author.tag} unbanned ${user.tag} from the server!`)
       .setTimestamp()

       if (!user) return message.channel.send("No users was find with this ID!");

         message.channel.send(embed).then(async m => {
            await client.channels.cache.get("823962434703327253").send(embed);
            target.unban();
         })
};

module.exports.help = {
   name: "unban",
   aliases: ['unban'],
   category: 'moderation',
   description: "Unban a user",
   usage: "(user.id)",
   cooldown: 0,
   args: true
};
