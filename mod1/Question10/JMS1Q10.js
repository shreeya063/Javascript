const numDice = parseInt(prompt("Enter the number of dice:"));
const diceSum = parseInt(prompt("Enter a sum:"));

const hitLimit = 10000;
let hitNo = 0;

for (let i = 0; i < hitLimit; i++) {
    let sum = 0;
    for (let j = 0; j < numDice; j++) {
        const dice = Math.floor(Math.random() * 6) + 1;
        sum += dice;
        }
        if (sum === diceSum) hitNo ++;
        console.log(sum, diceSum)
    }

const probability = (hitNo/hitLimit) * 100;
document.querySelector('#target').innerHTML = `Probability to get ${diceSum} with ${numDice} is ${probability.toFixed(2)}%.`;