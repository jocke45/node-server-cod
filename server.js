const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const commands = require('./commands/commands');

// Create the Discord client
const client = new Discord.Client();

// Import the commands
client.commands = new Discord.Collection();

// Dynamically read all available js-files in the commands directory
// and "create" a command out of them
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Try to log in the bot user
client.once('ready', () => {
    console.log('Ready!');
    // Bot is now logged in!
});

client.on('message', message => {
    // If the user sending the message is a bot or if the message does not contain our prefix
    // disregard the message
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Trim and fix the incomming command so that we only get the usable part left
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // If there is no command matching, do nothing
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    // If the commands requires input more than the command and none is provided
    // let the user know
    if (command.args && !args.length) {
        return message.reply('Please specify a player ID')
    }
    // Try to execute the command
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Something went wrong when executing that command...');
    }

});

client.login(token);