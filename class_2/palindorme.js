
function palindrome(num) {
    let str = "" + num;
    let i = 0, j = str.length-1;
    while(i < j) {
        if(str[i] == str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
}

const num = "fnitinf";
const result = palindrome(num)
console.log("final result:-", result)


