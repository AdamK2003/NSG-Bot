const { Client, Collection } = require('discord.js');
const { readdirSync } = require("fs");

const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync (`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Command Loaded: ${getFileName.help.name}`);
    };
  });
};

loadCommands();

client.on('message', message => {
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
  const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
  //agrs coupe la commande en plusieurs parti a partir de " " ( !pfp @test @test& = @test, @test1)
  const commandName = args.shift().toLowerCase();
  // va garder seulement la command (!pfp @test @test& = @test, @test1 = !pfp)


  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  console.log(client.commands);
  if (!command) return;

  if (command.help.args && !args.length) {
    let noArgsReply = `Please type the command in the right way ${message.author}`;

    if (command.help.usage) noArgsReply += `\nUsage: ${process.env.PREFIX}${command.help.name} ${command.help.usage}`

    return message.channel.send(noArgsReply);
  }

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 0) * 1000;
  console.log(client.cooldowns);

  if (tStamps.has(message.author.id)) {
   const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

   if (timeNow < cdExpirationTime) {
     timeLeft = (cdExpirationTime - timeNow) / 1000;
     return message.channel.send(`${message.author} Please wait ${timeLeft.toFixed(0)}s before typing the command again!`);
   }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
      status: 'online',
      activity: {
          name: "My process.env.prefix is " + '" ?"',
          type: "WATCHING"
      }
  });
})
client.login(process.env.TOKEN);
