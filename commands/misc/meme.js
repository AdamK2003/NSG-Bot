const https = require('https');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'

module.exports.run =(client, message, args, async) => {
    https.get(url, (result) => {
        var body = ''
        result.on('data', (chunk) => {
            body += chunk
        })

        result.on('end', () => {
            var response = JSON.parse(body)
            var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

            if (index.post_hint !== 'image') {

                var text = index.selftext
                const textembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setColor("RANDOM")
                    .setDescription(`[${title}](${link})\n\n${text}`)
                    .setURL(`https://reddit.com/${subRedditName}`)

                message.channel.send(textembed)
            }

            var image = index.preview.images[0].source.url.replace('&amp;', '&')
            var title = index.title
            var link = 'https://reddit.com' + index.permalink
            var subRedditName = index.subreddit_name_prefixed

            if (index.post_hint !== 'image') {
                const textembed = new Discord.RichEmbed()
                    .setTitle(subRedditName)
                    .setColor("RANDOM")
                    .setDescription(`[${title}](${link})\n\n${text}`)
                    .setURL(`https://reddit.com/${subRedditName}`)

                message.channel.send(textembed)
            }
});

module.exports.help = {
   name: "meme",
   aliases: ['meme'],
   category: 'misc',
   description: "Look at some memes",
   usage: " ",
   cooldown: 6,
   args: false
}})};     
