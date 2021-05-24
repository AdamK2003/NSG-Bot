
const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)

// const get = require('get-value')

const FC = require(process.env.ROOTDIR + '/models/custfcs.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "cust",
    aliases: ['cust', 'custfc'],
    category: 'fc',
    description: "Check someone's custom fc",
    usage: "<mention> [platform]",
    cooldown: 0,
    args: false
};

module.exports.run = async (client, message, args) => {
    let rUser = message.mentions.members.first() || message.member
    let type = args[1] || 'switch'
    FC.find({ userID: rUser.id, type: type }, (err, arr) => {
        if (!arr[0]) return message.channel.send(`${rUser.user.tag} doesn't have a friend code set!`)
        message.channel.send(`Friend code of ${rUser} for platform \`${type}\`: \`${arr[0].fc}\``);
    })
    return
}
