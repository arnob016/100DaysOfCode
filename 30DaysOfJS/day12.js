const odd = [1,3,5,7];
const even = [2, 4, 6, 8];


const allNum = odd.concat(even);

console.log(allNum)

console.log(allNum.slice(2,4));
console.log(allNum.slice(2));

const obj1 = [ {id: 1}]
const combined = obj1.concat(allNum);
console.log(combined)

obj1[0].id = 11;

//betteruse
const spreadYourLegs = [...odd,'middleman',...even];
console.log(spreadYourLegs)


console.log([...odd, 9, 11])

spreadYourLegs.forEach((id,index) => console.log(id, index));

console.log(odd,even)

const newar = odd.join(', ')

console.log(odd);
console.log(newar);

let text = "Hello World !"
text = text.split(" ")
console.log(text)
text = odd.join('_')
