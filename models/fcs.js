const mongoose = require('mongoose')

const fcsSchema = mongoose.Schema({
       _id: mongoose.Types.ObjectId(),
       userID: String,
       fc: String
   });

module.exports = mongoose.model("FC", fcsSchema);
