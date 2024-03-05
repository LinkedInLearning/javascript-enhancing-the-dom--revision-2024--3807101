document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const calculationResult = document.getElementById('calculationResult');

    calculateButton.addEventListener('click', () => {
        let number1 = document.getElementById('number1').value;
        let number2 = document.getElementById('number2').value;

        let result = parseInt(number1) + parseInt(number2);
        calculationResult.textContent = `Result: ${isNaN(result) ? 'Invalid input' : result}`;
    });
});
