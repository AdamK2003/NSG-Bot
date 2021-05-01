
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

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`By ${message.author}`, message.author.displayAvatarURL())
        .addField(`Mutes of ${rUser.tag}\n` + arr[0].mutes)

        message.channel.send(embed);
    })
return
}
