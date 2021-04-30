const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)


const Warn = require(process.env.ROOTDIR + '/models/warn.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "clearwarns",
    aliases: ['clearwarns'],
    category: 'moderation',
    description: "Clear someone's warns.",
    usage: "<mention>",
    cooldown: 0,
    args: true
};     

module.exports.run = async (client, message, args) => {
  await message.delete()
  if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send("Nope!")
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send("Invalid user!")
  Warn.deleteMany({ userID: rUser.id, guildID: message.guild.id }, (err, res) => {
    if(res.ok != 1) return message.channel.send("An error has occurred!")
    if(res.n == 0) return message.channel.send(rUser.user.tag+": No warns to delete!")
    return message.channel.send(rUser.user.tag+": " + res.n + " warns deleted!")
})
}