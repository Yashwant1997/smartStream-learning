
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = [];
const totals = [];

const calcTip = (tip) => {
    if (tip >= 50 && tip <= 300) {
        return tip * 0.15;
    }
    else {
        return tip * 0.20;
    }

}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    const t = tips[i] + bills[i];
    totals.push(t);
    // console.log(totals[i]);
    // console.log(`tip for ${bills[i]} is ${tips[i]} and total is ${t}`);

}


// for (let i = 0; i < bills.length; ++i) {
//     let tip = calcTip(bills[i]);
//     tips.push(tip);
//     let total = bills[i] + tip;
//     totals.push(total);

// }


//============================================================================

console.log("=========Bonus============");
const arr = [1, 2, 3, 4, 5];
const calAvg = (arr) => {
    // console.log(arr)
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

    }
    return sum / arr.length;
}
console.log(calAvg(arr));
console.log(calAvg(totals));
