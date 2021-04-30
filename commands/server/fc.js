  
const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)

// const get = require('get-value')

const FC = require(process.env.ROOTDIR + '/models/fcs.js')

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
FC.find({userID: rUser.id}, (err, arr) => {

message.channel.send(`Friend code of ${rUser}` + arr[0].fc)
})
return
}
