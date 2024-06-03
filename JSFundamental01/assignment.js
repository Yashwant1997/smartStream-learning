/*
Declare variables called country, continent and population and assign their values according to your own country (population in millions).
Log their values to the console.

*/
console.log("====Assigment first start======");
let country = "India";
let continent = "Asia";
let population = "300 millions";

console.log(country + continent + population);

console.log("====Assigment first end=====");

//=======================================================================================================

console.log("======Coding Challenge first========= ");
let marksMass = 78;
let marksHeight = 1.69;
let marksBMI = marksMass / marksHeight ** 2  // marksHeight * marksHeight

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2

let markHigherBMI = marksBMI >= johnBMI;
console.log(markHigherBMI);

console.log("====== first Challenge end here======");


//====================================================================================

console.log("======Coding Challenge Second========= ");
if (marksBMI > johnBMI) {
    console.log(`makr's BMI is (${marksBMI}) higher than (${johnBMI})`);
}
else {
    console.log(`makr's BMI is (${johnBMI}) higher than (${marksBMI})`);
}

console.log("======Second Challenge end here======");

//===========================================================================================

console.log("=====Coding Challenge Third start=====");
const scoreDolphins = (97 + 112 + 101) / 3;
console.log(scoreDolphins);    //103.33
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreKoalas);      //109

if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
}
else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
}
else if (scoreDolphins === scoreKoalas || scoreKoalas >= 100 || scoreDolphins >= 100) {
    console.log("Both win the trophy");
}
else {
    console.log("No one wins the trophy");
}

console.log("====Coding challenge Third end here");
//=============================================================================================

console.log("=====Coding Challenge Fourth start=====");
let bill = 230;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value: ${bill + tip}`);

console.log("=====Coding Challenge Fourth end=====");