const getData = require('./getData.js');
const { cod_bot_mongo_db_password } = require('./config.json');
const mongoose = require('mongoose');

var mongo_uri = `mongodb+srv://COD-BOT:${cod_bot_mongo_db_password}@cluster0.r3yxj.mongodb.net/mydb?retryWrites=true&w=majority`;

mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })

var schema = mongoose.Schema({
    _id: String,
    kdRatio: Number,
    kills: { type: Number, min: [0, "Can't be less than 0"] },
    wins: { type: Number, min: [0, "Can't be less than 0"] }
});
var Model = mongoose.model('Model', schema, 'players');

async function mongoAddPlayer(playerId, player_data) {
    var db = mongoose.connection;

    db.once("open", function () {
        console.log("Connection Successful!");
    });

    db.on('error', console.error.bind(console, 'MongoDb fucked up:'));

    var player = new Model({
        _id: `${playerId}`,
        kdRatio: player_data.kdRatio,
        kills: player_data.kills,
        wins: player_data.wins
    })

    return player.save();
}

async function mongoFindPlayer(playerId) {

}

async function mongoUpdatePlayer(playerId, json_data) {

}

module.exports = { mongoAddPlayer, mongoFindPlayer, mongoUpdatePlayer };
