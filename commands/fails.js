const Discord = require('discord.js');
const getData = require('../getData.js');

module.exports = {
    name: 'fails',
    description: 'Possibly embarrassing stats',
    args: true,
    execute(message, args) {
        var playerId = args[0];
        (async () => {
            var data = await getData.getLongData(playerId);
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Fails')
                .setThumbnail('https://img.icons8.com/dusk/64/000000/lol.png')
                .addFields(
                    { name: `${playerId}`, value: ` has suicided **${data.lifetime.all.properties.suicides}** times...` },
                )
                .setTimestamp()
                .setFooter('Icon by Icons8', 'https://icons8.com');
            return message.channel.send(embed)
        })()
    },
};