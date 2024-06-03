// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    //console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Looping arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];
for (let i = 0; i < jonas.length; i++) {
    const element = jonas[i];
    //console.log(element, typeof jonas);     //   object
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i])

}
console.log(types);  //[ 'string', 'string', 'number', 'string', 'object', 'boolean' ]

const years = [1991, 1990, 2000, 2002];
const ages = [];

for (let i = 0; i < years.length; i++) {

    ages.push(2037 - years[i]);
}
console.log(ages);              //[ 46, 47, 37, 35 ]

//continue and break
console.log('----only string');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] != 'string') {
        continue;
    }

    console.log(jonas[i], typeof jonas[i]);

}

//=====================================================================

console.log('----Break with number------');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') {
        break;
    }

    console.log(jonas[i], typeof jonas[i]);

}

//======================================================================

// print loop backwards
console.log('---Backwar looping-----');
for (let i = jonas.length - 1; i >= 0; i--) {
    const element = jonas[i];
    console.log(element);

}



//==========================================================

//loop inside loop
console.log('----loop inside loop-----');

for (let exercise = 0; exercise < 3; exercise++) {

    console.log(`---start execise ${exercise}`);
    for (let rep = 0; rep < 6; rep++) {
        console.log(`lifting weight repetition ${rep}`);

    }
}

//===========================================================
//while loop
console.log('------While loop-----------');

let rep = 1;
while (rep <= 5) {
    console.log(`${rep}`);
    rep++;
}

console.log('-----------------------');
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}

//=========================================================================================