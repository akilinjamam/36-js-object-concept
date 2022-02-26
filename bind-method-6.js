const kibria = {
    id: 101,
    name: 'RJ kibria',
    money: 5000,

    treatDe: function (expense,) {
        this.money = this.money - expense;
        console.log(this)
        return this.money
    }
}

kibria.treatDe(1000);

const omarSuni = {
    id: 102,
    name: 'omar suni',
    money: 6000,
}

const omarTreatDe = kibria.treatDe.bind(omarSuni);
omarTreatDe(1000);
omarTreatDe(1200);
omarTreatDe(1400);

const bappa = {
    id: 103,
    name: 'bappa raj',
    money: 8000,
}

const bappaTreatDey = kibria.treatDe.bind(bappa);
bappaTreatDey(2200);
