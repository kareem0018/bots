const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");

const adminprefix = "^";
    client.on('message', message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(adminprefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(adminprefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(adminprefix + 'say')) {
            message.channel.send(x);
                message.delete(999)
        }
        
       
      });

client.on('ready', () => {

	

        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);	

	

});



client.login(process.env.BOT_TOKEN);




