const Discord = require('discord.js');
const getData = require('../getData.js');
const handleDb = require('../handleDb.js');

module.exports = {
    name: 'kills',
    description: 'How many times have the user killed an enemy in cold blood?',
    args: true,
    execute(message, args) {
        var playerId = args[0].toLowerCase();
        (async () => {
            var data = await getData.getShortData(playerId);
            var upsert = await handleDb.mongoUpsertPlayer(playerId, data.br);
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Number of kills')
                .setThumbnail('https://img.icons8.com/plasticine/100/000000/skull.png')
                .addFields(
                    { name: `${playerId}`, value: ` has **${data.br.kills}** confirmed kills!` },
                    { name: 'Downed enemies', value: `${data.br.downs}`, inline: true },
                    { name: 'K/D ratio', value: `${data.br.kdRatio.toFixed(2)}`, inline: true },
                    { name: 'Revives', value: `${data.br.revives}`, inline: true },
                    { name: 'Deaths', value: `||${data.br.deaths}||` },
                )
                .setTimestamp()
                .setFooter('Icon by Icons8', 'https://icons8.com');
            return message.channel.send(embed)

        })()
    },
}