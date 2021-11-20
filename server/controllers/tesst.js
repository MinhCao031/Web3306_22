function statisticizeGrades(grades, gradeRanges) {
    gradeGroups = new Array(gradeRanges.length).fill(0);

    for (let i = 0; i < grades.length; ++i) {
        for (let j = 0; j < gradeRanges.length; ++j) {
            let condition;
            if (j == 0) {
                condition = 0 <= grades[i] && grades[i] < gradeRanges[0];
            } else if (j == gradeRanges.length - 1) {
                condition = gradeRanges[j - 1] <= grades[i] && grades[i] <= gradeRanges[j];
            } else {
                condition = gradeRanges[j - 1] <= grades[i] && grades[i] < gradeRanges[j];
            }
            if (condition) {
                gradeGroups[j] += 1;
                break;
            }
        }
    }
    return gradeGroups;
}

console.log(statisticizeGrades([ 85, 89, 100 ], [ 35, 50, 65, 80, 90, 100 ]));
