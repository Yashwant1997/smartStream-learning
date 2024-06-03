function printForecast(arr){
    //"... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
    let str='';
    for (let i = 0; i <arr.length; i++) {
        // console.log(`...${arr[i]} in ${i} days`);
        
        str= str+ `...${arr[i]} in ${i+1} days`;
    }
    console.log(str);


}

printForecast([17, 21, 23])