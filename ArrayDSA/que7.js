// findMissing number from this array
function MissingNumber(arr) {
    var n = arr[arr.length-1]
    var actualSum = n*(n+1)/2
    var expectsum = arr.reduce((sum,num)=> sum+num,0)
    return actualSum-expectsum
}
console.log(MissingNumber([1,2,3,4,6,7,9]));
