function solution(A) {
    A.sort((a, b) => a - b); // Sort the array in ascending order 2,2,7,8,9
    let count = 0;
    let i = 0;
    
    while (i < A.length) {
        count++;  // We start a new room
        let roomSize = A[i];  // Get the max allowed size from the smallest guest
        let j = 0;

        // Try to fill the room with as many guests as possible
        while (j < roomSize && i < A.length) {
            j++;
            i++;
        }
    }
    
    return count;
}
console.log(solution([2,7,2,9,8])); // 5
console.log(solution([1,1,1,1,1])); // 5
console.log(solution([2,1,4])); // 5
console.log(solution([7,3,1,1,4,5,4,9])); // 5