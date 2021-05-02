const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)

// const get = require('get-value')

const Bans = require(process.env.ROOTDIR + '/models/bans.js')
const Report = require(process.env.ROOTDIR + '/models/warn.js')
const Mutes = require(process.env.ROOTDIR + '/models/mutes.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "history",
    aliases: ['history','punishement'],
    category: 'moderation',
    description: "Check someone's punishement.",
    usage: "<mention>",
    cooldown: 0,
    args: true
};   

module.exports.run = async (client, message, args) => {
    await message.delete()
    if(!message.member.hasPermission(['MANAGE_MESSAGES'], true, true)) return message.channel.send("Nope!")
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send("Invalid user!")

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Punishements of " + rUser.user.tag);

Bans.find({ userID: rUser.id, guildID: message.guild.id }, (err, arr) => {
   if(arr.length == 0) {
      embed.addField("**Bans**\nNothing to see here", '\u200b')
  } else {
      var i;
      for(i = 0; i < arr.length; i++) {
          embed.addField('\u200b', '\u200b')
          embed.addField("**Bans**\nBanned by " + arr[i].BannedBy, "Reason: " + arr[i].reason)
          embed.addFields(
              { name: "Time", value: arr[i].time, inline: true },
              { name: "Ban ID", value: arr[i]._id, inline: true }
          )
      }
  }
Report.find({ userID: rUser.id, guildID: message.guild.id }, (err, arr) => {
   if(arr.length == 0) {
      embed.addField("**Warns**\nNothing to see here", '\u200b')
  } else {
      var i;
      for(i = 0; i < arr.length; i++) {
          embed.addField('\u200b', '\u200b')
          embed.addField("**Warns**\nWarned by " + arr[i].WarnedBy, "Reason: " + arr[i].reason)
          embed.addFields(
              { name: "Time", value: arr[i].time, inline: true },
              { name: "Warn ID", value: arr[i]._id, inline: true }
          )
      }
  }
Mutes.find({ userID: rUser.id, guildID: message.guild.id }, (err, arr) => {
   if(arr.length == 0) {
      embed.addField("**Mutes**\nNothing to see here", '\u200b')
  } else {
      var i;
      for(i = 0; i < arr.length; i++) {
          embed.addField('\u200b', '\u200b')
          embed.addField("**Mutes**\nMuted by " + arr[i].BannedBy, "Reason: " + arr[i].reason)
          embed.addFields(
              { name: "Time", value: arr[i].time, inline: true },
              { name: "Mute ID", value: arr[i]._id, inline: true }
          )
      }
  }
message.channel.send(embed)
})})})
return
}
