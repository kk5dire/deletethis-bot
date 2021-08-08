const Discord = require('discord.js');
const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const token = '';


bot.on('ready', () => {
    console.log(' Bot is online!')
})

bot.on('message', msg=>{
      if(msg.content === "delete this"){
         msg.channel.bulkDelete(1);
         }
 })
 
 
 bot.login(token);


