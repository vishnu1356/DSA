// console.log("Print the maximum consecutive maximum ones")

function ones (nums) {
    let temp = 0;
    let final = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1) {
            temp++;
        }
        else {
            final = Math.max(final, temp)
            temp = 0;
        }
    }
    final = Math.max(final, temp)
    return final;
    
}

let arr = [1, 1, 0, 1, 1, 1];
let result = ones(arr)
console.log(result);