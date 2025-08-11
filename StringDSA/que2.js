// Check if a string is a palindrome

// Goal: String reads the same forwards and backwards.

// Test: Pointers or built-in reverse function.

// function isPalindrome(str) {
//     var reverse = str.split('').reverse().join('');
//     return str === reverse;
// }
// console.log(isPalindrome("madam")); // Expected output: true
// console.log(isPalindrome("hello")); // Expected output: false

function isPalindrome(str){
    let left = 0;
    let right = str.length -1;
    while(left<right){
        if(str[left]!== str[right]){
return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("madam")); // Expected output: true
console.log(isPalindrome("hello")); // Expected output: false