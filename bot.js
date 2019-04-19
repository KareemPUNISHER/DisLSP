const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
var adminprefix = '!'
const developers = ["314380735782060035"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`:white_check_mark: تم تغيير الحالة بنجاح `)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`:white_check_mark: تم تغيير الحالة بنجاح `)
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`:white_check_mark: تم تغيير الحالة بنجاح`)
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/abdalkrim_badr");
      message.channel.send(`:white_check_mark: تم تغيير الحالة بنجاح `)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`:white_check_mark: تم تغيير الحالة بنجاح `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`:white_check_mark: تم تغيير الحالة بنجاح `);
}
});
 
 
 
 
 
client.login(process.env.BOT_TOKEN);// áÇ ÊÛíÑ ÝíåÇ ÔíÁ
