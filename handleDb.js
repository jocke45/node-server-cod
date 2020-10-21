const getData = require('./getData.js');
const { cod_bot_mongo_db_password } = require('./config.json');
const mongoose = require('mongoose');

var mongo_uri = `mongodb+srv://COD-BOT:${cod_bot_mongo_db_password}@cluster0.r3yxj.mongodb.net/mydb?retryWrites=true&w=majority`;

mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

var schema = mongoose.Schema({
    _id: String,
    deaths: Number,
    kdRatio: Number,
    kills: { type: Number, min: [0, "Can't be less than 0"] },
    wins: { type: Number, min: [0, "Can't be less than 0"] },
    suicides: { type: Number, min: [0, "Can't be less than 0"] }
});
var Player = mongoose.model('Player', schema, 'players');

/**
 * NOTE!
 * * This function is not used as mongoUpsertPlayer fills the same function and more
 * !NOTE
 * Adds a specified users to our mongoDB
 * @param playerId the account id of the player to add to the db
 * @param player_data the game data received for the playerId
 * @return a promise with the save status
 */
async function mongoAddPlayer(playerId, player_data) {
    var db = mongoose.connection;
    db.once("open", function () {
        console.log("Connection Successful!");
    });
    db.on('error', console.error.bind(console, 'MongoDb fucked up:'));
    var player = new Player({
        _id: `${playerId}`,
        deaths: player_data.deaths,
        kdRatio: player_data.kdRatio,
        kills: player_data.kills,
        wins: player_data.wins
    })
    return player.save();
}

/**
 * Finds a specified user in our mongoDB using their PK "_id"
 * @param playerId the account id (also our PK) of the player to find
 * @return a promise with the find status
 */
async function mongoFindPlayer(playerId) {
    return await Player.findById(playerId).exec();
}

/**
 * Adds a specified users data to our mongoDB if it does not exist
 * otherwise updates the users data
 * @param playerId the account id of the player to add to the db
 * @param player_data the game data received for the playerId
 * @return a promise with the create/update status
 */
async function mongoUpsertPlayer(playerId, player_data) {
    let filter = { _id: `${playerId}` };
    const update = {
        deaths: player_data.deaths,
        kdRatio: player_data.kdRatio,
        kills: player_data.kills,
        wins: player_data.wins
    }
    console.log(`Adding data for ${playerId} to database`);
    return await Player.findOneAndUpdate(filter, update, { new: true, upsert: true });
}

/**
 * Adds a specified users data to our mongoDB if it does not exist
 * otherwise updates the users data
 * @param playerId the account id of the player to add to the db
 * @param player_data the game data received for the playerId
 * @return a promise with the create/update status
 */
async function mongoUpsertPlayerFails(playerId, player_data) {
    let filter = { _id: `${playerId}` };
    const update = {
        suicides: player_data.suicides
    }
    console.log(`Adding data for ${playerId} to database`);
    return await Player.findOneAndUpdate(filter, update, { new: true, upsert: true });
}

module.exports = { mongoAddPlayer, mongoFindPlayer, mongoUpsertPlayer, mongoUpsertPlayerFails };
