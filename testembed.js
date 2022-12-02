const exampleEmbed = new MessageEmbed({
  "embeds": [
    {
      "type": "rich",
      "title": `SoulMC Status`,
      "description": `Made by nguynan with <3`,
      "color": 0x1eff00,
      "fields": [
        {
          "name": `'Player: ' + response.players.online + '/' + response.players.max`,
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
    }
  ]
});