const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "sa-as",
  description: "Selam Sistemini Açıp Kapatırsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:carpi:1149699793287925810> Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const embed = new EmbedBuilder()
    .setColor("Red")
    .setDescription("<a:onay:1125386573576425522> **Sistem Kapatıldı** \n Artık Bot Selamı Almayacak.")
    const embed2 = new EmbedBuilder()
    .setColor("Red")
   .setDescription("<a:onay:1125386573576425522> **Sistem Açıldı** \n Artık Bot Selamı Alıcak.")
 
 let slm = db.fetch(`saas_${interaction.guild.id}`);
 
 if (slm)  {
 
     db.delete(`saas_${interaction.guild.id}`);
     interaction.reply({embeds: [embed], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 if (!slm)  {
 
     db.set(`saas_${interaction.guild.id}`, true);
    interaction.reply({embeds: [embed2], allowedMentions: { repliedUser: false }})
 
     return
 }
 
 

  }

};
