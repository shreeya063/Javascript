function isPrime(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

const userInput = parseInt(prompt("Give me an integer: "));
if (isNaN(userInput)) {
    document.querySelector('#target').innerHTML = "Please enter a valid integer.";
} else {
    const result = isPrime(userInput);
    const message = result ? `${userInput} is a prime number.` : `${userInput} is not a prime number.`;
    document.querySelector('#target').innerHTML = message;
}