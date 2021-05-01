const mongoose = require('mongoose')

const mutesSchema = mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            username: String,
            userID: String,
            reason: String,
            MutedBy: String,
            MutedByID: String,
            guildID: String,
            time: String
   });

module.exports = mongoose.model("Mutes", mutesSchema);
