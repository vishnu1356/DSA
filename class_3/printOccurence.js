// javascript


function occurrence(str) {
    let map = {};
    for(let i = 0; i < str.length; i++) {
        if(map[str[i]]){
            map[str[i]]++;
        }
        else {
            map[str[i]] = 1;
        }
    }
    console.log(map);
}

let str = "javascript"
occurrence(str)


function secondOccurrence(str) {
    let map = {};
    for(let char of str) {
        if(map[char]){
            map[char]++;
        }
        else {
            map[char] = 1;
        }
    }
    console.log(map)

}

let str2 = "javascript";
secondOccurrence(str2)

