// [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0]



function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reArrange (arr) {
    let i = 0, j = arr.length -1;
    while(i <= j) {
        if(arr[i] == 0) {
            i++;
        }
        else if (arr[i] == 1) {
            swap(arr, i, j)
            j--;
        }
    }
    return arr;
}

let arr = [1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0];
let result = reArrange(arr);
console.log(result);



