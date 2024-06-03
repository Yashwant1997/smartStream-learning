// Functions
'use strict';
function logger() {
    console.log('My name is Yeshwant');
}

// calling / running / invoking function
logger;    //function reference: no output
logger();  //My name is Yeshwant

//=========================================================================================

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return console.log(juice);
    //console.log(juice);    // after return we cannot print
}

fruitProcessor(5, 0);             // 5 0  Juice with 5 apples and 0 oranges.
fruitProcessor();                   //undefined undefined Juice with undefined apples and undefined oranges.
fruitProcessor(5, 'a');            // 5 'a' Juice with 5 apples and a oranges.



//=======================================================================================

// Function declaration
const age1 = calcAge1(1997);   // function declarations can call before defining
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
// const age1 = calcAge1(1997);

// Function expression
// const age2 = calcAge2(1997);  // Cannot access 'calcAge2' before initialization
const calcAge2 = function (birthYear) {  // Anonymous Function
    return 2037 - birthYear;
}
const age2 = calcAge2(1997);

console.log(age1, age2);   //40 40 

//=====================================================================================


console.log("========loginUserMessage==========");
console.log(typeof ""); //string
console.log(typeof ''); //string

function loginUserMessage(username = "sam") {

    return `${username} just logged in`
}
loginUserMessage("hitesh")                // no output
console.log(loginUserMessage("hitesh"))   //hitesh just logged in
console.log(loginUserMessage("   "))      //    just logged in  
console.log(loginUserMessage())           // sam just logged in  

//====================================================================================

console.log("=========loginUserMessage1==============");

function loginUserMessage1(username) {
    if (username) {
        return `Yup`;
    }

    return `${username} just logged in`
}

console.log(loginUserMessage1(""))          //  just logged in i.e " " means falsy value
console.log(loginUserMessage1())            // undefined just logged in  (false)
console.log(loginUserMessage1("jsj"))       // Yup  (true)
//========================================================================================

console.log("=====loginUserMessage2===============");

function loginUserMessage2(username) {
    if (username === undefined) {                 // here username is equal to undefined
        console.log("PLease enter a username");
    }
    return `${username} just logged in`
}

console.log(loginUserMessage2(" "))          //  just logged in
console.log(loginUserMessage2())            // PLease enter a username undefined just logged in
console.log(loginUserMessage2("jsj"))       // jsj just logged in

//=====================================================================================

console.log("=======FunctionWithOperators==========");

// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))  //200

// function calculateCartPrice(...num1) {              // rest operator
//     return num1
// }
//console.log(calculateCartPrice(200, 400, 500, 2000)) //[ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, val3, ...num1) { // here uses rest oprator ...
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500))       // []
console.log(calculateCartPrice(200, 400, 500, 600, 2000))         //[600,2000]


//========================================================================================

console.log("====FunctionCallingOtherFUnction");

const cutPieces = function (fruit) {
    return fruit * 4
}
const fruitProcessor2 = function (appl, orange) {

    const applePieces = cutPieces(appl);
    const orangesPieces = cutPieces(orange);

    return `juice with ${applePieces} of apple pieces and ${orangesPieces} pieces of oranges`

}

console.log(fruitProcessor2(2, 3));  //juice with 8 of apple pieces and 12 pieces of oranges

//this is good exaple of DRY principle



//==============================================================================================

