const Discord = require('discord.js');
const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const token = 'NzMyOTA0OTE3MTY5MDc4MzEy.Xw7Y_A.JxBl3VdcnZktqUUqWvcoQku1mPw';


bot.on('ready', () => {
    console.log(' Bot is online!')
})

bot.on('message', msg=>{
      if(msg.content === "delete this"){
         msg.channel.bulkDelete(1);
         }
 })
 
 
 bot.login(token);


