function calculateSquareRoot() {
    if (confirm("Should I calculate the square root?")) {
        let number = prompt("Please enter a number:");
        number = parseFloat(number);

        if (isNaN(number)) {
            document.body.innerHTML = "The input is not a valid number.";
        } else if (number < 0) {
            document.body.innerHTML = "The square root of a negative number is not defined.";
        } else {
            const sqrt = Math.sqrt(number);
            document.body.innerHTML = "The square root of " + number + " is " + sqrt + ".";
        }
    } else {
        document.body.innerHTML = "The square root is not calculated.";
    }
}

calculateSquareRoot()