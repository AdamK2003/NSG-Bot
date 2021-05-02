const axios = require('axios');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports.run =(client, message, args) => {
   const url = "https://some-random-api.ml/meme";

        let image, response;
        let caption, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(url)
            caption = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Meme`)
            .setColor(`RANDOM`)
            .setDescription(url)
            .setImage(image.link)

        await message.channel.send(embed)
};

module.exports.help = {
   name: "meme",
   aliases: ['meme'],
   category: 'misc',
   description: "Look at some memes",
   usage: " ",
   cooldown: 6,
   args: false
};     

// Adam if you read this,yes i mostly copy pasted your meme command lol
