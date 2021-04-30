  
const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)

// const get = require('get-value')

const Report = require(process.env.ROOTDIR + '/models/fc.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "fc",
    aliases: ['fc','getfc'],
    category: 'fc',
    description: "Check someone's fc",
    usage: "<mention>",
    cooldown: 0,
    args: true
};   

module.exports.run = async (client, message, args) => {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send("Invalid user!")
fcs.find({ userID: rUser.id, guildID: message.guild.id }, (err, arr) => {

message.channel.send(`Friend code of ${rUser}` + arr[i].fc)
})
return
}
