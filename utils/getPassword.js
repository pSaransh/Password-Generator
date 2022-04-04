//get password
// import * as fs from 'fs'
// import * as path from 'path'
// import * as os from 'os'
import fetch from 'node-fetch'
import loadTable from "p5"
async function getPassword(message){
    const response = await fetch("C:\\D\\VS Code\\Passgen\\passwords.csv");
    const data = await response.text();
    console.log(data);
}
loadTable()
export default getPassword
// fs.open(path.join(''),'r',666,(e,id)=> {
//     fs.read(id,datetime+os.EOL+'Message: '+message+os.EOL+'Password: '+password+os.EOL+'------------------------------------------------------------------'+os.EOL,null,'utf-8',()=>{
//             fs.close(id,()=>{
//                 console.log(chalk.green('Password saved in passwords.csv'));
//                 console.log(chalk.bgHex('#005e08')(datetime))
//             })
//         })
//     })