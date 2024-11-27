function even(array) {
    return array.filter(num => num % 2 === 0);
}

let numbersArray = [2,5,6,3,9,8,20];

let evenNumbersArray = even(numbersArray);

console.log('Original array of numbers: ', numbersArray);
console.log('Even numbers in the original array: ', evenNumbersArray);