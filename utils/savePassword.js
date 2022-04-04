import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + ","  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

import chalk from '../node_modules/chalk/source/index.js'
const savePassword = (password,message) => {
    fs.open(path.join('C:\\D\\VS Code\\Passgen\\','\\passwords.csv'),'a',666,(e,id)=> {
        fs.write(id,datetime+','+message+','+password+os.EOL,null,'utf-8',()=>{
            fs.close(id,()=>{
                console.log(chalk.green('Password saved in passwords.csv'));
                console.log(chalk.bgHex('#005e08')(datetime))
            })
        })
    })
}


export default savePassword