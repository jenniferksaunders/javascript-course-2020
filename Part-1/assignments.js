/* Javascript Fundamentals Part 1
*/

// values and variables
country = 'Netherlands'
continent = 'Europe'
population = 521542

console.log(country + ',' + continent + ',' + population)


// data types
isIsland = false
let language

console.log(typeof (isIsland) + ',' + typeof (language))


// let, const and var
language = 'Dutch'
const myself = 'Jennifer'

//myself = 'someone else'


// Basic Operators
currentYear = 2021
const ageJennifer = currentYear - 1986;

console.log(ageJennifer)
console.log(population / 2)
console.log(population++)
console.log(population > 6000000)
console.log(population < 33000000)

description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language

console.log(description)


// Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

console.log(description)


// Taking Decisions: If/else statements
average_population = 33000000

if (population < average_population) {
    v = average_population - population
    console.log(`${country}'s population is ${v} below average`)
} else {
    v = population - average_population
    console.log(`${country}'s population is ${v} above average`)
}


// Type conversion and coercion
//   '9' - '5' = 4
//   '19' - '13' - '17' = '-11'
//   '19' - '13' - 17 = -11
//   '123' < 57 = False
//   5 + 6 + '4' + 9 - 4 - 2 = 117
console.log('9' - '5') // = 4
console.log('19' - '13' - '17') // = -11
console.log('19' - '13' - 17) // = -11
console.log('123' < 57) // = false
console.log(5 + 6 + '4' + 9 - 4 - 2) // = 1143


// Falsy values:
//  0
//  ''
//  undefined
//  null
//  NaN


// Equality Operators == vs. ===
/*
numNeighbours = Number(prompt("How many neighbour countries does your country have?"))
if (numNeighbours === 1) {
    console.log('Only one neighbour!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border!')
} else {
    console.log('No borders')
}
*/

// Logical Operators
if (language == 'English' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`${country} does not meet your criteria`)
}


// The Switch statement
language_input = 'English'
switch (language_input) {
    case 'Chinese':
    case 'Mandarin':
        console.log("MOST number of native speakers!");
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers')
        break
    case 'English':
        console.log(`3rd place`)
        break
    default:
        console.log(`Great language too :D`)
}


// The conditional (ternary) operators
console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`)


// 


