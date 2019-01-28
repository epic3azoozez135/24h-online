const Discord = require("discord.js")
const client = new Discord.Client();
var prefix = "A"



const gamestats = [`I`,`Love`,`You!`,``]
var index = 0
var timer = 3 // الوقت بالثواني لتغير الستريمنق
client.on("ready", ()=> {
        setInterval(function(){
        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/ACMBOT') 
        index++
            if( index >= gamestats.length) index = 0 ;
        }, timer*1000);

client.login(process.env.BOT_TOKEN);
