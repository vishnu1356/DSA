// Question no 1299 leetcode;

var replaceElements = function(arr) {
    let gtr = -1;
    for(let i = arr.length-1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = gtr;
        gtr = Math.max(gtr, temp)
    }
    return arr;
};