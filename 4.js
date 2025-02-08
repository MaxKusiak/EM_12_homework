const prompt = require('prompt-sync')();

function validateLength(string, errorMessage, min, max = Infinity){
    if(string.length < min || string.length > max){
        console.log(errorMessage);
        return false;
    }else{
        return true;
    }
}

function isCharacterInString(string, character){
    if(!string.includes(character)){
        console.log(`Email повинен містити \"${character}\".`);
        return false;
    }else{
        return true;
    }
}

function isStringOneCharacter(string){
    if(new RegExp(String.raw`^(.)\1*$`, "g").test(string)){
        console.log("Пароль не повинен складатися з однакових символів.");
        return false;
    }else{
        return true;
    }
}

function validateAge(age){
    if(!(date.getFullYear() - age > 17 && date.getFullYear() - age < 100)){
        console.log("Вік має бути більше 17 та менше 100 років.");
        return false;
    }else{
        return true;
    }
}

function inputInt(message){
    return parseInt(prompt(message));
}
function inputString(message){
    return prompt(message).trim();
}

let email = inputString("Введіть email (має бути не менше 8 символів, та мати '@' і '.'): ");
let password = inputString("Введіть пароль (довжина має бути більше 8 та менше 16 символів, також всі символи не можуть бути однаковими): ");
let age = inputInt("Введіть свій рік народження: ");

const date = new Date();

if(validateLength(email, "Email повинен бути не меншим восьми символів.", 8) && 
   isCharacterInString(email, "@") && 
   isCharacterInString(email, ".") && 
   validateLength(password, "Пароль повинен бути довжиною більше 8 та менше 16 символів.", 9, 15) && 
   isStringOneCharacter(password) && 
   validateAge(age)){
    console.log("Ви успішно зареєстровані!");
}