// Check if two strings are anagrams

// Goal: Same characters, different order.

// Test: Sorting or frequency comparison.

function arrAnagram (str1,str2){
    if(str1.length !== str2.length)return false;
    const count = {};
    for(let char of str1){
        count[char] = (count[char]||0) + 1;
    }
    for(let char of str2){
        if(!count[char])return false;
        count[char]--;
    }
    return true;
}
console.log(arrAnagram("listen", "silent")); // Expected output: true
