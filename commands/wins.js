const Discord = require('discord.js');
const getData = require('../getData.js');
const handleDb = require('../handleDb.js');

module.exports = {
    name: 'wins',
    description: 'How many times have the user eaten chicken dinner?!',
    args: true,
    execute(message, args) {
        var playerId = args[0].toLowerCase();
        (async () => {
            var data = await getData.getShortData(playerId);
            var upsert = await handleDb.mongoUpsertPlayer(playerId, data.br);
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Number of wins')
                .setThumbnail('https://img.icons8.com/fluent/48/000000/crown.png')
                .addFields(
                    { name: `${playerId}`, value: ` has won **${data.br.wins}** times!` },
                    { name: 'Top five placements', value: `${data.br.topFive}`, inline: true },
                    { name: 'Top ten placements', value: `${data.br.topTen}`, inline: true },
                    { name: 'Top 25 placements', value: `${data.br.topTwentyFive}`, inline: true },
                    { name: 'Games played', value: `||${data.br.gamesPlayed}||` },
                )
                .setTimestamp()
                .setFooter('Icon by Icons8', 'https://icons8.com');
            return message.channel.send(embed)
        })()
    },
};