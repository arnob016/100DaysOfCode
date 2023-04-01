const marks = [80,70,50]

console.log(calculateGrade(marks));

function calculateGrade(marks){
    let mark = calcMark(marks);
    if (mark<=59) return 'F';
    if (mark<=69) return 'D';
    if (mark<=79) return 'C';
    if (mark<=89) return 'B';
    return 'A';
}

function calcMark(marks){
    let mark = 0;
    for(let ind of marks)
        mark += ind;
    return mark = mark/marks.length;
}