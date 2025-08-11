// First non-repeating character

// Goal: First character that appears only once.

// Test: Hash maps for counting frequency.

// function firstNonRepeatingCharacter(str) {
//     for(const char of str){
//         if(str.indexOf(char)=== str.lastIndexOf(char)){
//             return char;
//         }
//     }
//     return null; // If no non-repeating character found
// }
// console.log(firstNonRepeatingCharacter("hello my self rahul")); // Expected output: "h"


function firstNonRepeatingCharacter(str) {
    const strSplit = str.split('');
    for (let i=0;i<strSplit.length;i++){
        let isUnique = true;
        for(let j=0;j<strSplit.length;j++){
           if(i !== j && strSplit[i]=== strSplit[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            return strSplit[i];
        }
    }
    return null; // If no non-repeating character found
}
console.log(firstNonRepeatingCharacter("hello my self rahul")); // Expected output: "h"