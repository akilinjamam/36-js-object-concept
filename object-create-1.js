// 1. using object literal
const student = { name: 'sakib Al Hasan', job: 'cricketer' };
// console.log(student);

//  2. constructor
const person = new Object();
// console.log(person);
// inherit it
const human = Object.create(student);
// console.log(human.name);

// class is a different name but the activities behind the class is as like as function. thats why it is called syntactical suger.
function Manus(name, age) {
    this.name = name;
    this.age = age
}

const man = new Manus('sakib-al-hasan', 36);
console.log(man);