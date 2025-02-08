const prompt = require('prompt-sync')();

function isStringsEqual(programString, userString){
    return programString == userString;
}

function inputString(message){
    return prompt(message).trim();
}

let login = inputString("Введіть логін: ");
let password = inputString("Введіть пароль: ");

if(isStringsEqual("admin", login) && isStringsEqual("12345", password)){
    console.log("Вхід успішний.");
}else{
    console.log("Доступ заборонено.");
}