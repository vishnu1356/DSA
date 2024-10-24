// 2d Array

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr)



//  Second way to create 2d array

let arr = Array(6);
for(let i = 0; i < arr.length; i++){
    let inner = Array(3).fill("vishnu")
    arr[i] = inner;
}
console.log(arr)