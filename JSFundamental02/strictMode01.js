// without activating Strict Mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;            //no output not showing error
// if (hasDriversLicense) console.log('I can drive :D');



// activating Strict Mode
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;         //ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';  //Unexpected strict mode reserved word
// const private = 534;       //Unexpected strict mode reserved word

