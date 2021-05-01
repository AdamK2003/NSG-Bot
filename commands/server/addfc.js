const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const FC = require(process.env.ROOTDIR + '/models/fcs.js')


const Discord = require('discord.js')


module.exports.run =(client, message, args) => {

   let rUser = message.author;
   let fc = args.slice(0).join(" ")
   if(!fc) return message.reply("Please supply a friend code.")

FC.find({ userID: message.author.id }, (err, arr) => {

 if(!arr[0]) {
   const fcs = new FC({
       _id: mongoose.Types.ObjectId(),
       userID: message.author.id,
       fc: fc
   })
   
   fcs.save()
.then(result => console.log(result))
.catch(err => console.log(err));

   message.channel.send(`${message.author} set their fc to \`${fc}\``);
   message.delete();

   return
    }

    let dbID = arr[0]._id

FC.update({ _id: dbID }, { fc: fc } , err => { // replace exp: expVal with fc: fc
    if(err) return console.log("An error has occurred when updating DB entry!\n\n" + err)
    })

   message.channel.send(`${message.author} set their fc to \`${fc}\``);
   message.delete();
});
}

module.exports.help = {
   name: "addfc",
   aliases: ['addfc', 'setfc'],
   category: 'fc',
   description: "Set the friend code of message author",
   usage: "<fc here>",
   cooldown: 6,
   args: true
};     
