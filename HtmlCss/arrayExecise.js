const populations=[1441,332,234,170];
console.log(populations.length===4);
const percentageOfWolrd4= (population)=> {return (population/7900)*100; }
const percentages=[
    percentageOfWolrd4(populations[0]),
    percentageOfWolrd4(populations[1]),
    percentageOfWolrd4(populations[2]),
    percentageOfWolrd4(populations[3]),
];


console.log(percentages);
//==================================================================
console.log("========Array method===========");

const neighbours=['Srilanka','Bhutan']
neighbours.push('utopia');
console.log(neighbours);  //[ 'Srilanka', 'Bhutan', 'utopia' ]


neighbours.pop('utopia');
console.log(neighbours);   //[ 'Srilanka', 'Bhutan' ]

if (neighbours.includes('Germany') === false) {     //!neighbours.includes('Germany')
    console.log("Probably not a central european country :D");
}

neighbours[neighbours.indexOf('Srilanka')] = 'Republic of Sweden';
console.log(neighbours);                          //[ 'Republic of Sweden', 'Bhutan' ]