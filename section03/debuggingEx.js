'use strict';
const measureKelvin=function(){
    const measurment={
        type:'temp',
        unit:'celsius',
        //c) fix the bug
        // value:prompt('degree celsius'),
        value:Number(prompt('degree celsius')),
    };

    //find a bug
    console.log(measurment);
    const kelvin= measurment.value+273;
    return kelvin;
}

//identify a bug
console.log(measureKelvin()); //10273 bcz prompt function always returs a string
