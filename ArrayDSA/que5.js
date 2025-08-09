//route the value from k 
function routeArrfromValue (arr,k){
    var result = []
for (let i = k; i < arr.length; i++) {
    result.push(arr[i])
}
for (let j = 0; j < k; j++) {
result.push(arr[j])
}
    
return result

}
console.log(routeArrfromValue([1,2,3,4,5,6,7,8],3));
