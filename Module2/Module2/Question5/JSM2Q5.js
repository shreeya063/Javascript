function storeNumbers() {
    let numbers = [];

while (true) {
    let userInput = parseFloat(prompt('Enter numbers of your choice: '));

    if (numbers.includes(userInput)) {
        alert(`Number ${userInput} is entered already. Stopping the operation now!`)
        break;
    }
    numbers.push(userInput);
}
numbers.sort((a, b) => a-b);

console.log('Printing the numbers in ascending order: ');
console.log(numbers);
}
storeNumbers();