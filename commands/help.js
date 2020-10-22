const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'List all available commands and how to use',
    args: false,
    execute(message, args) {
        const { commands } = message.client;
        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Available commands')
            .setThumbnail('https://img.icons8.com/plasticine/100/000000/question-mark.png')
            .setTimestamp()
            .setFooter('Icon by Icons8', 'https://icons8.com');
        // Loop over all commands and print their description
        commands.forEach(cmd => {
            let tempName = cmd.name;
            if (cmd.args) tempName += ' *player_id*';
            embed.addField(`!${tempName}`, `${cmd.description}`);
        });
        return message.channel.send(embed)
    },
};