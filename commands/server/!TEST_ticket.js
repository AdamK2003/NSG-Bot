const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   const embed = new MessageEmbed()
      .setColor("#f20000")
      .setTitle(`Ticket`)
      .addField("...", "....")
      .addField("...", "....")

      message.channel.send(embed);
};

module.exports.help = {
   name: "ticket",
   aliases: ['ticket'],
   category: 'server',
   description: "Set up a Ticket",
   usage: " ",
   cooldown: 6,
   args: false
};     