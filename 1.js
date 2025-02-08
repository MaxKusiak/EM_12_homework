const prompt = require('prompt-sync')();

function isStringEmpty(string){
    return string.length == 0;
}

function inputString(message){
    return prompt(message).trim();
}

let firstName = inputString("Введіть ім'я: ");
let lastName = inputString("Введіть прізвище: ");
let user = {};

if(isStringEmpty(firstName) || isStringEmpty(lastName)){
    console.log("Ви не ввели ім'я або прізвище.");
}else{
    user.fullName = firstName + " " + lastName;
    console.log(user.fullName);
}