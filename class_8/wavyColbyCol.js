

function wavyColByCol(arr) {
    let str = "";
    for(let i = 0; i < arr[0].length; i++) {

        // for even
        if(i % 2 == 0) {
            for(let j = 0; j < arr.length; j++) {
                str += arr[j][i] + " ";
            }
        }
        else {
            for(let j = arr.length - 1; j >= 0; j--) {
                str += arr[j][i] + " ";
            }
        }
    }
    console.log(str);
}

let arr = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];
wavyColByCol(arr)