# Discord bot for CoD Warzone using node.js

This is a [Discord](https://discord.com/) bot written in Node.js.
It serves the channel data on a Battle[]().net users [Call of Duty Warzone](https://www.callofduty.com/warzone) career with simple commands.
The bot also saves the data of the users that has run the command in MongoDB to update a leader board.
The leader board is accessible through the `!leaderboard` command.
Replies from the bot comes as an "embed", a richer type of message: <img  src="https://i.ibb.co/FD3G741/wins.png"  alt="wins"  border="0">

Big thank you to the project over at the [node Call of Duty API wrapper](https://github.com/lierrmm/Node-CallOfDuty) for providing an easy to use API wrapper.

## Installation
### prerequisites
To use this bot you need:
* an [Activision account](https://profile.callofduty.com/cod/signup)
* [Node.js installed.](https://nodejs.dev/learn/how-to-install-nodejs)
* a [Discord developer account with a bot user created](https://discordpy.readthedocs.io/en/latest/discord.html)
* * to add the bot account to your server (also covered in the link above).
* a MongoDB account, [it's free!](https://www.mongodb.com/what-is-mongodb)

#### Yes, I have all of that already. How do I install?
1. Clone this repository to a folder.
2. Enter the values of your Activision, Discord bot and MongoDB accounts in the file called "config_EXAMPLE.json".
3. Open the folder with your favorite command line tool and run the command `npm install`
4. After that is done run the command `node server.js`
5. The server will reply with a "Ready!" when it is ready.

To test that everything is working I suggest that you type in `!wins <player_id>`.
This command both loads data from the CoD API and pushes data to the database. If you get no error there you should be good to go!
## Usage
The commands available and their respective usage is best seen by using the `!help` command.
This lists all commands and how they are used together with a short but silly description.

<img  src="https://i.ibb.co/nBjBMxD/help.png"  alt="help"  border="0">

## Screenshots
#### !wins
<img  src="https://i.ibb.co/FD3G741/wins.png"  alt="wins"  border="0">

#### !kills
<img  src="https://i.ibb.co/rxXKHzz/kills.png"  alt="kills"  border="0">

#### !leaderboard
<img  src="https://i.ibb.co/mJpC9Rt/leaderboard.png"  alt="leaderboard"  border="0">

#### !fails
<img  src="https://i.ibb.co/Ctg2L99/fails.png"  alt="fails"  border="0">


