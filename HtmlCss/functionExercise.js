describeCountry = (country, population,capitalCity)=>{
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry('finland',6,'Helsinki'));

// Finland has 6 million people and its capital city is Helsinki
//===============================================================================================


//regular function
function percentageOfWorld1(population){
     return (population/7900)*100;
}

console.log(percentageOfWorld1(1441));


//Anonymous function
const percentageOfWolrd2 =function(population) {return (population/7900)*100;};
console.log(percentageOfWolrd2(332));

//arrow function
const percentageOfWolrd3= (population)=> {return (population/7900)*100; }
console.log(percentageOfWolrd3(170));

//=============================================================================


console.log("=====Function calling other function==========");
const describepopulation= (population, country)=>{
    // China has 1441 million people, which is about 18.2% of the world'
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world'`
}

console.log(describepopulation(1441,'china'));

//================================================================================================