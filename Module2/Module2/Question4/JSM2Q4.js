let numbers = [];
let userInput;

while (userInput !== 0) {
    userInput = parseInt(prompt('Provide as many numbers as you like(0 to quit): '));
    if(isNaN(userInput) || userInput < 0) {
        console.log('Not valid! Please, enter numbers carefully.');
        continue;
    }
    if(userInput === 0) {
        break;
    }
    numbers.push(userInput)
}

numbers.sort((a, b) => b - a);
console.log('Numbers sorted from the largest to the smallest: ', numbers);