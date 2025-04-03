class Solution {
    solution(A) {
        // Sort the positions of the holes
        A.sort((a, b) => a - b);
        
        const N = A.length;
        let minBoardLength = Number.MAX_VALUE;
        
        // Try all possible ways to split the holes into two contiguous groups
        for (let i = 1; i < N; i++) {
            // First group is from 0 to i-1, second group is from i to N-1
            const firstBoardLength = A[i-1] - A[0]; // Length of the first board
            const secondBoardLength = A[N-1] - A[i]; // Length of the second board
            const boardLength = Math.max(firstBoardLength, secondBoardLength); // Both boards should be the same length
            
            // We want to minimize the maximum of both board lengths
            minBoardLength = Math.min(minBoardLength, boardLength);
        }
        
        return minBoardLength;
    }
}

// Test examples
const solution = new Solution();
console.log(solution.solution([11, 20, 15])); // Expected output: 4
console.log(solution.solution([15, 20, 9, 11])); // Expected output: 5
console.log(solution.solution([0,44,32,30,42,18,34,16,35]));
console.log(solution.solution([15, 20, 9, 11]));
