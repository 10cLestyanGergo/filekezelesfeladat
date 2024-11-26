import { Console } from 'console'
import fs, { read } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import input from "./input.js"


const ___dirname=path.dirname(fileURLToPath(import.meta.url))
const filePath=path.join(___dirname,'useradatot.json')
let users=[]
function Fileolvas(){
    let content = "";

        try {
            content=fs.readFileSync(filePath, 'utf-8')
            users =JSON.parse(content);
        }catch(err){
        console.log(err)
        }
    console.log(users)
}
async function DataAdd(){
    for(let i=0;i<3;i++){
        let  id=await input("id:")
        id=Number(id);
        if (isNaN(id)) {
            console.log("Hibás id! Kérlek, számot adj meg.");
            i--;  // Ne számolja el a próbálkozást, ha nem érvényes számot adtak meg
            continue;
        }
        const name=await input("név:")
        users.push({id,name});
    }
    console.log(users)
    try{
        fs.writeFileSync(filePath,JSON.stringify(users))}
        catch(err){
            console.log(err);
        };
}
Fileolvas();
DataAdd();  // Várj a DataAdd befejezésére
