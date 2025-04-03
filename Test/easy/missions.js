function solution(D, X) {
    let n = D.length;
    let days = 1; // At least one day is required
    let min = D[0], max = D[0]; // Initialize min and max with the first mission's difficulty

    for (let i = 1; i < n; i++) {
        // If the current mission cannot be performed on the same day
        if (Math.abs(D[i] - min) > X || Math.abs(D[i] - max) > X) {
            // Start a new day
            days++;
            min = D[i]; // The new day's first mission's difficulty
            max = D[i]; // The new day's first mission's difficulty
        } else {
            // Update the min and max for the current day
            min = Math.min(min, D[i]);
            max = Math.max(max, D[i]);
        }
    }

    return days;
}

// Example usage:
console.log(solution([5, 8, 2, 7], 3));  // Output: 3
console.log(solution([2, 5, 9, 2, 1, 4], 4));  // Output: 3
console.log(solution([1, 12, 10, 4, 5, 2], 2));  // Output: 4
