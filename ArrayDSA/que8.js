//Kadane’s Algorithm – Maximum Subarray Sum

// Goal: Find the contiguous subarray with the maximum sum.

// Test: Dynamic Programming (greedy variation).

function MaxSubArraySum(arr){
var maxCurrent = arr[0];
var maxSum = arr[0];
for (let i = 0; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i],arr[i]+maxCurrent);
    maxSum = Math.max(maxCurrent,maxSum);    
}
return maxSum;
}
console.log(MaxSubArraySum([-2,-1,-3,4,-1,4,1,-5,4])); // Expected output: 6 (subarray: [4,-1,2,1])
