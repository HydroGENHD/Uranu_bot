const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Botun pingini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;


    interaction.reply({ embeds: [ new EmbedBuilder().setDescription(`<a:okhareketli:1142546732710899833> Botun Şuanki Anlık Ping Değeri  ***${client.ws.ping}ms*** Olarak Bulundu`).setColor("Random") ], ephemeral: true })

  }

};
