
const calcTip = (tip) => {
    if (tip >= 50 && tip <= 300) {
        return tip * 0.15;
    }
    else {
        return tip * 0.20;
    }
}

//calcTip(100);

const bills = [125, 555, 44];

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tip);            //[ 18.75, 111, 8.8 ]

const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(total);         //[ 143.75, 666, 52.8 ]


