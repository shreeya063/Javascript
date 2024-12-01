document.getElementById('start').addEventListener('click', function () {
    const calculation = document.getElementById('calculation').value.trim();
    const finalResult = document.getElementById('result');

    if (calculation.includes('+')) {
        const splitString = calculation.split('+');
        if (splitString.length === 2) {
            const num1 = parseInt(splitString[0]);
            const num2 = parseInt(splitString[1]);
            if (isNaN(num1) || isNaN(num2)) {
                finalResult.innerHTML = 'Invalid input';
                return;
            }
            finalResult.innerHTML = `Answer: ${num1 + num2}`;
        }
    } else if (calculation.includes('-')) {
        const splitString = calculation.split('-');
        if (splitString.length === 2) {
            const num1 = parseInt(splitString[0]);
            const num2 = parseInt(splitString[1]);
            if (isNaN(num1) || isNaN(num2)) {
                finalResult.innerHTML = 'Invalid input';
                return;
            }
            finalResult.innerHTML = `Answer: ${num1 - num2}`;
        }
    } else if (calculation.includes('*')) {
        const splitString = calculation.split('*');
        if (splitString.length === 2) {
            const num1 = parseInt(splitString[0]);
            const num2 = parseInt(splitString[1]);
            if (isNaN(num1) || isNaN(num2)) {
                finalResult.innerHTML = 'Invalid input';
                return;
            }
            finalResult.innerHTML = `Answer: ${num1 * num2}`;
        }
    } else if (calculation.includes('/')) {
        const splitString = calculation.split('/');
        if (splitString.length === 2) {
            const num1 = parseInt(splitString[0]);
            const num2 = parseInt(splitString[1]);
            if (isNaN(num1) || isNaN(num2) || num2 === 0) {
                finalResult.innerHTML = 'Invalid input or division by zero not possible';
                return;
            }
            finalResult.innerHTML = `Answer: ${Math.floor(num1 / num2)}`;
        }
    } else {
        finalResult.innerHTML = 'Invalid operation! Please use +, -, * or /.';
    }
});