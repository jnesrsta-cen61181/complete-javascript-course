/*
let js = "amazing";
console.log(10+10);

console.log('Jonas');
console.log(10);

let firstName = "George";
console.log(firstName);

// example of a variable with reserved keyword
let $new = "George";
let _function = "George";

// constant shloud be in uppercase
let PI = 3.1415; 

// Example of better variable names
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

// Assignments 1
let country = "USA"
let continent = "North America"
let population = 300000000
/*
console.log(country);
console.log(continent);
console.log(population);

// Data Types
/* Primitive Data Types
    Number
    String
    Boolean
    Undefined (empty value for to be fiiled in later)
    Null (empty value)
    Symbol (ES6/ES2015)
    BigInt (ES2020)



console.log(true);
console.log(false);

console.log(typeof true);

let javaScriptIsFun = true;

console.log(typeof javaScriptIsFun);

if (javaScriptIsFun) {
    console.log("JavaScript is fun!");
}

javaScriptIsFun = "Yes!";

console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null); // returns object instead of null

/*
LECTURE: Data Types
1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Logthetypesof'isIsland','population','country'and'language' to the console
*/
/*
let isIsland = false;
console.log(isIsland);
console.log(typeof isIsland);

console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


let age = 30;
console.log(age);
console.log(typeof age);

age = 31;
console.log(age);
console.log(typeof age);

age = 'Hello';
console.log(age);
console.log(typeof age);


const birthYear = 1991;
console.log(birthYear);
console.log(typeof birthYear);

//birthYear = "Hello"; // will not work because birthYear is a constant defined as number before


var testAge = 40; // old way of declaring variables (not used anymore) 
console.log(testAge);
console.log(typeof testAge);
testAge = 31;

testName = "George"; // will work but not recommended because it will create a global variable
*/

/*
const firstName = "James";
const lastName = "Bond";

console.log(firstName + " " + lastName);

let x = 10 + 5;
console.log(x);

x += 10; // x = x + 10
console.log(x);

x *= 4; // x = x * 4
console.log(x);

x++; // x = x + 1
console.log(x);

x--; // x = x - 1
x--;
console.log(x);


const ageJonas = 30;
const ageSarah = 30;
// Comparison Operators
console.log(ageJonas >= ageSarah); // >, <, >=, <=

const now = 2021;
console.log(now);

console.log(now - 1991 > now - 2018);

*/


/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10, x = 10

console.log(x, y);

console.log(ageJonas, ageSarah);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);

*/


/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

*/

/*
const firstName = "George";
const job = "Teacher";
const birthYear = 1994;
const year = 2022

const george = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(george);

const georgeNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`;

console.log(georgeNew);

console.log(`Just a string`);

console.log('String with \n\
multipe \n\
lines');

console.log(`String with
multiple
lines`);

*/
/*
const age = 15;

if (age >= 18) {
    console.log("Person is old enough to drive ??"); // emoji command + control + space
} else {
    const yearsLeft = 18 - age;
    console.log(`Person will be able to drive in ${yearsLeft} years`);
}


let century;
const birthYear = 1992;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`Person was born in ${century}`);

*/


/*

const markMass = 78;
const markHeight = 1.69;
const johnMass = 120;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);


if (markHigherBMI) {
    console.log(`Mark(${markBMI}) has higher BMI then John(${johnBMI})`);
} else {
    console.log(`John(${johnBMI}) has higher BMI then Mark(${markBMI})`);
}

*/




// conversion
const inputYear = '1991';
console.log(inputYear + 18); // without conversion string to number, js just add number to the end
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // should retirn NaN, in node it do just null
console.log(typeof NaN); // NaN is number?


console.log(String(23));
console.log(String(23) + 23);


// coercion
console.log('I am ' + 23 +' years old.');

console.log('I am ' + '23' +' years old.');

// thanks coercion we don't have to use this
console.log('I am ' + String(23) +' years old.');