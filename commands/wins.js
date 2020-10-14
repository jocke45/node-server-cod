module.exports = {
    name: 'wins',
    description: 'How many times have the user eaten chicken dinner?!',
    args: true,
    execute(message, args) {
        return message.channel.send(`${args[0]} never won :(`);
    },
};