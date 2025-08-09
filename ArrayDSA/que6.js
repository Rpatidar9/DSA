//find the duplicate the value from this array
// function FindDuplicate (arr){
  
// for (let i = 0; i < arr.length; i++) {
//     var count = 0 
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j])
//             count++
//     }
//     if(count==1){
//         return arr[i]
//     }
    
// }
// }
// console.log(FindDuplicate([1,3,2,2,4,5]));


// another way we can find duplicaticate

function duplicateNum(arr) {
    const seen ={}
    const duplicatte = new Set();
    for (const num of arr) {
        if(seen[num])
        {
            duplicatte.add(num)
        }else{
            seen[num]=true
        }
    }
    return duplicatte
    
}
console.log(duplicateNum([1,2,3,3,4,4,5]));
