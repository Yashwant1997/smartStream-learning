const myNewArray = [200, 400, 100, 600]  // array 

// passing array into function
function returnSecondValue(getArray) {
    // return getArray  // return whole array
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  //400
console.log(returnSecondValue([200, 400, 500, 1000])); // pasing arrAY DIRECTLY : 400