/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

console.log('CODING CHALLENGE 1');

function getBMI(kilograms, meters) {
    return kilograms / (meters * meters);
}

const kilogramsMark = 100.0;
const kilogramsJohn = 80.0;
const metersMark = 2.0;
const metersJohn = 1.8;

const bmiMark = getBMI(kilogramsMark, metersMark);
const bmiJohn = getBMI(kilogramsJohn, metersJohn);
console.log('bmiMark', bmiMark);
console.log('bmiJohn', bmiJohn);

const markHigherBmiThanMark = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBmiThanMark);

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

console.log('CODING CHALLENGE 2');

const getAverageScore = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};

//const averageJohn = getAverageScore(100, 100, 100);
//const averageMike = getAverageScore(100, 100, 100);
//const averageMary = getAverageScore(100, 100, 100);
const averageJohn = getAverageScore(89, 120, 103);
const averageMike = getAverageScore(116, 94, 123);
const averageMary = getAverageScore(97, 134, 105);
//console.log(averageJohn, averageMike, averageMary);

if (averageJohn > averageMike) {
    console.log('John\'s team average (' + averageJohn + ') is higher than Mike\'s team average (' + averageMike + ').');
} else if (averageMike > averageJohn) {
    console.log('Mike\'s team average (' + averageMike + ') is higher than John\'s team average (' + averageJohn + ').');
} else {
    console.log('John\'s team average (' + averageJohn + ') is the same as Mike\'s team average (' + averageMike + ').');
}

const printOneWinner = (winnerName, winnerAverage, otherName1, otherAverage1, otherName2, otherAverage2) => {
    console.log(winnerName + '\'s team average (' + winnerAverage + ') is higher than ' + otherName1 + '\'s team average (' + otherAverage1 + ') and ' + otherName2 + '\'s team average (' + otherAverage2 + ').');
}

const printTwoWinners = (winnerName1, winnerAverage1, winnerName2, winnerAverage2, otherName, otherAverage) => {
    console.log(winnerName1 + '\'s team average (' + winnerAverage1 + ') and ' + winnerName2 + '\'s team average (' + winnerAverage2 + ') is higher than ' + otherName + '\'s team average (' + otherAverage + ').');
}

const printThreeWayTie = (name1, average1, name2, average2, name3, average3) => {
    console.log(name1 + '\'s team average (' + average1 + '), ' + name2 + '\'s team average (' + average2 + ') and ' + name3 + '\'s team average (' + average3 + ') are all the same.');
}

if (averageJohn > averageMike && averageJohn > averageMary) {
    printOneWinner('John', averageJohn, 'Mike', averageMike, 'Mary', averageMary);
} else if (averageMike > averageJohn && averageMike > averageMary) {
    printOneWinner('Mike', averageMike, 'John', averageJohn, 'Mary', averageMary);
} else if (averageMary > averageJohn && averageMary > averageMike) {
    printOneWinner('Mary', averageMary, 'John', averageJohn, 'Mike', averageMike);
} else if (averageJohn == averageMike && averageJohn == averageMary) {
    printThreeWayTie('John', averageJohn, 'Mike', averageMike, 'Mary', averageMary);
} else if (averageJohn == averageMike) {
    printTwoWinners('John', averageJohn, 'Mike', averageMike, 'Mary', averageMary);
} else if (averageJohn == averageMary) {
    printTwoWinners('John', averageJohn, 'Mary', averageMary, 'Mike', averageMike);
} else /* averageMike == averageMary */ {
    printTwoWinners('Mike', averageMike, 'Mary', averageMary, 'John', averageJohn);
}

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

console.log('CODING CHALLENGE 3');

const preTipBills = [124, 48, 268];
const tips = [];
const totalBills = new Array();

