'use strict';
const answer = confirm("Should I calculate the square root?");
const target = document.querySelector("#target");
if(answer) {
    const num = parseFloat(prompt("Enter a number: "));
    if (num >= 0) {
        target.innerHTML =`The square root of ${num} is ${Math.sqrt(num)}`;
    } else if (num < 0) {
        target.innerHTML = "Sorry, the square root of a negative number is not defined!"
    }
}  else {
        target.innerHTML = "Thanks. The square root will not be calculated.";
}