// count pairsum 



function countPairSum(arr, target) {
    let start = 0, end = arr.length -1;
    let count = 0;
    while(start < end) {
        if((arr[start] + arr[end]) < target) {
            start++;
        }
        else if ((arr[start] + arr[end]) > target){
            end--;
        }
        else {
            if(arr[start] == arr[end]) {
                let freq = end - start + 1;
                count += Math.floor((freq * (freq-1))/2);
                return count;
            }
            else {
                let x = 0, y = 0;
                let a_s = arr[start];
                while(arr[start]  == a_s) {
                    x++;
                    start++;
                }
                let a_e = arr[end];
                while(arr[end] == a_e) {
                    y++;
                    end--;
                }
                count += x * y;
            }
        }
    }
    return count;
}

let arr = [1, 2, 2, 3, 3, 4,  5, 5, 6, 6, 6, 7, 8], target = 8;
let result = countPairSum(arr, target)
console.log(result)