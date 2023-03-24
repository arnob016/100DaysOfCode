console.log(sum(10));
console.log(sum2(10));

function sum(limit) {
    let summ = 0;
    let val3 = 0;
    let val5 = 0;
    let m = 0;
    let n = 0;
    while(val3<=limit){
        val3+= 3*m;
        m++;
    }
    while(val5<=limit){
        val5+= 5*n;
        n++
    }
    return summ = val3 + val5;
}

function sum2(limit){
    let sum2 =0;
    for (let n = 0; n <= limit; n++)
        if(n%3 ===0 || n%5 ===0)
            sum += n;
    return sum2
}