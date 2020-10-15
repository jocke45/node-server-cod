const API = require('call-of-duty-api')({ platform: "battle" });
const Discord = require('discord.js');
const { cod_bot_activision_password, cod_bot_activision_email } = require('../config.json');

module.exports = {
    name: 'wins',
    description: 'How many times have the user eaten chicken dinner?!',
    args: true,
    execute(message, args) {
        var playerId = args[0];
        API.login(cod_bot_activision_email, cod_bot_activision_password).then((Data) => {
            API.MWBattleData(playerId).then(data => {
                const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Number of wins')
                    .setThumbnail('https://img.icons8.com/fluent/48/000000/crown.png')
                    .addFields(
                        { name: `${playerId}`, value: ` has won **${data.br.wins}** times!`},
                        { name: 'Top five placements', value: `${data.br.topFive}`, inline: true },
                        { name: 'Top ten placements', value: `${data.br.topTen}`, inline: true },
                        { name: 'Top 25 placements', value: `${data.br.topTwentyFive}`, inline: true },
                        { name: 'Games played', value: `||${data.br.gamesPlayed}||`},
                    )
                    .setTimestamp()
                    .setFooter('Icon by Icons8', 'https://icons8.com');
                return message.channel.send(embed)
            }).catch(err => {
                console.log("Data error " + err);
            });
        }).catch((err) => {
            console.log("Error: " + err);
        });
    },
};