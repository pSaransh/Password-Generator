// import fs from fs
// import path from path
// import os from os
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import chalk from '../node_modules/chalk/source/index.js'
const savePassword = (password) => {
    fs.open(path.join('C:\\D\\VS Code\\Passgen\\','\\passwords.csv'),'a',666,(e,id)=> {
        fs.write(id,password+os.EOL,null,'utf-8',()=>{
            fs.close(id,()=>{
                console.log(chalk.green('Password saved in passwords.csv'));
            })
        })
    })
}


export default savePassword