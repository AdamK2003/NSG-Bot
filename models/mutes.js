const mongoose = require('mongoose')

const mutesSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId(),
            username: String,
            userID: String,
            reason: String,
            MutedBy: String,
            MutedByID: String,
            guildID: String,
            time: message.createdAt.toUTCString() 
   });

module.exports = mongoose.model("FC", fcsSchema);
