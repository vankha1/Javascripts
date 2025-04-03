function solution(a) {
    // Create an object to track which hospitals each doctor works at
    const doctorHospitalMap = {};

    // Iterate through the schedule array
    const n = a.length;   // Number of hospitals
    const m = a[0].length; // Number of days

    // Loop over each hospital and each day
    for (let hospital = 0; hospital < n; hospital++) {
        for (let day = 0; day < m; day++) {
            const doctorId = a[hospital][day];

            // If the doctor is not in the object, initialize their hospital set
            if (!doctorHospitalMap[doctorId]) {
                doctorHospitalMap[doctorId] = new Set();
            }

            // Add the hospital index to the doctor's hospital set
            doctorHospitalMap[doctorId].add(hospital);
        }
    }

    // Count how many doctors are working at more than one hospital
    let count = 0;
    for (const doctorId in doctorHospitalMap) {
        if (doctorHospitalMap[doctorId].size > 1) {
            count++;
        }
    }

    return count;
}

// Test cases
console.log(solution([
    [1, 2, 3],
    [2, 3, 1],
    [1, 3, 2]
])); // Expected output: 3 (Doctor 1 works at hospitals 0 and 2, Doctor 2 works at hospitals 0 and 1, Doctor 3 works at hospitals 1 and 2)

console.log(solution([
    [1, 2],
    [3, 1],
    [2, 3]
])); // Expected output: 2 (Doctor 1 works at hospitals 0 and 1, Doctor 2 works at hospitals 0 and 2)
