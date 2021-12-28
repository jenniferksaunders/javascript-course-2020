// 1 & 2
mark_height = 1.88
john_height = 1.76

mark_mass = 95
john_mass = 85

mark_bmi = mark_mass / (mark_height ** 2);
john_bmi = john_mass / (john_height ** 2);

console.log(mark_bmi, john_bmi)

markHigherBMI = mark_bmi > john_bmi

console.log(markHigherBMI)

if (mark_bmi > john_bmi) {
    console.log(`Mark's BMI (${mark_bmi}) is higher than John's (${john_bmi})!`)
} else {
    console.log(`John's BMI (${john_bmi}) is higher than Mark's (${mark_bmi})!`)
}


// 3
dolphin_score_1 = 96
dolphin_score_2 = 108
dolphin_score_3 = 100

koalas_score_1 = 88
koalas_score_2 = 91
koalas_score_3 = 110

dolphin_average = (dolphin_score_1 + dolphin_score_2 + dolphin_score_3) / 3
koalas_average = (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3

if (dolphin_average > koalas_average && dolphin_average > 100) {
    console.log(`The dolphins win`)
} else if (koalas_average > dolphin_average && koalas_average > 100) {
    console.log(`The koalas win`)
} else if (koalas_average === dolphin_average && dolphin_average > 100 && koalas_average > 100) {
    console.log(`It was a tie`)
} else {
    console.log('Nobody won')
}


// 4
bill = 275
//bill = 40
//bill = 430

tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * 0.20

console.log(`The bill was $${bill}. The tip is ${tip} and the total is ${bill + tip}`)





















