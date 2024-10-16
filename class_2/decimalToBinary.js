
function decimalToBinary (num) {
    let result = ""
    while(num > 0) {
        if(num % 2 == 0) {
            result = "0" + result;
        }
        else {
            result = "1" + result;
        } 
        num = Math.floor(num / 2);
    }
    return result;
}

let num = 6;
let result = decimalToBinary(num)
console.log("converted binary number is:-", result)