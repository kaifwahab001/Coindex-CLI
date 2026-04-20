const axios = require("axios")
require("colors")

class CryptoApi {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    }

    async getPriceData(coinOption, curOption) {
        try {
            const currencyCode = String(curOption || 'USD').toUpperCase()
            const res = await axios.get(`${this.baseUrl}?limit=5&convert=${currencyCode}`, {
                headers: {
                    'X-CMC_PRO_API_KEY': this.apiKey
                }
            })
            let output = ''
            res.data.data.forEach(coin => {
                const rawPrice = coin.quote[currencyCode]?.price
                const formattedPrice = this.formatPrice(rawPrice, currencyCode)
                output += `Coin: ${coin.symbol.yellow} | ${coin.name} | ${formattedPrice.green} | Rank: ${String(coin.cmc_rank).blue}\n`
            });

            return output.trim()
        } catch (error) {
            throw error
        }
    }

    formatPrice(price, currencyCode) {
        if (typeof price !== 'number') {
            return 'N/A'
        }

        try {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currencyCode,
                maximumFractionDigits: 6
            }).format(price)
        } catch (error) {
            return `${currencyCode} ${price.toFixed(6)}`
        }
    }
}


module.exports = CryptoApi