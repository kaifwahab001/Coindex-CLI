const CryptoApi = require("../lib/CryptoApi");
const KeyManager = require("../lib/KeyManager");
require("colors")

const check = {

    async price(cmd) {
        try {
            const keyManager = new KeyManager()
            const key = keyManager.getKey()

            const api = new CryptoApi(key)

            const data = await api.getPriceData(cmd.coin, cmd.cur)

            console.log(data);
        } catch (error) {
            handleApiError(error)            
        }
    }
}

function handleApiError(error) {
    if (error.response?.status === 401){
        console.log('Your Api Key Is Invalid'.red);
        return
    }

    if (error.response?.status === 429) {
        console.log('API rate limit exceeded. Please try again later.'.yellow)
        return
    }

    if (error.response?.status) {
        console.log(`API request failed with status ${error.response.status}`.red)
        return
    }

    console.log(`Request failed: ${error.message}`.red)
}


module.exports = check