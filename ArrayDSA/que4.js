function moveAllZeroAtLast(arr){
    let count=0
for (let i = 0; i < arr.length; i++) {
if(arr[i]!== 0){
    arr[count] = arr[i]
    count++
} 
}   
while(count<arr.length){
    arr[count]=0
    count++
}

return arr
}
console.log(moveAllZeroAtLast([3,3,0,45,5,0,356,0 ]));
