function solution(S) {
    const stack = []
    let count = 0;

    for (let i = 0; i < S.length; i++) {
        if (stack.length === 0) {
            stack.push(S[i])
        }
        else {
            if (stack[stack.length - 1] === S[i]) {
                stack.push(S[i])
            } else {
                if (stack.length >= 3) {
                    count += Math.floor(stack.length / 3)
                }
                stack.pop()
            }
        }
    }
    if (stack.length >= 3) {
        count += Math.floor(stack.length / 3)
    }
    return count
}