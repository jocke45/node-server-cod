const API = require('call-of-duty-api')({ platform: "battle" });
const { cod_bot_activision_password, cod_bot_activision_email } = require('./config.json');

async function login(playerId) {
    try {
        return API.login(cod_bot_activision_email, cod_bot_activision_password);
    } catch (Error) {
        console.log('Error: ' + Error);
    }
}

module.exports = { login };