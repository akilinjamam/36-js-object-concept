const bottle = {
    color: 'yellow',
    price: 100,
    madeWith: 'plustic',
    capacity: '500 ml'
}

const color = bottle.color
console.log(color)
// providing keys only. key means the property name in the object

const key = Object.keys(bottle);
console.log(key)

// providing value only. that means its providing only value of the name as well as key

const value = Object.values(bottle);
console.log(value);


// providing every pare or properties under third bracket.
const pair = Object.entries(bottle);
console.log(pair);

// if you want to delete any property or pair

// delete bottle.price;
// console.log(bottle);

// if you want you can seal the properties . seal allows you only not to delete any property of the object but allow you to change. 
// if you want you can freeze properties. it prevent you from deleting and updating

// Object.seal(bottle);   // you can not delete if you seal but can change the property value
Object.freeze(bottle)     // you can not delete or change any property 
delete bottle.price;
bottle.price = 150
console.log(bottle);

