require("dotenv").config();
const { Client, GatewayIntentBits, Collection} = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.command = new Collection();

["events", "command"].forEach((file) => require(`./handles/${file}`)(client));

client.login('MTA0ODIyMzAzNTA5OTk5MjE1NA.GvX88d.jT6cUnR8Jpku-y5wzYXIRpV1h-RcUd1q7N7L9s');