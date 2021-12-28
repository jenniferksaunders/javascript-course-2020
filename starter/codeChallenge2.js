'use strict'

// 1 

//function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3
//}

//const calcAverage = function (score1, score2, score3) {
//    return (score1 + score2 + score3) / 3
//}

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3


//calcAverage = average => (score1 + score2 + score3) / 3

const dolphinsAverage = calcAverage(44, 23, 71)
const koalasAverage = calcAverage(65, 54, 49)

console.log(dolphinsAverage, koalasAverage)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas * 2 || avgKoalas > avgDolphins * 2) {
        console.log(`${avgDolphins > avgKoalas ? 'Dolphins' : 'Koalas'} win (${avgDolphins > avgKoalas ? avgDolphins : avgKoalas} vs ${avgDolphins < avgKoalas ? avgDolphins : avgKoalas}).`)
    }
    else
        console.log('Nobody won.')
}

checkWinner(dolphinsAverage, koalasAverage)
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27))


// 2
const CalcTip = bill => bill < 300 && bill > 50 ? bill * .15 : bill * .2

console.log(CalcTip(100))

const bills = [125, 555, 44]
const tips = [CalcTip(bills[0]), CalcTip(bills[1]), CalcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals)


// 3 
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    bmiCalc: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    bmiCalc: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(`${mark.bmiCalc() > john.bmiCalc() ? mark.fullName : john.fullName}'s BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.bmi < john.bmi ? mark.fullName : john.fullName}'s ${mark.bmi < john.bmi ? mark.bmi : john.bmi}`)


// 4
let bills_new = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips_new = [], totals_new = []

for (let i = 0; i < bills_new.length; i++) {
    tips_new[i] = CalcTip(bills_new[i])
    totals_new.push(bills_new[i] + tips_new[i])
    console.log(`Bill is ${bills_new[i]}, tip is ${tips_new[i]}, total is ${totals_new[i]}.`)
}

console.log(bills_new, tips_new, totals_new)

// --- Bonus
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function calculateAverage(myArray) {
    let total = 0
    for (i = 0; i < myArray.length; i++) {
        total += myArray[i]
    }
    return total / myArray.length
}

let average_value = calculateAverage(totals_new)

console.log(average_value)