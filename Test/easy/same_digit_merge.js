function solution(numbers) {
    let countMap = {}; // {first_digit: {last_digit: count}}
    let totalPairs = 0;

    // Helper function to get the first digit of a number
    function getFirstDigit(num) {
        while (num >= 10) num = Math.floor(num / 10);
        return num;
    }

    // Count occurrences of (first_digit, last_digit)
    for (let num of numbers) {
        let lastDigit = num % 10;
        let firstDigit = getFirstDigit(num);
        
        if (!countMap[firstDigit]) {
            countMap[firstDigit] = {};
        }
        
        if (!countMap[firstDigit][lastDigit]) {
            countMap[firstDigit][lastDigit] = 0;
        }

        countMap[firstDigit][lastDigit] += 1;
    }

    console.log(countMap); // Debugging line to check the countMap structure

    // Count valid pairs
    for (let firstDigit in countMap) {
        for (let lastDigit in countMap[firstDigit]) {
            let count = countMap[firstDigit][lastDigit];

            if (countMap[lastDigit]) { // If there's a number starting with lastDigit
                for (let nextLastDigit in countMap[lastDigit]) {
                    totalPairs += count * countMap[lastDigit][nextLastDigit];
                }
            }
        }
    }

    return totalPairs;
}

// Example usage
// console.log(solution([23, 34, 45, 56, 67, 78])); // Output: 5
// Example usage
console.log(solution([30,12,29,91])); // Output: 5