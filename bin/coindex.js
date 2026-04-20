#!/usr/bin/env node 

const {Command} = require('commander')
const pkg = require('../package.json')

const program = new Command()

 
program
    .version(pkg.version)
    .command('key','Manage API Key --- https://nomics.com')
    .command('check','Check Coin Price Info')
    .parse(process.argv)

