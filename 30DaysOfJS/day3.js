//Truthy Falsy

let userLoggedIn = 'Admin'
let userDefault = 'Genenal User'
let currentUser = userDefault || userLoggedIn

const readPerm = 4;
const writePerm = 2;
const adminPerm = 1;
let myPermission = 0;

myPermission= myPermission | readPerm | writePerm

let Permission = (myPermission & readPerm) ? 'yes' : 'no';
    
console.log(currentUser)
console.log(Permission)

let a = 'red';
let b = 'blue';
let temp = b;
b = a;
a = temp;

console.log(a);
console.log(b);