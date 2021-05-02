const mongoose = require('mongoose')

const BansSchema = mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            username: String,
            userID: String,
            reason: String,
            BannedBy: String,
            BannedByID: String,
            guildID: String,
            time: String
   });

module.exports = mongoose.model("Bans", BansSchema);
