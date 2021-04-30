const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const FC = require(process.env.ROOTDIR + '/models/fcs.js')


const Discord = require('discord.js')


module.exports.run =(client, message, args) => {

   let rUser = message.author;
   let fc = args.slice(0).join(" ")
   if(!fc) return message.reply("Please supply a friend code.")

   const fcs = new FC({
       _id: mongoose.Types.ObjectId(),
       username: message.author.tag,
       userID: message.author.id,
       fc: fc,
       guildID: message.guild.id,
       time: message.createdAt.toUTCString()
   })
   
   fcs.save()
.then(result => console.log(result))
.catch(err => console.log(err));

   message.reply(`${message.author} set his fc to \`${fc}\``);
   message.delete();
};

module.exports.help = {
   name: "addfc",
   aliases: ['addfc', 'setfc'],
   category: 'server',
   description: "Set the friend code of message author",
   usage: " ",
   cooldown: 6,
   args: true
};     
