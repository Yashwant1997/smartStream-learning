
const calAvg = (num1, num2, num3) => {

    const avg = (num1 + num2 + num3) / 3;
    return avg;
}

//console.log(calAvg(10, 20, 30));                     //20

let avgDolphineData = calAvg(44, 23, 71);                     //46
let avgKolasData = calAvg(65, 54, 49);                        //56




const checkWinner = (avgeraDolphine, avgeraKolas) => {
    if (avgeraDolphine >= 2 * avgeraKolas) {
        console.log("Dolphine team wins");
    }
    else if (avgeraKolas >= 2 * avgeraDolphine) {
        console.log("Kola team wins");
    }
    else {
        console.log("No one wins");
    }
}
checkWinner(avgDolphineData, avgKolasData);
avgDolphineData = calAvg(85, 54, 41);
avgKolasData = calAvg(23, 34, 27);
checkWinner(avgDolphineData, avgKolasData);