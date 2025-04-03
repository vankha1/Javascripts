function solution(A) {
    const unique = []
    let prev = 0

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== prev) {
            unique.push(A[i])
            prev = A[i]
        }
    }

    if (unique.length === 1 || unique.length === 2) {
        return unique.length
    }

    let count = 2

    for (let i = 0; i < unique.length; i++) { 
        const hill = unique[i] > unique[i - 1] && unique[i] > unique[i + 1]
        const valley = unique[i] < unique[i - 1] && unique[i] < unique[i + 1]
        
        if (hill || valley) {
            count++;
        }
    }

    return count

}

console.log(solution([2,2,3,4,4,3,3,2,2,1,1,2,5]))