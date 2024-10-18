// console.log("reverse the array")

function swap (arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function reverserArray (arr) {
    let i = 0, j = arr.length-1;
    while(i <= j) {
        swap(arr, i, j)
        i++;
        j--;
    }
    return arr;
}

let inputArray = [1, 2, 3, 4, 5];
console.log("Original array: ", inputArray)
let result = reverserArray(inputArray)
console.log("result: ", result)