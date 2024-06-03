
const markObject = {
    'fullName': 'Mark',
    'mass': '78',
    'Height': '1.69',
    calcBMI: function () {
        return `${this.mass / (this.Height * this.Height)}`
    }

};
//BMI = mass / height ** 2

const johnObject = {
    'fullName': 'John',
    'mass': '92',
    'Height': '1.95',
    calcBMI: function () {
        return `${this.mass / (this.Height * this.Height)}`
    }

};

//"John's BMI (28.3) is higher than Mark's (23.9)!
console.log(`${markObject.calcBMI() > johnObject.calcBMI()}` ?
    `${markObject.fullName} BMI (${markObject.calcBMI()}) is higher than ${johnObject.fullName}'s (${johnObject.calcBMI()})` : `${johnObject.fullName} BMI (${johnObject.calcBMI()}) is higher than ${markObject.fullName}'s (${markObject.calcBMI()})`);