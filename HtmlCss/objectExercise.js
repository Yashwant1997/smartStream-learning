const myCountry={
    // country, capital, language, population and neighbours
    country:'India',
    capital:'New Delhi',
    language:'Sanskrit',
    population:140,
    neighbours:['srilanka','Bhutan'],
};

// 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

console.log(`${myCountry.country} has a ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} eighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population+=2;

console.log(myCountry);

myCountry['population'] -=2;
console.log(myCountry);

//===============================================================================

console.log("=====================================");
const myCountry1={
    // country, capital, language, population and neighbours
    country:'India',
    capital:'New Delhi',
    language:'Sanskrit',
    population:140,
    neighbours:['srilanka','Bhutan'],
    describe: function(){              //method
        console.log(`${this.country} has a ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function(){
        this.isLand=this.neighbours.length === 0? true:false;
        // this.isIsland = !Boolean(this.neighbours.length);
    }
    
};



myCountry1.describe();

myCountry1.checkIsland();
console.log(myCountry1.isLand)  // false

console.log(myCountry1);