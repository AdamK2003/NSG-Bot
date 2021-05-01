
const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)

// const get = require('get-value')

const Mute = require(process.env.ROOTDIR + '/models/mutes.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "mutelist",
    aliases: ['mutelist','ml'],
    category: 'Mutes',
    description: "Check someone's mute history",
    usage: "<mention>",
    cooldown: 0,
    args: true
};   

module.exports.run = async (client, message, args) => {
    let rUser = message.mentions.members.first();

    mutes.find({userID: rUser.id}, (err, arr) => {
        if(!arr[0]) return message.channel.send(`This user was never muted!`)

        const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Mutes for " + rUser.user.tag);

if(arr.length == 0) {
    embed.addField("Nothing to see here", '\u200b')
} else {
    var i;
    for(i = 0; i < arr.length; i++) {
        embed.addField('\u200b', '\u200b')
        embed.addField("Muted by " + arr[i].MutedBy, "Reason: " + arr[i].reason)
        embed.addFields(
            { name: "Time", value: arr[i].time, inline: true },
            { name: "Mute ID", value: arr[i]._id, inline: true }
        )
    }
}

        message.channel.send(embed);
    })
return
}
