// 1
const prompt = require('prompt-sync')();
let login = prompt("Введіть логін: ");
let password = prompt("Введіть пароль: ");
if(login == "admin" && password == "12345"){
    console.log("Вхід успішний.");
}else{
    console.log("Доступ заборонено.");
}

console.log("\n=================================\n")

// 2
let age = prompt("Введіть свій рік народження: ");
const date = new Date();
if(date.getFullYear() - age < 18){
    console.log("Доступ обмежений.");
}else{
    console.log("Доступ не обмежено.");
}

console.log("\n=================================\n")

// 3
let price = prompt("Введіть вартість товару: ");
let tax = prompt("Введіть податок у відсотках: ");
console.log(price + price * (tax / 100));