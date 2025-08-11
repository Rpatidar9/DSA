// Count vowels and consonants

// Goal: Loop and count letters.

// Test: Basic character checks.

// function countVowelsAndConsonants(str) {
//     let vowels = 'aeiouAEIOU';
//     let countVowel = 0;
//     let countConsonants= 0
//     for(let char of str){
//         if(vowels.includes(char)){
//             countVowel++;
//         }else{
//             if(char.match(/[a-zA-Z]/)){
//                 countConsonants++;
//             }
//         }
//     }
//     return {vowels: countVowel, consonants: countConsonants};
// }
// console.log(countVowelsAndConsonants("hello my self rahul")); // Expected output: { vowels: 6, consonants: 10 }
// console.log(countVowelsAndConsonants("aeiouAEIOU")); // Expected output


// without any include and match method

function countVowelsAndConsonants(str) {
    let vowels = 'aeiouAEIOU'
    let countVowel = 0;
    let countConsonants = 0;
    for (let char of str){
        for(let vowel of vowels){
            if(vowel == char){
                countVowel++;
            }
        }
        if (char >= 'a' || char <= 'z') {
            countConsonants++
        }
    }
    return {vowel : countVowel,consonants:countConsonants}
}
console.log(countVowelsAndConsonants('heloffs ffffin oooenn iiiiiiiiiiiii'));
