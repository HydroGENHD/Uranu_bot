const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-rol",
    description: 'Yeni Gelenlere Otomatik Rol Verir!',
    type:1,
    options: [
        {
            name:"rol",
            description:"Lütfen bir rol etiketle!",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<a:carpii:1142783868089417819> Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    db.set(`otorol_${interaction.guild.id}`, rol.id)
    interaction.reply({content: "<a:onay:1125386573576425522> Otorol Başarıyla <@&"+rol+"> Olarak Ayarlandı."})
}

};
