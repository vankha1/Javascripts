
function solution(R, V) {
    let initA = 0,
        initB = 0;

    let curA = 0,
        curB = 0;

    for (let i = 0; i < V.length; i++) {
        if (R[i] === "A") {
            curA += V[i];
            curB -= V[i];

            if (curB < 0) {
                initB -= curB;
                curB = 0;
            }
        } else {
            curB += V[i];
            curA -= V[i];

            if (curA < 0) {
                initA -= curA;
                curA = 0;
            }
        }
    }
    return [initA, initB];
}

console.log(solution("ABAB", [10, 5, 10, 15]));

console.log("2020-01-01".split("-")[1]);