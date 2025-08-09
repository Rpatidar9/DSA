//reverse of array without using arr
function reveresArray(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++,
            right--
    }

    return arr
}
console.log(reveresArray([32, 45, 556, 7]));
