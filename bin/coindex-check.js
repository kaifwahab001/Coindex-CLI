const { program } = require("commander");
const check = require("../commands/check");
const { registerGlobalErrorHandlers } = require("../utils/errorHandler");

registerGlobalErrorHandlers()

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add Specific coin types in CSV format', 'BTC,ETH,XRP')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action(cmd => check.price(cmd))


program.parse(process.argv)