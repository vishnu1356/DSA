// console.log("transpose matrix")

function transposeMatrix (grid) {
    let result = [];
    for(let col = 0; col < grid[0].length; col++) {
        let temp = []
        for(let row = 0; row < grid.length; row++) {
            temp.push(grid[row][col]);
        }
        result.push(temp)
        temp = []
    }
    console.log(result)
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]]; // [[1,4,7],[2,5,8],[3,6,9]]
transposeMatrix(matrix)


// second Method

var transpose = function(matrix) {
    let result = Array(matrix[0].length);
    for(let i = 0; i < result.length; i++) {
        let arr = Array(matrix.length);
        result[i] = arr;
    }
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++){
            result[col][row] = matrix[row][col]
        }
    }
    return result;
};

let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(transpose(arr))