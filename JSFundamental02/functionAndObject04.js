
//object
const user = {    // object
    username: "hitesh",
    prices: 199
}

//pass object into function
function handleObject(anyobject) {                                                    // use generic object name 
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`); // type safety imp in function and object
}
//handleObject(user)             //Username is hitesh and price is 199


handleObject({                 // passing direct object : output will be same
    username: "sam",
    prices: 399
})
//Username is sam and price is 399