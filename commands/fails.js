const API = require('call-of-duty-api')({ platform: "battle" });
const Discord = require('discord.js');
const { cod_bot_activision_password, cod_bot_activision_email } = require('../config.json');

module.exports = {
    name: 'fails',
    description: 'Possibly embarrassing stats',
    args: true,
    execute(message, args) {
        var playerId = args[0];
        API.login(cod_bot_activision_email, cod_bot_activision_password).then((Data) => {
            API.MWwz(playerId).then(data => {
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
            }).catch(err => {
                console.log("Data error " + err);
            });
        }).catch((err) => {
            console.log("Error: " + err);
        });
    },
};