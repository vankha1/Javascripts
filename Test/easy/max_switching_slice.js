function longestSwitchingSubarray(arr) {
    const n = arr.length;
    
    // If array size is less than or equal to 2, the longest switching subarray is the entire array
    if (n <= 2) {
        return n;
    }
    
    let ans = 2; // Minimum length of switching sub-array can be 2
    let temp_ans = 2; // Temp variable to count the current valid sub-array length
    
    // Start from the third element (index 2)
    for (let i = 2; i < n; ++i) {
        // Check if current element matches the element two steps back (for switching condition)
        if (arr[i] === arr[i - 2]) {
            temp_ans += 1; // Valid continuation of a switching sub-array
        } else {
            temp_ans = 2; // Reset temp_ans, since the sub-array is no longer valid
        }
        
        // Update ans if we found a longer valid sub-array
        ans = Math.max(temp_ans, ans);
    }
    
    return ans;
}

// Example usage:
console.log(longestSwitchingSubarray([3, 7, 3, 7, 2, 1, 2])); // Output: 4
console.log(longestSwitchingSubarray([1, 5, 6, 0, 1, 0])); // Output: 3
console.log(longestSwitchingSubarray([7, -5, -5, -5, 7, -1, 7]));
console.log(longestSwitchingSubarray([7, 4, -2, 4, -2, -9]));
console.log(longestSwitchingSubarray([3,2,3,2,3]));
