const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");

var prefix = "+";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`${prefix}say <words>`);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});

client.on('ready', () => {

	

        client.user.setGame('hi',`http://www.youtube.com/gg`);	

	

});



client.login('NDY2MzE4Mzc1NTAxNDMwNzg1.Dr5iEA.WznhsfPzlZn3ULW4fSd3CmzP8pk');

