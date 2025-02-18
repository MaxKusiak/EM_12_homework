const prompt = require('prompt-sync')();

function validatePassword(password){
    if(password.length < 8){
        errors += "Пароль не може бути менше ніж 8 символів.\n";
        return false;
    }else if(!/[0-9]+/g.test(password) || !/([a-z]|[A-Z])+/g.test(password)){
        errors += "Пароль має містити хоча б одну літеру та одну цифру.\n";
        return false; 
    }else{
        return true;
    }
}

function validateNameAndSurname(string, errorMessage){
    if(/[0-9]+/g.test(string)){
        errors += `${errorMessage} не може містити цифри.\n`;
        return false;
    }else if(string.length < 3){
        errors += `${errorMessage} не може бути менше ніж 3 символи.\n`;
        return false;
    }else{
        return true;
    }
}

function validateEmail(email){
    if(!/^[a-zA-Z0-9!#$&'*+-/=?^_`{|}~]{1,64}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/g.test(email)){
        errors += "Email не відповідає вимогам.\n";
        return false;
    }else{
        return true;
    }
}

function validateAge(age){
    if(isNaN(age)){
        errors += "Вік повинен бути числом.\n";
        return false;
    }else if(!(date.getFullYear() - age > 17 && date.getFullYear() - age < 100)){
        errors += "Вік має бути не менше 18.\n";
        return false;
    }else{
        return true;
    }
}

function inputNumber(message){
    return Number(prompt(message));
}
function inputString(message){
    return prompt(message).trim();
}

let errors = "";
let firstName = inputString("Введіть ім'я (мінімум 3 символи і не може містити цифри): ");
let secondName = inputString("Введіть прізвище (мінімум 3 символи і не може містити цифри): ");
let email = inputString("Введіть email (приклад: programuser@gamil.com): ");
let password = inputString("Введіть пароль (довжина мінімум 8 символів, має містити хочаб одну літеру та одну цифру): ");
let verifyPassword = inputString("Підтвердіть пароль: ");
let age = inputNumber("Введіть свій рік народження: ");

const date = new Date();

validateNameAndSurname(firstName, "Ім'я");
validateNameAndSurname(secondName, "Прізвище");
validateEmail(email);
if(validatePassword(password)){
    if(password != verifyPassword){
        errors += "Пароль не підтверджено.\n";
    }
}
validateAge(age);

if(errors.length == 0){
    let User = {
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password,
        age: date.getFullYear() - age
    };
    console.log(User);
}else{
    console.log(errors);
}
