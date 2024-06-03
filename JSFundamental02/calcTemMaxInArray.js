
const temp=[12,23,45,455];

calTempMax= (temp)=>{
    let max=temp[0];
    let min=temp[0];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i]>max) {
            max=temp[i];
        }

        if (temp[i]<min) {
            min=temp[i];
        }
        
    }
    console.log(max,min);
    return max-min;
    
}

const amplitude=calTempMax(temp);
console.log(amplitude);

// function shoud receive 2 arrays of temp (merge 2 arrays)
calTempMaxNew= (t1,t2)=>{
    const tmep=t1.concat(t2)

    let max=temp[0];
    let min=temp[0];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i]>max) {
            max=temp[i];
        }

        if (temp[i]<min) {
            min=temp[i];
        }
        
    }
    console.log(max,min);
    return max-min;
    
}

const amplitudeNew=calTempMax([1,23,34], [12,30,45]);
console.log(amplitudeNew);