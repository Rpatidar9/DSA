function isAscendingOrder (arr){
for (let i = 0; i < arr.length; i++) {
if(arr[i]>arr[i+1])    {
    return false
}
}
return true
}
console.log(isAscendingOrder([23,45,1,5,45]));
console.log(isAscendingOrder([23,45,66,77]));
