const prompt = require('prompt-sync')();

function validateString(string, errorMessage){
    if(string.length == 0 || string.length <= 5){
        console.log("Поле " + errorMessage + " повино бути довжиною більше ніж 5 символів.");
        return false;
    }else{
        return true;
    }
}

function validateNumber(number, errorMessage){
    if(number <= 0){
        console.log("Поле " + errorMessage + " повино бути більше нуля.");
        return false;
    }else{
        return true;
    }
}

function inputFloat(message){
    return parseFloat(prompt(message));
}
function inputInt(message){
    return parseInt(prompt(message));
}
function inputString(message){
    return prompt(message).trim();
}

let productName = inputString("Введіть назву товару: ");
let productDescription = inputString("Введіть опис товару: ");
let productCount = inputInt("Введіть кількість товару: ");
let productPrice = inputFloat("Введіть ціну товару: ");
let product = {};

if(validateString(productName, "\"Назва товару\"") && 
   validateString(productDescription, "\"Опис товару\"") && 
   validateNumber(productCount, "\"Кількість товару\"") && 
   validateNumber(productPrice, "\"Ціна товару\"")){
    product.name = productName;
    product.description = productDescription;
    product.count = productCount;
    product.price = productPrice;
    console.log(`\nНазва товару: ${product.name}\nОпис товару: ${product.description}\nКількість товару: ${product.count}\nЦіна товару: ${product.price}`);
}