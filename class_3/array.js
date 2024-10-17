// Array and strings

let str = "vishnu"
console.log(str)
str[0] = "b"
console.log(str) // strings are immutable hence don't update


let arr = [1, 3, 5, 'vishnu']
console.log(arr)
arr[1] = "neha"
console.log(arr) // array are mutable hence they get updated


let arrStr = ["vishnu", "rahul", "sohan"]
console.log(arrStr[0]) // strings are immutable hence don't update
arrStr[0][0] = "hello"
console.log(arrStr[0]) // strings are immutable