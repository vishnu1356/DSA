

function multiplyArr(a, m, n, b, n, k) {
    let c = Array(m);
    for(let i = 0;i < c.length; i++ ) {
        let arr = Array(k).fill(0);
        c[i] = arr;
    }
    // iterate all the cell of the new created array c;
    for(let i = 0; i < c.length; i++) {
        for(let j = 0; j < c[i].length; j++) {
            for(let x = 0; x < n; x++) {
                c[i][j] += a[i][x] * b[x][j]
            }
        }
    }
    console.log(c)
}

let a = [[4, 6], [2, 2], [3, 3]], m = 3, n = 2;
let b = [[1, 2, 5], [2, 2, 2]], k = 3;
multiplyArr(a, m, n, b, n, k);