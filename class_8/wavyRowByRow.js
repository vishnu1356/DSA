

function wavyRowByRow(arr) {
    let str = "";
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 == 0) {
            
            for(let j = 0; j < arr[i].length; j++){
                str += arr[i][j] + " ";
            }
        }
        else {
            for(let j = arr[i].length-1; j >= 0; j--) {
                str += arr[i][j] + " ";
            }
        }
    }
    console.log(str)
}

let arr = [[1, 2, 3], [4, 5, 6,], [7, 8, 9,], [10, 11, 12]];
wavyRowByRow(arr);