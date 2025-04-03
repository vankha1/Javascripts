function solution(P, S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let allPass = P.reduce((p,c) => p + c)
    S.sort().reverse()

    let index = 0;
    while (allPass > 0) {
        allPass = allPass - S[index]
        index += 1
    }

    return index
}