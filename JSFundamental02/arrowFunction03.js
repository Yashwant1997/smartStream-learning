
// Anonymous Function
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1997);
// console.log(age2);            //40


//Arrow function
const calcAge3 = birthYea => 2037 - birthYea;
const age3 = calcAge3(1991);
console.log(age3);          //46

//====================================================================

const yearsUntilRetirement = (birthYear, firstNme) => {
    const age = 2024 - birthYear;
    const retiremnt = 65 - age;
    // return retiremnt;
    return `${firstNme} retires in ${retiremnt} years!`
}
console.log(yearsUntilRetirement(1997, 'Yeshwant'));  //Yeshwant retires in 38 years!

//======================================================================

console.log("====Fn calling other function===");

const calAg = birth => 2024 - birth;

const yearsUntilRetirements = (birthYear, firstNme) => {
    const age = calAg(birthYear)
    const retiremnts = 65 - age;
    if (retiremnts > 0) {
        return `${firstNme} retires in ${retiremnts} years!`
    }
    else {

        return -1;
    }

}
console.log(yearsUntilRetirements(1997, 'Yeshwant'));  //Yeshwant retires in 38 years!
console.log(yearsUntilRetirements(1950, 'Yeshwant'));  //-1

//===========================================================================================