const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'List all available commands',
    args: false,
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Available commands')
            .setThumbnail('https://img.icons8.com/plasticine/100/000000/question-mark.png')
            .addFields(
                { name: '!help', value: 'Show this help message' },
                { name: '!kills *player ID*', value: 'Display the number of kills for the player' },
                { name: '!wins *player ID*', value: 'Display how many times the player has won' },
                { name: '!ping', value: 'Pong' },
            )
            .setTimestamp()
            .setFooter('Icon by Icons8', 'https://icons8.com');
        return message.channel.send(embed)
    },
};