// any function under object is called a method. 

const student = {
    name: 'RJ kibria',
    age: 24,
    university: 'Dhaka University',
    Money: 5000,
    mejor: 'BBA accounting',
    subject: ['english', 'bangla', 'mathematic', 'accounting', 'management'],

    tution: function () {
        console.log(this.name, 'has a tution')
    },

    treatDe: function (expense, boksis) {
        this.Money = this.Money - expense - boksis;

        return this.Money
    }
}

student.tution();

const remainingBalance = student.treatDe(600, 50);

console.log(remainingBalance);


// console.log(student)