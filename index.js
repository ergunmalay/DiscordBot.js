const Discord = require("discord.js");
const dotenv = require("dotenv");

const generateImage = require("./generateimage")

dotenv.config();

const TOKEN = (process.env.DISCORD_BOT_TOKEN);

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelID = "964952236822233178"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(TOKEN);