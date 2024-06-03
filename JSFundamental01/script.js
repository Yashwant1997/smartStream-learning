
//Varaibles


// let js = 'amazing';
// if (js === 'amazing') {
//     alert('JavaScript is funnnn!')
// }

console.log('10+20+-10');   //10+20+-10
console.log(10 + 20 - 10);  //20

let myFirstJob = "Automation Tester"; // variable descriptive in nature + camel case
console.log(myFirstJob);

let PI = 3.1415;   // PI is constant hence in upper case


//================================================================================================


// Data Types
let javaScriptFun = true;

console.log(true);                //boolean
console.log(typeof javaScriptFun);  //boolean
console.log(typeof 23);             //number
console.log(typeof "Yashwant");     //string
console.log(typeof 'Yashwant');     //string 
console.log(typeof Yashwant);       //undefined bcz it is varaible
console.log(typeof undefined); // undefined imp interview

javaScriptFun = 'Yes'             // data type changed to string hence js dynamic typing
console.log(typeof javaScriptFun);      //string

console.log(typeof null);  // object  + here value and type is null
let state = null;  // empty     
console.log(state); //null

/*
Datatype of value (imp for interview)
             
             (typeof var) -> to find datatype
Undefined	 "undefined"
Null	     "object"
Boolean      "boolean
Number	     "number"
String       "String"
bigInt       "undefined"
function      " function or object function" 

*/


//=========================================================================================

//let vs var vs const

let age = 30;
age = 31;     // reassigment or mutating variable
console.log(age);

const birthYear = 1997;
// birthYear = 1990;
// console.log(birthYear);  // error reassignment is not possible


//lastName = 'Patil';       // it will work not recommednded
//console.log(lastName);   // Patil

//============================================================================================

//Operators

const now = 2037;
const ageYash = now - 1991;
const ageSarah = now - 2018;
console.log(ageYash, ageSarah);  //46 19

console.log(ageYash * 2, ageYash / 10, 2 ** 3);   //** is a exponential opr
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Yeshwant';
const lastName = 'Patil';
console.log(firstName + ' ' + lastName);  // Yeshwant Patil

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1  //101
x--;          //100
x--;          //99
console.log(x);  //99


// Comparison operators
console.log(ageYash > ageSarah); //true >, <, >=, <=
console.log(ageSarah >= 18);      //true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);  //true

console.log("2" > 1); //T
console.log("02" > 1);  //T

// console.log(null > 0); // F
// console.log(null == 0); // F
// console.log(null >= 0); //T // value conversion problem
// console.log(null <= 0); //T 
// console.log(null === 0); // F
// comparisons convert null to number , treating it as 0. hence null>=0 is T AND null > 0 is F

// console.log(undefined == 0); // F
// console.log(undefined > 0); // F
// console.log(undefined < 0); // F

//======================================================================================

// Operator Precedence

console.log(25 - 1 ** 5);  //24

let y, z;
z = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(y, z);  // 10

const averageAge = (ageYash + ageSarah) / 2;  // 32.5
console.log(ageYash, ageSarah, averageAge); // 46 19 32.5

//=======================================================================================

// Strings and Template Literals
const firstNam = 'Jonas';
const job = 'teacher';
const birthYea = 1991;
const year = 2037;

const jonas = "I'm " + firstNam + ', a ' + (year - birthYea) + ' year old ' + job + '!';  // type conversion
console.log(jonas);  //I'm Jonas, a 46 year old teacher!

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);    //  //I'm Jonas, a 46 year old teacher!

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

// or 

console.log(`String
multiple
lines`);

// slice 
console.log("slice use :")
const gameName1 = new String("abcdefghi");
const anotherString = gameName1.slice(-8, 5)
console.log(anotherString); // bcde

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // starting and end spaces remove

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // false // not found in string

const gameName = new String('hitesh-hc-com');
console.log(gameName.split('-')); // split based on - and gives array


//=============================================================================================


// Taking Decisions: if / else Statements
const ag = 15;

if (ag >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - ag;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

//==========================================================================================


// Type Conversion and coercion

//Type Conversion
const inputYear = '1991';
console.log(inputYear + 18);  //199118
console.log(Number(inputYear), inputYear);  //1991 '1991'
console.log(Number(inputYear) + 18);       //2009

console.log(Number('Jonas'));  // NaN  
//whenever an operation that involves numbers fails to produce a new number i.e invalid number.
console.log(typeof NaN);      // number

console.log(String(23), 23);  // 23 23

//Type Coercion
console.log('I am ' + 23 + ' years old');  // Number to String
console.log('23' - '10' - 3);              // String to Number
console.log('23' + '10' + 3);             // 23103
console.log('23' * '2');                 // 46      


let n = '1' + 1; // '11'
n = n - 1;
console.log(n);   //10

//let sco = null   // number 0
//let sco = "33ab";  // number NaN
let sco = "33";
let valueInNumber = Number(sco)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //0
console.log(typeof null);   // object

console.log(+true);   //1 //+true possible
//console.log(true+);//error
console.log(+"");    //0


//====================================================================================

// Truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));         // false
console.log(Boolean(undefined));  // false
console.log(Boolean('Jonas'));    // true
console.log(Boolean({}));         // true
console.log(Boolean(''));         // false


const money = 100;
if (money) {
    console.log("Don't spend it all )");  //
} else {
    console.log('You should get a job!');
}

let height = 0;        // height;  
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');   //
}

//=================================================================================

// Equality Operators: == vs. ===

const agee = '18';
if (agee === '18') console.log('You just became an adult :D (strict)');

if (agee == 18) console.log('You just became an adult :D (loose)');

// const favourite = (prompt("What's your favourite number?"));
// console.log(favourite);          // 23
// console.log(typeof favourite);   // String

// if (favourite === 23) { // '23' === 23 -> FALSE
//     console.log('Cool! 23 is an amzaing number!')
// }


// const favourite = Number((prompt("What's your favourite number?")));
// console.log(favourite);          // 23
// console.log(typeof favourite);   // Number

// if (favourite === '23') { // 22 === 23 -> FALSE
//     console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else if (favourite === 9) {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');

//=========================================================================================

// Boolean Logic

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);  //T
console.log(hasDriversLicense || hasGoodVision);   //T
console.log(!hasDriversLicense);                   //F

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

// two different datatypes cannot be comapare

//==================================================================================

// The switch Statement


const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

//====================================================================================

// statement and Expressions


if (23 > 10) {    // expression
    const str = '23 is bigger';   // statement
}

const me = 'Jonas';   // statement
console.log(`I'm ${2037 - 1991} years old ${me}`);  // contain bot statement and expression

//======================================================================================

// The Conditional (Ternary) Operator
const ageee = 23;
// age >= 18 ? console.log('I like to drink wine ') : console.log('I like to drink water');

const drink = ageee >= 18 ? 'wine ' : 'water';
console.log(drink);

let drink2;
if (ageee >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${ageee >= 18 ? 'wine ' : 'water '}`);

//=============================================================================================================


