const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"kayıtlı-rol",
    description: 'Kayıtlı rol ayarlarsın!',
    type:1,
    options: [
        {
            name:"rol",
            description:"Lütfen bir rol etiketleyin!",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<a:carpii:1142783868089417819> Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    db.set(`kayıtlı_${interaction.guild.id}`, rol.id)
    interaction.reply({content: "<a:onay:1125386573576425522> Kayıtlı Rolü Başarıyla <@&"+rol+"> Olarak Ayarlandı."})
}

};
