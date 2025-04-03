function sol(s) {
    s = s.split("");
    let l = 0;
    let h = s.length - 1;

    while (l < h) {
        if (s[l] !== s[h]) {
            if (s[l] === "?" && s[h] !== "?") {
                s[l] = s[h];
            } else if (s[h] === "?" && s[l] !== "?") {
                s[h] = s[l];
            } else return "NO";
        } else {
            if (s[l] === "?") {
                s[l] = "a";
                s[h] = "a";
            }
        }
        l++;
        h--;
    }

    if (l === h && s[l] === "?") {
        s[l] = "a";
    }

    return s.join("")
}

console.log(sol("ab")); // "aaabaa"
console.log(sol("ab??a")); // "aaabaa"
console.log(sol("?aba?")); // "aaabaa"