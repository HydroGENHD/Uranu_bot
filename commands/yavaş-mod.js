const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

let token = process.env.TOKEN

module.exports = {
  name: "yavaş-mod",
  description: "Kanalın Yavaş Modunu Ayarlarsın!",
  type: 1,
  options: [
    {
        name:"kanal",
        description:"Lütfen bir kanal etiketle!",
        type:7,
        required:true,
        channel_types:[0]
    },
    {
        name:"saniye",
        description:"Yavaş Modu Kaç Saniye Yapıcaksın?",
        type:3,
        required:true
    },
   
   
    
],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "<:carpi:1149699793287925810> Kanalları Yönet Yetkin Yok!", ephemeral: true})
    const kanal2 = interaction.options.getChannel('kanal')
    const s = interaction.options.getString('saniye') 
    if (s > 21600) return interaction.reply("<a:uyari2:1142546781733912606> Süre limiti maksimum **6** saat olabilir.")
    var request = require('request');
request({
url: `https://discordapp.com/api/v9/channels/${kanal2.id}`,
method: "PATCH",
json: {
rate_limit_per_user: s
},
headers: {
"Authorization": `Bot ${token}`
},
})
   interaction.reply(`<a:onay:1125386573576425522> Yazma süre limiti **${s}** saniye olarak ayarlanmıştır.`)


  }

};
