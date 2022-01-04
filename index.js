#!/usr/bin/env node
import chalk from './node_modules/chalk/source/index.js'
import commander from './node_modules/commander/index.js'
import createPassword from './utils/createPassword.js'
import savePassword from './utils/savePassword.js'
import clipboardy from './node_modules/clipboardy/index.js'
const log = console.log
commander.version('1.0.0').description('Simple Password Generator')
commander
    .option('-l, --length <number>',
    'length of password'
    ,'8')
    .option('--msg <string>',
    'save password with its details',
    '20')
    .option('-s, --save',
    'save password to password.csv')
    .option('-nn, --no-number',
    'remove numbers')
    .option('-ns, --no-symbols',
    'remove symbols')
    .parse()
const {length,msg,save,numbers,symbols} = commander.opts()
// get generated password
const generatedPassword = createPassword(length,numbers,symbols)

// save to file
if(save)
    savePassword(generatedPassword,msg)
// copy to clipboard
clipboardy.writeSync(generatedPassword)

// output password generated
log(chalk.blue('Generated Password: ')+ (generatedPassword))
log(chalk.yellow('Password Copied to Clipboard'))
