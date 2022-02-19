const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })

client.login(process.env.token)

client.on ("ready", () =>  {
    console.log ("Il bot è online!")
})

client.on("messageCreate", (message) => {
    if(message.content == "es!esempio") {
    message.author.send({ content: "scemo chi legge" })
}
    if(message.content == "!ciao") {
        message.channel.send("Miao, ehm ciaoo!")
    }
    if(message.content == "!chefai") {
        message.channel.send("Miagolo!")
    }
    if(message.content == "!ping") {
        message.channel.send("Pong")
    }
    if (message.content.startsWith("!kick")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.kick()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} kickato`)
                    .setDescription(`Utente kickato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }                
})
client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("Benvenuto")
        .setDescription(`Benvenuto ${member.toString()}, benvenuto nel ${member.guild.name}. Sei il **${member.guild.memberCount}° Membro. Mi raccomando leggi le regole, rispetta gli altri cittadini e DIVERTITI!! (❁´◡❁)Buona Permanenza!(❁´◡❁)**`)

    client.channels.cache.get("934800394180247552").send({embeds: [embed]}); 
})