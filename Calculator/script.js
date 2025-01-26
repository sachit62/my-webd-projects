const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let currentInput = ''; // Stores the current input for the calculator

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'AC') {
            // Clear the input
            currentInput = '';
            inputBox.value = '0';
        } else if (value === 'DEL') {
            // Delete the last character
            currentInput = currentInput.slice(0, -1);
            inputBox.value = currentInput || '0';
        } else if (value === '=') {
            // Evaluate the input
            try {
                currentInput = eval(currentInput).toString();
                inputBox.value = currentInput;
            } catch (error) {
                inputBox.value = 'Error!'; // Show error if the input is invalid
                currentInput = '';
            }
        } else {
            // Append numbers and operators to the input
            if (currentInput === '0' || inputBox.value === 'Error') {
                currentInput = ''; // Reset if the current value is "0" or "Error"
            }
            currentInput += value;
            inputBox.value = currentInput;
        }
    });
});
