// Reverse a string

// Goal: Return the reversed version of the string.

// Test: Understanding of indexing and string immutability.

// function reverseString(str) {
//     var char = str.split('').reverse().join('');
//     return char;    
// }
// reverseString('hello my self rahul') // Expected output: "olleh"

// function reverseString2(str) {
//     var reversed = '';
//     for(let i=str.length-1;i>0;i--){
//         reversed+= str[i];
//     }
//     return reversed;
// }
// console.log(reverseString2("hello my self rahul")); // Expected output: "luhar fles ym olleh"


// function reverseString3(str) {
// var arr = str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
// return arr;
// }
// console.log(reverseString3("hello my self rahul")); // Expected output: "luhar fles ym olleh"


function reverseString3(str) {
    var arr = str.split(' ');
    var revString = '';
    for (let i = 0; i < arr.length; i++) {
        var a = arr[i].split('')
        var rev = '';
        for (let j = a.length - 1; j >= 0; j--) {
            rev += a[j];
        }
        revString += rev + ' ';
    }
    return revString;
}
console.log(reverseString3("hello my self rahul")); // Expected output: "luhar fles ym olleh"
