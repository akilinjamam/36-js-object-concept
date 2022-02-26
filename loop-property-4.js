// for of loop is basically used in the case of array, finding out the elements of array.
// for in loop is used for getting property of object. for of is also acceptable but not recommended to do so.


const bottle = {
    color: 'yellow',
    price: 100,
    madeWith: 'plustic',
    capacity: '500 ml'
}

// use for in 

for (const prop in bottle) {
    // console.log(prop) //to get property name only
    // console.log(prop, bottle[prop]) //to get property value
}


const key = Object.keys(bottle);
// console.log(key);

for (const prop of key) {
    console.log(prop, bottle[prop])
}


// advance

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value)
}
