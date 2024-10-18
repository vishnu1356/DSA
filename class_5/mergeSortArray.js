// console.log("merge sortede array")

function mergeSortedeArray(num1, m, num2, n){
    let i = 0, j = 0, k = 0;
    let result = [];
    while(i < m && j < n){
        if(num1[i] < num2[j]){
            result.push(num1[i]);
            i++;
        }
        else {
            result.push(num2[j]);
            j++;
        }
    }
    while(i < m) {
        result.push(num1[i]);
        i++;
    }
    while(j < n) {
        result.push(num2[j]);
        j++;
    }

}


let num1 = [4, 5, 19, 34, 40], num2 = [ 2, 3, 5, 10, 15, 21]
let m = 5, n = 6;

mergeSortedeArray(num1, m, num2, n);