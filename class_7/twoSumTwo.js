

var twoSum = function(numbers, target) {
    let start = 0, end = numbers.length -1;
    while(start < end) {
        if((numbers[start] + numbers[end]) > target) {
            end--;
        }
        else if ((numbers[start] + numbers[end]) < target) {
            start++;
        }
        else if ((numbers[start] + numbers[end]) == target) {
            return [start+1, end+1]
        }
    }
};
let numbers = [2,7,11,15], target = 9;
let result = twoSum(numbers, target);
console.log("result is:-", result)