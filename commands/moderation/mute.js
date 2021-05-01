const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Mute = require(process.env.ROOTDIR + '/models/fcs.js')


const Discord = require('discord.js')

const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   const user = message.mentions.users.first();
      const target = message.guild.member(user);

      let reason = args.slice(1).join(' ');
      if(!reason) reason = "None";

      let role = message.guild.roles.cache.find(r => r.name === "muted");

       if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!');
       if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.');
       if(!target) return message.channel.send('Can\'t seem to find this user.');

       const embed = new MessageEmbed()
       .setColor("#f20000")
       .setAuthor(`By ${message.author}`, message.author.displayAvatarURL())
       .addField(`Mute!`, `${message.author} muted ${user}`)
       .addField(`Reason:`, `${reason}`)
       .setTimestamp()
       
         message.channel.send(embed).then(async m => {
            await client.channels.cache.get("823962434703327253").send(embed);
            target.roles.add(role);
         })
         
         const mutes = new Mute({
            _id: mongoose.Types.ObjectId(),
            username: target.user.tag,
            userID: target.id,
            reason: reason,
            MutedBy: message.author.tag,
            MutedByID: message.author.id,
            guildID: message.guild.id,
            time: message.createdAt.toUTCString() 
        })
        
        mutes.save()
     .then(result => console.log(result))
     .catch(err => console.log(err));
};

module.exports.help = {
   name: "mute",
   aliases: ['mute'],
   category: 'moderation',
   description: "mute a user",
   usage: "(member) (reason)",
   cooldown: 0,
   args: true
};     
