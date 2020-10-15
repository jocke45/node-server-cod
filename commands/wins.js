const getData = require('../getData.js');
module.exports = {
    name: 'wins',
    description: 'How many times have the user eaten chicken dinner?!',
    args: true,
    execute(message, args) {
        var wins = getData.getWins(args[0])
        return message.channel.send(`${args[0]} won ${wins} times!`);
    },
};