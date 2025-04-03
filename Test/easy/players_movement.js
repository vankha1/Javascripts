function moveCount(S) {
    let count = 0;
    const position = new Array(S.length + 1).fill(1);
    position[0] = 0;
    position[S.length + 1] = 0;
    console.log(position);

    for (let i = 1; i < position.length - 1; i++) {
        switch (S[i - 1]) {
            case "<":
                if (position[i - 1] === 0) {
                    position[i - 1] = 1;
                    position[i] = 0;
                    count++;
                }
                break;
            case ">":
                if (position[i + 1] === 0) {
                    position[i] = 0;
                    position[i + 1] = 1;
                    count++;
                }
                break;
            case "^":
                position[i] = 0;
                count++;
                break;
            case "v":
                position[i] = 0;
                count++;
                break;
        }
    }

    return count;
}

// Example Test Cases
console.log(moveCount("><^^")); // Expected: 2
console.log(moveCount("<<^<v>>")); // Expected: 6
console.log(moveCount("><><")); // Expected: 0
