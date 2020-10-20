const API = require('call-of-duty-api')({ platform: "battle" });
const login = require('./login');


async function getShortData(playerId) {
    try {
        var loginStatus = await login.login();
        console.log(loginStatus);
        console.log('Looking up short data for ' + playerId);
        return API.MWBattleData(playerId);
    } catch (Error) {
        console.log('Error: ' + Error);
    }
}

async function getLongData(playerId) {
    try {
        var loginStatus = await login.login();
        console.log(loginStatus);
        console.log('Looking up long data for ' + playerId);
        return API.MWwz(playerId);
    } catch (Error) {
        console.log('Error: ' + Error);
    }
}

module.exports = { getShortData, getLongData };

/*getLongData('sägpennis#2309').then(playerData => {
    console.log(playerData.br);
}).catch((err) => console.log('Err: ' + err))*/

