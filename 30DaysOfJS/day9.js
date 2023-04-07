let address = {
    street : 'a',
    city : 'b',
    zipCode: 'c'
}

const map = Object.assign({
    Coord: {x: 1.3,y:2.3}
    }, address)

const CopiedMap = {...map}

console.log(address, map, CopiedMap)


function showAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
};


let address1 = showAddress('a','b','c')
console.log(address1)

function showAddressC(street, city,zipCode){
    this.street = street,
    this.city = city,
    this.zipCode = zipCode;
}
let add = new showAddressC('a','b','c')
console.log(add)