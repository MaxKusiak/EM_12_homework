const prompt = require('prompt-sync')();
let email = prompt("Введіть email (має бути не менше 8 символів, та мати '@' і '.'): ");
let password = prompt("Введіть пароль (довжина має бути більше 8 та менше 16 символів, також всі символи не можуть бути однаковими): ");
let age = prompt("Введіть свій рік народження: ");
const date = new Date();
let error = false;
if(email.length < 8){
    console.log("Email повинен бути не меншим восьми символів.");
    error = true;
}
if(!email.includes("@") || !email.includes(".")){
    console.log("Email повинен містити '@' і '.'.");
    error = true;
}
if(!(password.length > 8 && password.length < 16)){
    console.log("Пароль повинен бути довжиною більше 8 та менше 16 символів.");
    error = true;
}
if(password.length != 0){
    let re = new RegExp(String.raw`${password[0]}`, "g");
    if(password.match(re).length == password.length){
        console.log("Пароль не повинен складатися з однакових символів.");
        error = true;
    }
}
if(!(date.getFullYear() - age > 17 && date.getFullYear() - age < 100)){
    console.log("Вік має бути більше 17 та менше 100 років.");
}
if(!error){
    console.log("Ви успішно зареєестровані!");
}
