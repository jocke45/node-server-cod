module.exports = {
    name: 'commands',
    description: 'List all available commands',
    args: false,
    execute(message, args) {
        message.channel.send('Available commands:');
    },
};