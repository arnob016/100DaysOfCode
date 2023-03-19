//constant
const isMale = true;
const gender = 'Male';

//object
let MySelf = {
    name : 'Arnob',
    age : 23,
    occupation : 'Student',
    mood: 'bored',
    about: 'Procrastination'
};
//array
let FavFood = ['Egg', 'Chocolate', 'Milk']
FavFood[3] = 'Burger'

function sayHi(){
    console.log('Hello Javascript');
}
//concatenation & passing
function sayHello(fName, lName){
    console.log('Hello '+ fName + ' ' + lName + '!!!')
}

//displaying on console
console.log('About MySelf:');
console.log("I am  "+ MySelf.name + " and Im "+ MySelf.age + "years old. I am a "+ gender)
console.log('List of fav food:' + FavFood)
console.log('My fav food is:' + FavFood[1])
console.log('Favourite food array size is:' + FavFood.length)
console.log(typeof(FavFood[2])) 
sayHi();
sayHello('Elon', 'Musk');
Topics = ['Variables', 'Constants', 'Typings', 'Object', 'Array','Functions']
console.log(Topics)