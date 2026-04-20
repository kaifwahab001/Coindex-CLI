const { default: inquirer } = require('inquirer');
const KeyManager = require('../lib/KeyManager')
const color = require('colors');
const { isRequired } = require('../utils/validation');
const key = {
    async set(){
        const keyManager = new KeyManager()
        const input = await inquirer.prompt([
            {
                type : 'input',
                name : 'key',
                message : 'Enter Api Key '.green + 'https://coinmarketcap.com/',
                validate : isRequired
            }
        ])

        const key = keyManager.setKey(input.key) 
        if(key){
            console.log('Api Key Set'.blue)
        }
    },
    show(){
       try {
        const keyManager = new KeyManager()
        const key = keyManager.getKey()
        console.log('Current Api Key: '+key.yellow);
        
        return key
       } catch (error) {
        console.log(error.message.red)
       }
        
    },
    remove(){
        try {
            const keyManager = new KeyManager()
            keyManager.deleteKey()
            console.log('Api Key Removed'.blue)
            return
        } catch (error) {
            console.log(error.message.red)
        }
    },
}

module.exports = key