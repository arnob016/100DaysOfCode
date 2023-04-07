const item = [3,1,4];

item.push(5,6); //end of an array
item.unshift(1,2);; //beginning of array
item.splice(3,0,'i','m', 'inbetween'); //middle of array

let numbers = item;

console.log(numbers);
console.log(item.lastIndexOf(1));
console.log(numbers.includes(17));
console.log(numbers.indexOf(1,5));
console.log(numbers.indexOf(1,7));


console.log(numbers)
const delLast = numbers.pop(); //remove from end
console.log(numbers)
console.log(delLast)


const delFirst = numbers.shift(); //remove from first
console.log(numbers)
console.log(delLast)

const delMiddle = numbers.splice(1,1); //remove from first
console.log(numbers)
console.log(delMiddle)

numbers.length = 0;
console.log(numbers )

const course = [
    {id: 1, name : 'a'},
    {id: 2, name : 'b'},
    {id: 3, name : 'c'},
]

const foundedcourse = course.findIndex(function(course){
    return course.name === 'a';
})
//shorter way
const searchResult = course.find(course => course.name === 'a');
// => means Goes To !
console.log(foundedcourse)
console.log(searchResult)
