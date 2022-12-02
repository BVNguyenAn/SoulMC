const { ping,latency,players } = require("mcstatus.js");
const {Embed} = require("discord.js")
const {ActivityType} = require("discord.js");

module.exports = {
    name: "status",
    description: "Xem Trạng Thái Server",
    run: async (client, interaction) => {
      client.user.setPresence({
        status: "online",
        activities: [
            {
        name: "The server is online",
        type: ActivityType.Playing,    
        },
    ],
    });
        ping("soulsurvival.me", 25565, true, (response) => { 
          const exampleEmbed = new Embed({
            "type": "rich",
            "title": `SoulMC is online !`,
            "description": `Made by nguynan with <3`,
            "color": 0x1eff00,
            "fields": [
              {
                "name": `Player:` + response.players.online + '/' + response.players.max,
                "value": "\u200B"
              }
            ],
            "thumbnail": {
              "url": `https://media.discordapp.net/attachments/1014729522718973953/1046809885746151495/standard.gif`,
              "height": 0,
              "width": 0
            },
            "footer": {
              "text": `From SoulMC with <3`,
              "icon_url": `https://media.discordapp.net/attachments/1014729522718973953/1046809885746151495/standard.gif`
            }
            });
            interaction.reply({
            embeds: [exampleEmbed]
          });
        });
    }
}