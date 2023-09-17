const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"unban",
    description: 'Kullanıcının Yasağını Kaldırırsın!',
    type:1,
    options: [
        {
            name:"id",
            description:"Kullanıcı ID Girin!",
            type:3,
            required:true
        },
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({content: "<:carpi:1149699793287925810> yeleri Yasakla Yetkin Yok!", ephemeral: true})
    const user = interaction.options.getString('id')
    
    interaction.guild.members.unban(user)
    interaction.reply({content: "<a:onay:1125386573576425522> Başarıyla Üyenin Yasağını Kaldırıldı"})
}

};
