const Discord = require('discord.js');
const bot1 = new Discord.Client();

bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

bot1.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bcall')){
if(!message.author.id === '474573718967025665') return;
message.channel.sendMessage('#DONE')
bot1.users.forEach(m =>{
m.sendMessage(args)
})
}
});


bot1.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('<@254321678270726144> <@157605500488384512> <@244524477319217152> <@161693885121298432> <@222302020718034944>')
          .then(m => {
            count++;
          })

        }
      }
});

bot1.on('ready', () => {
	
	bot1.user.setGame('انا خرى هههههههههههه', 'https://twitch.tv/Kareeeeeem');
	
});

 var prefix = "+";
 
 bot1.on('message', message => {
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




bot1.login("NDY2MzE4Mzc1NTAxNDMwNzg1.Dr5iEA.WznhsfPzlZn3ULW4fSd3CmzP8pk");



