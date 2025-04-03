class Solution {
    solution(A) {
        const n = A.length;
        
        // Edge case: If there's only one element, no pairs can be formed.
        if (n === 1) return 0;

        let count = 0;

        // Traverse the array to form pairs
        for (let i = 0; i < n; i++) {
            // Compare current element with next element (considering circular array)
            const nextIndex = (i + 1) % n;

            // Check if both numbers are either even or odd
            if (A[i] % 2 === A[nextIndex] % 2) {
                count++;  // Increment pair count
                i++;  // Skip next element since it has already been paired
            }
        }

        return count;
    }
}

// Example usage
const sol = new Solution();

const A1 = [4, 2, 5, 8, 7, 3, 7];
console.log(sol.solution(A1));  // Output: 2

const A2 = [5, 5, 5, 5, 5, 5];
console.log(sol.solution(A2));  // Output: 3
console.log(sol.solution([14,21,16,35,22]))  // Output: 3
