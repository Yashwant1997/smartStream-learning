
//type 1
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);   // [ 'Michael', 'Steven', 'Peter' ]
console.log(friends[0]);  //Michael
console.log(friends[2]);  //Peter
console.log(friends.length);  //3
console.log(friends[friends.length - 1]); //Peter
friends[2] = 'jay';
console.log(friends); //[ 'Michael', 'Steven', 'jay' ]

// only primitive values are immutable
//array is not primitive hence we can mutate array even they declared with const but we can not replace whole array
// friends = ['bob', 'Yashwant'];  //TypeError: Assignment to constant variable.

//type 2
const y = new Array(1991, 1984, 2008, 2020);


// 
const firstName = 'Yashwant';
const info = [firstName, 'Patil', 2024 - 1997, 'QA Analyst', friends]
console.log(info);
console.log(info.length); //5
/* 

[
  'Yashwant',
  'Patil',
  27,
  'QA Analyst',
  [ 'Michael', 'Steven', 'jay' ]
]

*/
//==========================================================================

console.log("===Array Excecise====");
const calAvg = (birth) => {
  return 2037 - birth;
}

const years = [1990, 2000, 2005];
const age1 = calAvg(years[0]);
const age2 = calAvg(years[1]);
console.log(age1, age2);          // 47 37
console.log(calAvg(years));       //NaN

const ages = [calAvg(years[0]), calAvg(years[1]), calAvg(years[years.length - 1])]
console.log(ages);            // [ 47, 37, 32 ]


//==========================================================================================

console.log("====Array operations Methods========");
const friends1 = ['Michael', 'Steven', 'Peter'];

// Add elements
// friends1.push('Jay');     // add element at the end 
// console.log(friends1);   // [ 'Michael', 'Steven', 'Peter', 'Jay' ]
const newLength = friends1.push('Jay');  // push function returns a value of new length of array
console.log(newLength);     //4

friends1.unshift('John');
console.log(friends1);    //[ 'John', 'Michael', 'Steven','Peter', 'jay' ]


// Remove elements
friends1.pop(); // Last
console.log(friends1);   //[ 'John', 'Michael', 'Steven','Peter']

const popped = friends1.pop();  // pop return last removed element name
console.log(popped);         //Peter

friends1.shift(); // First
console.log(friends1); //[ 'Michael', 'Steven' ]

console.log(friends1.indexOf('Steven'));  //1
console.log(friends1.indexOf('Bob'));     //-1

console.log(friends1.includes('Steven'));  //T
console.log(friends1.includes('Bob'));     //F

friends1.push(23);
console.log(friends1);                //[ 'Michael', 'Steven', 23 ]]
console.log(friends1.includes('23'));  //F bcz of strict equality checks
console.log(friends1.includes(23));     //T


//======================================================================================

console.log("======sort an array======");
const a = [12, 3, 5, 25, 4];
console.log(a.sort((a, b) => a - b));

//==============================================================================

console.log("=====Slice() and Splice ()======");

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const subset = fruits.slice(1, 4);   // end is optional
console.log(subset); // Outputs: ['banana', 'cherry']
console.log(fruits); // Outputs: ['apple', 'banana', 'cherry', 'date', 'elderberry']

const aa = [1, 2, 3, 4, 5];
const aaa = aa.splice(1, 3);  //start and end both include
console.log(aa);    //[1,5]
console.log(aaa);   //[2,3,4]

//array.splice(start, deleteCount, item1, item2, ...)
aa.splice(1, 0, "Yash");   //Inserts 'Yash' at index 1
console.log(aa);           //[ 1, 'Yash', 5 ]

aa.splice(2, 1, true);     // replace 5 with true
console.log(aa);           //[ 1, 'Yash', true ]

aa.splice(2, 0, false);     // insert false at index 2
console.log(aa);           //[ 1, 'Yash', false, true ]

