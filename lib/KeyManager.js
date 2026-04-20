const { default: Configstore } = require('configstore')
const pkg = require('../package.json')

class KeyManager{
    constructor(){
        this.conf = new Configstore(pkg.name)
    }

    setKey(key){
        this.conf.set('apikey',key)
        return key
    }

    getKey(){
        const key =  this.conf.get('apikey')
        if(!key){
            throw new Error('No Api Key Found - Get Api key at https://coinmarketcap.com/')
        }
        
        return key;
    }

    deleteKey(){
        const key =  this.conf.get('apikey')
        if(!key){
            throw new Error('No Api Key Found - Get Api key at https://coinmarketcap.com/')
        }
        this.conf.delete('apikey')
        return key;
    }
}

module.exports = KeyManager