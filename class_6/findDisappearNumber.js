/**
    1. beacause all the elements lies in the range 1 to n; It means no element is 0;
    2. We can use the negation Method.
    3. Go to the element and negate the element of which is present at element-1;
    4. Element -1 because we have 0 based index;
 */

function findDisapperar (nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let currentElement = Math.abs(nums[i]);
        if(nums[currentElement -1] > 0) {
           nums[currentElement -1] *= -1;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) {
            result.push(i+1)
        }
    }
    return result;
}
let result = [4, 3, 2, 7, 8, 2, 3, 1]

let output = findDisapperar(result)
console.log(output)