const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
  let no = "<a:carpii:1142783868089417819> Veri Çekilemedi!"
module.exports = {
  name: "istatistik",
  description: "Botun istatistiğini görürsün!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
    .addFields({ name: '<:tac:1129085730120024084> Bot Sahibi', value: `<@1003021347984777367>`, inline: false}) //DİSCORD ID GİR 
    .addFields({ name: '<a:okhareketli:1142546732710899833>  Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
    .addFields({ name: '<a:okhareketli:1142546732710899833> Çalışma Süresi', value: `${Uptime}`, inline: true})
    .addFields({ name: '<a:okhareketli:1142546732710899833> Kullanıcılar', value: `${client.users.cache.size}`, inline: false})
    .addFields({ name: '<a:okhareketli:1142546732710899833> Sunucular', value: `${client.guilds.cache.size}`, inline: false})
    .addFields({ name: '<a:okhareketli:1142546732710899833> Kanallar', value: `${client.channels.cache.size}`, inline: false})
    .addFields({ name: '<a:okhareketli:1142546732710899833> İşletim Sistemi', value: `${no}`, inline: false})
    .addFields({ name: ':gear: İşlemci', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: false})
    .addFields({ name: ':gear: Discord.JS sürüm', value: `14.13.0`, inline: true})
    .addFields({ name: ':tools: Node.JS sürüm', value: `v16.14.2`, inline: true})
    .addFields({ name: '<a:okhareketli:1142546732710899833> Bot Kuruluş', value: `${no}`, inline: true})
    .addFields({ name: '<:belgee:1129089777589833788> Komut Sayısı', value: `Şuanlık 30 Komut`, inline: true})
    .addFields({ name: ':ping_pong: Ping', value: `${client.ws.ping}`, inline: true})
    interaction.reply({embeds: [embed]})

  }

};
