const prompt = require('prompt-sync')();

function validateIp(ip){
    if(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g.test(ip)){
        let m = ip.split(".");
        for(let i = 0; i < m.length; i++){
            if(!(m[i] >= 0 && m[i] <= 255)){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

function inputString(message){
    return prompt(message).trim();
}

let ip = inputString("Введіть ip: ");

if(validateIp(ip)){
    console.log("Ip коректне.");
}else{
    console.log("Ip не правильне.");
}
