const array = [0, 1, 2, 3, NaN, null, 4]
console.log(countTruthy(array))

function countTruthy(array){
    let i=0;
    for(let val of array){
        if(val)
            i++;
    }
    return i;
}