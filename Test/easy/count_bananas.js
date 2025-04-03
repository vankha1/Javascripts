function sol(s) {
    let A = 0, B = 0, N = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') A++;
        else if (s[i] === 'B') B++;
        else N++;
    }

    let count = 0;

    while (B >= 1 && A >= 3 && N >= 2) {
        count++;
        A -= 3;
        B -= 1;
        N -= 2;
    }

    return count;
}