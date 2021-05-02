const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)


const Warn = require(process.env.ROOTDIR + '/models/mutes.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "removemutes",
    aliases: ['removemutes','removemute'],
    category: 'moderation',
    description: "Remove a mute from the mutelist.",
    usage: "<muteID>",
    cooldown: 0,
    args: true
};     

module.exports.run = async (client, message, args) => {
    await message.delete()
    if(!message.member.hasPermission(['MANAGE_MESSAGES'], true, true)) return message.channel.send("Nope!")
    let id = args[0]
    if(!id) return message.channel.send("No ID provided!")
    if(id.length != 24) return message.channel.send("Invalid ID!")
    mutes.deleteOne({ _id: id }, (err, res) => {
        if(res.ok != 1) return message.channel.send("An error has occurred!")
        if(res.n == 0) return message.channel.send("Invalid ID!")
        return message.channel.send(id + ": Mute deleted!")
})
}
