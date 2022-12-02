

module.exports = async (client) => {
    console.log(`${client.user.tag} đã sẵn sàng`)

    await client.application.commands.set(client.command.map((x) => x));
    
}