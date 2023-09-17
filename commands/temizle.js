const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"sil",
    description: 'Sohbette istediğin kadar mesajı silersin!',
    type:1,
    options: [
        {
            name:"sayı",
            description:"Temizlencek Mesaj Sayısını Girin.",
            type:3,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({content: "<:carpi:1149699793287925810>Mesajları Yönet Yetkin Yok!", ephemeral: true})
    const sayi = interaction.options.getString('sayı')
    interaction.channel.bulkDelete(sayi)
    interaction.reply({content: "<a:onay:1125386573576425522> Başarıyla belirtilen adet mesaj silindi."})
}

};
