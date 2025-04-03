function solution(A, B) {
    let count = 0;
    
    for (let i = 0; i < A.length; i++){
        let subA = A[i]
        let subB = B[i]

        if (subA === subB) count++;

        for (j = i + 1; j < A.length; j++){
            if (A[i] !== undefined) {
                subA += A[j]
                subB += B[j]

                const objA = {}, objB = {}
                for (let k = 0; k < subA.length; k++){
                    if (objA[subA[k]] === undefined) {
                        objA[subA[k]] = 1;
                    }
                    else {
                        objA[subA[k]]++
                    }

                    if (objB[subB[k]] === undefined) {
                        objB[subB[k]] = 1;
                    }
                    else {
                        objB[subB[k]]++
                    }
                }

                let isCorresponding = true;
                for (const k of Object.keys(objA)) {
                    if (objA[k] !== objB[k]) {
                        isCorresponding = false
                        break;
                    }
                }

                if (isCorresponding) count++
            }
        }
    }

    return count
}