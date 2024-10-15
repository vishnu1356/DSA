// GCD/HCF

function greatestCommonDivisor (a, b) {
    let potentialAns = 1;
    for(let i = 2; i <= Math.min(a, b); i++){
        if(a % i === 0 && b % i === 0){
            potentialAns = i;
        }
    }
    return potentialAns;
} 

let result = greatestCommonDivisor(14, 28)
console.log(result);



// sum of all the digits 

function sumOfDigits (num) {
    let sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

let result2 = sumOfDigits(123456)
console.log(result2);



// fibbonacci number;

function fibbonacciNumber(num) {
    if(num == 0){
        console.log(0)
        return;
    }
    if(num >= 1) {
        console.log(0)
        console.log(1)
    }
    let secondLast = 0;
    let last = 1;
    for(let i = 2; i <= num; i++){
        let ans = secondLast + last;
        console.log(ans);
        secondLast = last;
        last = ans;
    }

}

fibbonacciNumber(4);