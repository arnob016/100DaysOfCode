for(let i = 1; i <=5; i++){
    console.log("Day "+i+" Of JS")
}

let i = 1;

while(i<=5){
    console.log("Day "+i+" Of Code")
    i++;
}
console.log('Value of i:',i);

do{
    if(i%2==0) console.log('But I can print ', i);
    i++;
} while (i<=5)

let MySelf = {
    name : 'Arnob',
    age : 23,
    occupation : 'Student',
    mood: 'bored',
    about: 'Procrastination'
};
let FavFood = ['Egg', 'Chocolate', 'Milk']

for(let key in MySelf){
    console.log(key, ':', MySelf.key);
}
for(let index in FavFood){
    console.log(index, FavFood[index]);
}
for (let item of FavFood)
    console.log(item)