const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)

// const get = require('get-value')

const Report = require(process.env.ROOTDIR + '/models/warn.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "getwarns",
    aliases: ['warns','getwarns'],
    category: 'warns',
    description: "Check someone's warns.",
    usage: "<mention>",
    cooldown: 0,
    args: true
};   

module.exports.run = async (client, message, args) => {
    await message.delete()
    if(!message.member.hasPermission(['MANAGE_MESSAGES'], true, true)) return message.channel.send("Nope!")
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send("Invalid user!")
Report.find({ userID: rUser.id, guildID: message.guild.id }, (err, arr) => {

const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Warns for " + rUser.user.tag);

if(arr.length == 0) {
    embed.addField("Nothing to see here", '\u200b')
} else {
    var i;
    for(i = 0; i < arr.length; i++) {
        embed.addField('\u200b', '\u200b')
        embed.addField("Warned by " + arr[i].reportedBy, "Reason: " + arr[i].reason)
        embed.addFields(
            { name: "Time", value: arr[i].time, inline: true },
            { name: "Warn ID", value: arr[i]._id, inline: true }
        )
    }
}
return message.channel.send(embed)
})
return
}