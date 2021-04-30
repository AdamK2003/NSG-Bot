const mongoose = require('mongoose')

const fcsSchema = mongoose.Schema({
       _id: mongoose.Types.ObjectId(),
       username: messager.author.tag,
       userID: message.author.id,
       fc: fc,
       guildID: message.guild.id,
       time: message.createdAt.toUTCString()
   });

module.exports = mongoose.model("FC", fcsSchema);
