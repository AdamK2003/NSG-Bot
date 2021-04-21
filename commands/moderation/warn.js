const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   const user = message.mentions.users.first();
   const target = message.guild.member(user);
      
   let reason = args.slice(1).join(' ');
      if(!reason) reason = "None";

    // If the author don't have perm
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!');
    // If the bot don't have perm
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.');
    // If the bot don't find the user
    if(!target) return message.channel.send('Can\'t seem to find this user.');

    const embed = new MessageEmbed()
       .setColor("#f20000")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Warn`, `${message.author.tag} warned ${target.tag}`)
       .addField(`Reason:`, `${reason}`)
       .setTimestamp()

      message.channel.send(embed).then(async m => {
         await client.channels.cache.get("823962434703327253").send(embed);
      })
};


module.exports.help = {
   name: "warn",
   aliases: ['warn'],
   category: 'moderation',
   description: "Warn a user",
   usage: "(member) (user)",
   cooldown: 0,
   args: true
};     