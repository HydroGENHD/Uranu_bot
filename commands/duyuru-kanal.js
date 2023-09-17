const Discord = require('discord.js');
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const louritydb = require("croxydb");

module.exports = {
    name: "duyuru-kanal",
    description: "Duyuru gönderilecek kanalı ayarlarsın.",
    type: 1,
    options: [
        {
            name: "kanal",
            description: "Kanal seçin.",
            type: 7,
            required: true,
            channel_types: [0]
        },
    ],
    run: async (client, interaction) => {

        const yetki_embed = new EmbedBuilder()
            .setColor("Red")
            .setDescription("<a:carpii:1142783868089417819> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.")

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetki_embed], ephemeral: true })

        const channel = interaction.options.getChannel('kanal')

        const ayar_embed = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`<a:onay:1125386573576425522> Duyuru kanalı başarıyla ayarlandı!`)

        louritydb.set(`duyuru_channel_${interaction.guild.id}`, channel.id)
        return interaction.reply({ embeds: [ayar_embed] })
    }
};
