const API = require('call-of-duty-api')({ platform: "battle" });
const { cod_bot_activision_password, cod_bot_activision_email } = require('./config.json');

/**
 * Tries to login to the Activision servers
 * @return a promise with the login status
 */
async function login() {
    try {
        return API.login(cod_bot_activision_email, cod_bot_activision_password);
    } catch (Error) {
        console.log('Error: ' + Error);
    }
}

module.exports = { login };