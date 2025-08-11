// Basic string compression

// Goal: Turn "aaabb" into "a3b2".

// Test: String building and iteration.

function stringCompression(str) {
    let compressed = '';
    let count = 0 
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i+1]){
            count++;
        }
        else{
            compressed += str[i]+(count+1);
            count = 0;
        }
    }
    return compressed;
}
console.log(stringCompression("aaabb")); // Expected output: "a3b2"