module.exports = async (client, interaction) => {
    if (interaction.isChatInputCommand()) {
        const command = client.command.get(interaction.commandName);

        if (!interaction.guild) return interaction.reply({
            content: "Không hỗ trợ",
            ephemeral: true,
        });

        if(!command) return interaction.reply({
            content: "không tồn tại",
            ephemeral: true,
        });

        await command.run(client, interaction);
    }
}