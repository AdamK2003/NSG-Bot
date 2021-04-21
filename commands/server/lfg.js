module.exports.run =(client, message, args) => {

   if (!args.length) {

      message.channel.send("Please specify which role you want to ping.");

   } else {
      if (args[0] === "rl") {
         let rl = message.guild.roles.cache.find(r => r.name === "RL");

         message.channel.send(`${message.author} want to play! ${rl}`);
      } else {
         if (args[0] === "among us") {
            let amogus = message.guild.roles.cache.find(r => r.name === "Imposters");
   
            message.channel.send(`${message.author} want to play! ${amogus}`);
         } else {
            if (args[0] === "ssb") {
               let smash = message.guild.roles.cache.find(r => r.name === "Smash");
      
               message.channel.send(`${message.author} want to play! ${smash}`);
            } else {
               if (args[0] === "splatoon") {
                  let splatoon = message.guild.roles.cache.find(r => r.name === "L4G - Splatoon 2");
         
                  message.channel.send(`${message.author} want to play! ${splatoon}`);
               } 
            }
         }
       }
   }
};

module.exports.help = {
   name: "lfg",
   aliases: ['lfg', 'p2p'],
   category: 'server',
   description: "Ping a game role\n**rl** for Rocket League\n**ssb** for Super Smash Bros\n**splatoon** for Splatoon\n**among us** for among us.",
   usage: "(Game)",
   cooldown: 120,
   args: true
};     