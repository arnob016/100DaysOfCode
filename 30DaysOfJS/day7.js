//Excercise : Create a function that prints the prime numbers upto n;

let n = 100;
console.log('Printing prime numbers upto ' + n);
console.log(2);

primeFunc(n);
function primeFunc(num){

    for (let n = 2; n <= num; n++){
        let flag = true;
        
        for(let i=2; i<n; i++)
        {
            if (n%i === 0)
            {
                flag = true;
                break;
            }
            else
            {
                flag = false;
            }
        }
        if(flag === false)
        {
            console.log(n);
        }
    }
}