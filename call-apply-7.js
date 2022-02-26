const kibria = {
    id: 101,
    name: 'RJ kibria',
    money: 5000,

    treatDe: function (expense, boksish, tax) {
        this.money = this.money - expense - boksish - tax;
        console.log(this)
        return this.money
    }
}


const omarSuni = {
    id: 102,
    name: 'omar suni',
    money: 6000,
}


const bappa = {
    id: 103,
    name: 'bappa raj',
    money: 8000,
}

// const bappaTreatDay = kibria.treatDe.call(bappa, 1200, 150, 80)
// const saniTreatDay = kibria.treatDe.call(omarSuni, 1200, 250, 120)


const bappaTreatDay = kibria.treatDe.apply(bappa, [1300, 200, 150])
const saniTreatDay = kibria.treatDe.apply(omarSuni, [1000, 1500, 100])


const obj1 = { module: 35, video: 2 }; const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);