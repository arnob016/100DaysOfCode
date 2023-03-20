//arithmatic op
let age = 25;
const marks = 70;
let ageCal = age >= '25' ? 'Young' : 'Old' ;
let grade = marks > 40 ? 'You passed': 'You failed';
console.log(ageCal);
console.log(grade);

function calculate(x,y, type) {
    
    if (type === 'Neg' ) {
        return x-y;
    }
    else if (type == 'Add') {
        return x+y;    }   
    else if (type == 'Mul' ) {
        return x*y;    }   
    else if (type == 'Div' ) {
        return x/y;    }   
    else if (type == 'Incr' ) {
        return ++x;    }   
    else if (type == 'Decr' ) {
        return --y;    }
    else if (type ==='Eq'){
        return x===y;
    }
    else{
        return x!==y;
    }
}

console.log("Addition",calculate(10,20,'Add'), "Negation", calculate(10,20,'Neg'))
console.log("Multiply", calculate(10,20,'Mul'),"Divide", calculate(20,10,'Div'))
console.log("Increament", calculate(10,0,'Incr'), "Decreament", calculate(0,20,'Decr'))
console.log("Equal", calculate(true,1,'Eq'), "Not Equal", calculate(0,20,'Neq')) 
