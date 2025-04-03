function solution(A, D) {
    let incoming = 0;
    let expense = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            incoming += A[i];
        }
        else {
            expense += Math.abs(A[i]);
        }
    }

    const obj = {}
    const times = {}
    let extraMonth = 0;

    for (let i = 0; i < D.length; i++) {
        const month = D[i].split('-')[1];
        if (!obj[month] && !times[month]) {
            obj[month] = A[i] < 0 ? Math.abs(A[i]) : 0;
            times[month] = 1;
        }
        else {
            obj[month] = A[i] < 0 ? obj[month] + Math.abs(A[i]) : obj[month];
            times[month] = A[i] < 0 ? times[month] + 1 : times[month];
            if (times[month] >= 3 && obj[month] >= 100) {
                extraMonth++;
            }
        }
    }
    return incoming - expense - (12 - extraMonth) * 5;
}

console.log(solution([-60, 60, -40, -20], ["2020-10-01", "2020-02-02", "2020-10-10", "2020-10-30"]));
