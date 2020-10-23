const Discord = require('discord.js');
const getData = require('../getData.js');
const handleDb = require('../handleDb.js');

module.exports = {
    name: 'fails',
    description: 'Possibly embarrassing stats',
    args: true,
    execute(message, args) {
        var playerId = args[0].toLowerCase();
        (async () => {
            try {
                var data = await getData.getLongData(playerId);
            }
            catch (error) {
                console.log(error);
                const errorCode = error.slice(0, 3)
                if (errorCode == '404') {
                    return message.reply("Player ID not found. Did you spell that correctly?");
                }
                return message.reply("Something went wrong. Error code: " + errorCode);
            }
            var upsert = await handleDb.mongoUpsertPlayerFails(playerId, data.lifetime.all.properties);
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