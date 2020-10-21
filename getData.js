const API = require('call-of-duty-api')({ platform: "battle" });
const login = require('./login');

/**
 * Tries to fetch the short version data from the API for the specified player ID
 * @param playerId the account id of the player to fetch API data for
 * @return a promise with the fetch player data status
 */
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

/**
 * Tries to fetch the long version data from the API for the specified player ID
 * @param playerId the account id of the player to fetch API data for
 * @return a promise with the fetch player data status
 */
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
