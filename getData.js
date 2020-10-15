const API = require('call-of-duty-api')({ platform: "battle" });
const { cod_bot_activision_password, cod_bot_activision_email } = require('./config.json');

const playerIds = { "Eric": "biffkriminel#2107", "Jocke": "sägPennis#2309" }

function getWins(playerId) {
    API.login(cod_bot_activision_email, cod_bot_activision_password).then((Data) => {
        API.MWBattleData('biffkriminel#2107').then(data => {
            console.log(data.br.wins);
            return data.br.wins;
        }).catch(err => {
            console.log("Data error " + err);
        });
    }).catch((err) => {
        console.log("Error: " + err);
    });
}

console.log(getWins(playerIds.Eric));