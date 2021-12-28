'use strict'

let country = 'Canada'
let population = 38000000
let capitalCity = 'Ottawa'
let worldPopulation = 7900000000


// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

let canada = describeCountry(country, population, capitalCity)


// function declarations vs expressions
function percentageOfWorld1(population) {
    return population / worldPopulation * 100;
}

const percentage1 = `This represents ${percentageOfWorld1(population)}% of the world population`

const percentageOfWorld2 = function (population) {
    return population / worldPopulation * 100;
}

const percentage2 = `This represents ${percentageOfWorld2(population)}% of the world population`


// Arrow functions
let percentageOfWorld3 = percentage3 => population / worldPopulation * 100

const percentage3 = `This represents ${percentageOfWorld3(population)}% of the world population`

// ---  or for more than one line:
let birthYear = 1999
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}


// Functions calling other functions
function describePopulation(country, population) {
    return `${country} has ${population} people, which is about ${percentageOfWorld1(population)}% of the world population`
}

console.log(canada, percentage1, percentage2, percentage3, describePopulation(country, population))


// Arrays
let populations = [120000000, 65400000, 840000, 920000]
let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]

console.log(populations.length == 4 ? 'True' : 'False', percentages)


// Basic array functions
let neighbours = ['Belgium', 'Germany']
console.log(neighbours)
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop()
console.log(neighbours)
console.log(`${neighbours.includes('Germany') ? '' : 'Probably not a central European country :D'}`)
if (neighbours.includes('Belgium')) {
    neighbours[neighbours.indexOf('Belgium')] = 'Southern Netherlands'
}

console.log(neighbours)


// Objects
const myCountry = {
    country: 'Australia',
    capital: 'Canberra',
    language: 'English',
    population: 25690000,
    neighbours: [],

    describe1: function () {
        this.description = `${this.country} has ${this.population} people, which is about ${percentageOfWorld1(this.population)}% of the world population`;
        return this.description;
    }
}

console.log(myCountry)


// Dot vs bracket notation
console.log(`${myCountry.country} has ${myCountry.population} people, ${myCountry.neighbours.length} neighbours, and a capital city called ${myCountry.capital}.`)
myCountry.population += 2000000
console.log(`${myCountry.country} has ${myCountry.population} people, ${myCountry.neighbours.length} neighbours, and a capital city called ${myCountry.capital}.`)
myCountry['population'] -= 2000000
console.log(`${myCountry.country} has ${myCountry.population} people, ${myCountry.neighbours.length} neighbours, and a capital city called ${myCountry.capital}.`)


// Object methods
console.log(myCountry.describe1())
console.log(myCountry.description)

myCountry['describe2'] = `${myCountry.country} has ${myCountry.population} people, which is about ${percentageOfWorld1(myCountry.population)}% of the world population`
console.log(myCountry.describe2)


// The For loop
for (let rep = 1; rep <= 50; rep++) {
    console.log(`Voter number ${rep} is currently voting`)
}


// Looping arrays, breaking, and continuing
for (let i = 0; i < populations.length; i++) {
    console.log(`This represents ${percentageOfWorld1(populations[i])}% of the world population`)
}

let array = [888, 999, 1010, 'string']

// --- only numbers
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') continue
    console.log(`number ${i}: ${array[i]}`)
}

// --- break with string
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') break
    console.log(`number ${i}: ${array[i]}`)
}


// looping backwards and loops in loops
let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`${listOfNeighbours[i][j]}`)
    }

}


// The while loop
let i = 0
while (i < populations.length) {
    console.log(`This represents ${percentageOfWorld1(populations[i])}% of the world population`)
    i++
}