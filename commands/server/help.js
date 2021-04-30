const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run =(client, message, args) => {
   var serverIcon = message.guild.iconURL();

   if (!args.length) {
      const embed = new MessageEmbed()
      .setColor("#ffff00")
      .addField("Commands List", `A list of all commands available on the server with an help on how to use them!\nFor more informations about a specific command please type \`${process.env.PREFIX}help (Command Name)\``)

      for (const category of categoryList) {
         embed.addField(
            `${category}`,
               `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
         );
      };

      return message.channel.send(embed);
   } else {
      const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

      const embed = new MessageEmbed()
      .setColor("#f20000")
      .setTitle(`\`${command.help.name}\``)
      .addField("Decription:", `${command.help.description} (cd: ${command.help.cooldown}s)`)
      .addField("How to use:", command.help.usage ? `${process.env.PREFIX}${command.help.name} ${command.help.usage}` : `${process.env.PREFIX}${command.help.name}`, true)

      if (command.help.aliases.length > 1) embed.addField('Alias', `${command.help.aliases.join(', ')}`, true);
      return message.channel.send(embed);
   }
};

module.exports.help = {
   name: "help",
   aliases: ['help'],
   category: 'server',
   description: "Give a list of all commands available on the server",
   usage: "(Command Name)",
   cooldown: 0,
   args: false
};     
