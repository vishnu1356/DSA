

function printColByCol(arr) {
    let str = "";
    for(let i = 0; i < arr[0].length; i++) {
        // if i is even
        for(let j = 0; j < arr.length; j++) {
            str += arr[j][i] + " ";
        }

        
    }
    console.log(str)
}
let arr = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];
printColByCol(arr)