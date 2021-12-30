// import fs from fs
// import path from path
// import os from os
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

var currentdate = new Date(); 
var datetime = "Password saved at : " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

import chalk from '../node_modules/chalk/source/index.js'
const savePassword = (password,message) => {
    fs.open(path.join('C:\\D\\VS Code\\Passgen\\','\\passwords.csv'),'a',666,(e,id)=> {
        fs.write(id,datetime+os.EOL+'Message: '+message+os.EOL+'Password: '+password+os.EOL,null,'utf-8',()=>{
            fs.close(id,()=>{
                console.log(chalk.green('Password saved in passwords.csv'));
                console.log(chalk.bgRed(datetime))
            })
        })
    })
}


export default savePassword