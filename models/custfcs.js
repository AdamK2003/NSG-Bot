const mongoose = require('mongoose')

const fcsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    fc: String,
    type: String
});

module.exports = mongoose.model("custFC", fcsSchema);
