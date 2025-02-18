const prompt = require('prompt-sync')();

function validateCardNumber(number){
    return /^[45][0-9]{15}$/g;
}

function inputString(message){
    return prompt(message).trim();
}

let number = inputString("Введіть номер банківської карти: ");

if(validateCardNumber(number)){
    console.log("Номер карти коректний.");
}else{
    console.log("Номер карти не правильний.");
}
