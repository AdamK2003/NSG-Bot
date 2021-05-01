const mongoose = require('mongoose')

const mutesSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId(),
            username: target.user.tag,
            userID: target.id,
            reason: reason,
            MutedBy: message.author.tag,
            MutedByID: message.author.id,
            guildID: message.guild.id,
            time: message.createdAt.toUTCString() 
   });

module.exports = mongoose.model("FC", fcsSchema);