for (let i = 0; i < preTipBills.length; i++) {
    const preTipBill = preTipBills[i];
    let tipPercentage = 0;
    if (preTipBill < 50) {
        tipPercentage = .20;
    } else if (preTipBill < 200) {
        tipPercentage = .15;
    } else {
        tipPercentage = .10;
    }
    tips[i] = preTipBill * tipPercentage;
    totalBills.push(preTipBill + tips[i]);
}
console.log(tips, totalBills);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
console.log('CODING CHALLENGE 4');

const mark = {
    name: 'Mark Spitz',
    kilograms: 100.0,
    meters: 2.0,
    setBMI: function() {
        this.bmi = this.kilograms / (this.meters * this.meters);
        return this.bmi;
    },
};

const john = {
    name: 'John Naber',
    kilograms: 80.0,
    meters: 1.8,
    setBMI: function() {
        this.bmi = this.kilograms / (this.meters * this.meters);
        return this.bmi;
    },
};

mark.setBMI();
john.setBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(mark.name + ' (' + mark.bmi + ') has a higher BMI than ' + john.name + ' (' + john.bmi + ')');
} else if (john.bmi > mark.bmi) {
    console.log(john.name + ' (' + john.bmi + ') has a higher BMI than ' + mark.name + ' (' + mark.bmi + ')');
} else {
    console.log(mark.name + ' (' + mark.bmi + ') has the same BMI as ' + john.name + ' (' + john.bmi + ')');
}

/*****************************
* CODING CHALLENGE 5
*/

console.log('CODING CHALLENGE 5');

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

const naber = {
    name: 'John Naber',
    preTipBills: [124, 48, 268, 180, 42],
    tips: [],
    totalBills: [],
    setTipsAndTotalBillsMethod: function() {
        tipTotal = 0;
        for (let i = 0; i < this.preTipBills.length; i++) {
            const preTipBill = this.preTipBills[i];
            let tipPercentage = 0;
            if (preTipBill < 50) {
                tipPercentage = .20;
            } else if (preTipBill < 200) {
                tipPercentage = .15;
            } else {
                tipPercentage = .10;
            }
            this.tips[i] = preTipBill * tipPercentage;
            tipTotal += this.tips[i];
            this.totalBills[i] = preTipBill + this.tips[i];
        }
        this.tipAverage = tipTotal / this.preTipBills.length;
        console.log(this.preTipBills, this.tips, this.totalBills, this.tipAverage);
    },
};

naber.setTipsAndTotalBillsMethod();

function setTipsAndTotalBillsFunction(tipper) {
    tipTotal = 0;
    for (let i = 0; i < tipper.preTipBills.length; i++) {
        const preTipBill = tipper.preTipBills[i];
        let tipPercentage = 0;
        if (preTipBill < 100) {
            tipPercentage = .20;
        } else if (preTipBill < 300) {
            tipPercentage = .10;
        } else {
            tipPercentage = .25;
        }
        tipper.tips[i] = preTipBill * tipPercentage;
        tipTotal += tipper.tips[i];
        tipper.totalBills[i] = preTipBill + tipper.tips[i];
    }
    tipper.tipAverage = tipTotal / tipper.preTipBills.length;
    console.log(tipper.preTipBills, tipper.tips, tipper.totalBills, tipper.tipAverage);
}

const spitz = {
    name: 'Mark Spitz',
    preTipBills: [77, 375, 110, 45],
    tips: [],
    totalBills: [],
};

setTipsAndTotalBillsFunction(spitz);

if (naber.tipAverage > spitz.tipAverage) {
    console.log(naber.name + ' (' + naber.tipAverage + ') paid a higher average tip than ' + spitz.name + ' (' + spitz.tipAverage + ')');
} else if (spitz.tipAverage > naber.tipAverage) {
    console.log(spitz.name + ' (' + spitz.tipAverage + ') paid a higher average tip than ' + naber.name + ' (' + naber.tipAverage + ')');
} else {
    console.log(naber.name + ' (' + naber.tipAverage + ') paid the same average tip as ' + spitz.name + ' (' + spitz.tipAverage + ')');
}
