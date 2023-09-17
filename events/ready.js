const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);

let tokenn = process.env.TOKEN
let aktv = process.env.ACTIVITY
let st = process.env.STATUS

const client = new Client({
    intents: INTENTS,
    allowedMentions: {
        parse: ["users"]
    },
    partials: PARTIALS,
    retryLimit: 3
});

module.exports = async (client) => {

  const rest = new REST({ version: "10" }).setToken(tokenn);
  try {
    await rest.put(Routes.applicationCommands(client.user.id), {
      body: client.commands,
    });
  } catch (error) {
    console.error(error);
  }

    console.log(`${client.user.tag} Aktif!`);
    client.user.setActivity(aktv)
    client.user.setStatus(st)
};
