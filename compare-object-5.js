const first = { a: 1 };
const second = { a: 1 };
// const third = first;

// if (first === third) {  //second
//     console.log('they are same');
// }

// else {
//     console.log('they are different')
// }

// in the case of comparing between objects, they trace reference of the object. if the reference are different, doesnt matter the values are same or not. they will show difference. if the references are same , then the result will be same. 


// to avoid this. lots of people stringify the values. if the values are converted to stringified. they compare on the  base of values of object rather then comparing on the base of reference. 


console.log(JSON.stringify(first))
console.log(JSON.stringify(second))

if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('they are same')
}

// in the below , the values are same but their position are exchanged.
// what happened when the values are stringified but the same value-positions are exchanced. ?
// ans: the reaction will be: they will be different thought their values are same.
// their values are same but the result showing they are different. in the case of stringify, not only values must have to be same but also their position must have to be same.  if the two condition are fullfiled , they will show the equility. otherwise they will react different.

const first1 = { a: 1, b: 2 };
const second1 = { b: 2, a: 1 };

console.log(JSON.stringify(first1))
console.log(JSON.stringify(second1))

if (first1 === second1) {
    console.log('they are same');
} else {
    console.log('the are different')
}


function compareobjects(objt1, objt2) {
    if (Object.keys(objt1).length !== Object.keys(objt2).length) {
        return false;
    };

    for (const prop in objt1) {
        if (objt1[prop] !== objt2[prop]) {
            return false
        }
    }

    return true
}

const comparison = compareobjects(first1, second1);
console.log(comparison);