// find max and min value from array
function findMaxAndMinValue(arr){
var max = arr[0]
var min = arr[0]
for (let i = 0; i < arr.length; i++) {
if(max<arr[i]){
    max = arr[i]
}
if(min>arr[i]){
    min = arr[i]
}

}
return {max ,min};
}
console.log(findMaxAndMinValue([12,34,1,434,54]));
