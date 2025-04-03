function solution(s) {
    for (let i = 0; i < s.length; i++){
        const obj = {}
        for (let j = i; j < s.length; j++){
            if (obj[s[j][i]] === undefined){
                obj[s[j][i]] = j
            }
            else {
                return [obj[s[j][i]], j, i]
            }
        }
    }
}