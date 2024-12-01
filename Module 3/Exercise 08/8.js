document.getElementById('start').addEventListener('click', function () {

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = document.getElementById('operation').value;
        const finalResult = document.getElementById('result');

        if (isNaN(num1) || isNaN(num2)) {
            finalResult.innerHTML = 'Invalid input!';
            return;
        }

        let result;

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;

            case 'sub':
                result = num1 - num2;
                break;

            case 'multi':
                result = num1 * num2;
                break;

            case 'div':
                if (num2 === 0) {
                    result = 'Division not possible by zero';
                } else {
                    result = num1 / num2;
                }
                break;

            default:
                result = 'Invalid operation!';
        }

        finalResult.innerHTML = 'Answer: ' + result;
    });
