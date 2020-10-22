const Discord = require('discord.js');
const getData = require('../getData.js');
const handleDb = require('../handleDb.js');

module.exports = {
    name: 'leaderboard',
    description: 'Who is the top dog at stuff?',
    execute(message, args) {
        (async () => {
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Leaderboard')
                .setThumbnail('https://img.icons8.com/fluent/48/000000/prize.png')
                .setTimestamp()
                .setFooter('Icon by Icons8', 'https://icons8.com');
            // Create the top 5 wins leaderboard
            var wins = await handleDb.mongoFindTopWins();
            let placement = 1;
            let winStr = '';
            Object.keys(wins).forEach(player => {
                winStr += `${placement}.  **${wins[player]._id}**      ${wins[player].wins}       \n`
                placement++;
            });
            embed.addField("Wins", `${winStr}\n`, true);
            // Create the top 5 kills leaderboard
            var kills = await handleDb.mongoFindTopKills();
            placement = 1;
            let killStr = '';
            Object.keys(kills).forEach(player => {
                killStr += `${placement}.  **${kills[player]._id}**      ${kills[player].kills}       \n`
                placement++;
            });
            embed.addField("Kills", `${killStr}`, true);
            return message.channel.send(embed)
        })()
    },
};