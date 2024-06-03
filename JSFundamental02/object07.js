const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: false,
    // calcAge: function (birthyear) { return 2037 - birthyear; } //method (fn expression attached to object)
    // calcAge: function () { return 2037 - this.birthYear; }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} old ${this.job}, and he has ${jonasObject.hasDriverLicense == true ? "a" : "no"} driver's license`;
    }
};

//dot and bracket notation
// by dot we have to use final property name
//by bracket notation we can use computed property name
console.log(jonasObject);             // whole object
console.log(jonasObject.lastName);    //Schmedtmann
console.log(jonasObject['lastName']); //Schmedtmann

const nameKey = 'Name';
console.log(jonasObject['first' + nameKey]);  //jonas //computed property name
// console.log(jonasObject.'first' + nameKey);  //error not allowed

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonasObject.interestedIn);  //undefined bcz interetedIn is property of jonasObject
// console.log(jonasObject[interestedIn]);   // here js we replace interestedIn with actual value of the variable

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

//add key-value pairs into object
jonasObject.location = 'Mumbai';
jonasObject['linkedIn'] = 'yash1997';
console.log(jonasObject);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonasObject.firstName} has a ${jonasObject.friends.length} and his best friend is called ${jonasObject.friends[0]}`);

// console.log(jonasObject.calcAge(1997));  //40
// console.log(jonasObject['calcAge'](1997));  //40
console.log(jonasObject.calcAge());       //46
console.log(jonasObject.age);             //46

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
// console.log(`${jonasObject.firstName} is a ${jonasObject.age} old ${jonasObject.job}, and he has ${jonasObject.hasDriverLicense == true ? "a" : "no"} driver's license`);
// or by creating method and calling from object
console.log(jonasObject.getSummary());

