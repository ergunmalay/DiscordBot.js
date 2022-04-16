const Discord = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const TOKEN = (process.env.DISCORD_BOT_TOKEN);

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello world")
    }
})

client.login(TOKEN);