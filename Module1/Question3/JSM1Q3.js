let num1 = parseInt(prompt("Please, provide first number of your choice: "));
let num2 = parseInt(prompt("Please, provide second number of your choice: "));
let num3 = parseInt(prompt("Please, provide third number of your choice: "));

sum = num1 + num2 + num3
product = num1 * num2 * num3
average = sum / 3

/*
console.log(sum)
console.log(product)
console.log(average)
*/

document.querySelector('#sum').innerHTML = `The sum is ${sum}.`;
document.querySelector('#product').innerHTML = `The product is ${product}.`;
document.querySelector('#average').innerHTML = `The average is ${average}.`;