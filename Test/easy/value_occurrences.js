class Solution {
    solution(A) {
        let moves = 0;
        let n = A.length;
        
        let i = 0;
        
        // Traverse the array to process each unique element
        while (i < n) {
            let currentValue = A[i];
            let count = 0;
            
            // Count how many times currentValue appears consecutively
            while (i < n && A[i] === currentValue) {
                count++;
                i++;
            }
            
            // Now `currentValue` appears `count` times
            if (count < currentValue) {
                // We need to insert `currentValue` to make the count equal to `currentValue`
                moves += currentValue - count;
            } else if (count > currentValue) {
                // We need to remove `count - currentValue` occurrences of `currentValue`
                moves += count - currentValue;
            }
        }
        
        return moves;
    }
}

// Example usage:
const sol = new Solution();

console.log(sol.solution([1, 1, 3, 4, 4, 4]));  // Output: 2
