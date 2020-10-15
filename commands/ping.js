const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: false,
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Ping')
            .setDescription('Pong')
            .setThumbnail('https://img.icons8.com/dusk/64/000000/ping-pong.png')
            .setTimestamp()
            .setFooter('Icon by Icons8', 'https://icons8.com');
        return message.channel.send(embed)
    },
};