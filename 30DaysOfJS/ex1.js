arr = ['a',3,4,12,2]

for(let pos of arr){
    console.log(fizzBuzz(pos))
}

function fizzBuzz(input) {
  if (typeof (input) !== "number")
    return NaN;
    
  else if((input%3==0) && (input%4==0))
   return "FizzBuzz";

  else if(input%3==0)
    return "Fizz";

  else if(input%4==0)
    return "Buzz";

  else
    return input;

}