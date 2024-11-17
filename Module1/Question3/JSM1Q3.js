//Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to
// the HTML document. (3p)
// remember to convert strings to numbers when adding them together.
let number1 = parseInt(prompt('Enter any integer number.'));
let number2 = parseInt(prompt('Enter any integer number.'));
let number3 = parseInt(prompt('Enter any integer number.'));
let sum = (number1+number2+number3);
let product = (number1*number2*number3);
let average = (sum/3);
console.log(`The sum of the numbers is ${sum}.`);
console.log(`The product of the numbers is ${product}.`);
console.log(`The average of the numbers is ${average}.`);