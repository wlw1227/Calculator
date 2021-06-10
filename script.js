// VARIABLES // 
const digits = document.querySelector('.numbers');
const number = digits.querySelectorAll('.number');
const display = document.querySelector('.display');
const operations = document.querySelector('.operators');
const operators = document.querySelectorAll('.operator');
const newOperandText = document.querySelector('.new-operand');
const oldOperandText = document.querySelector('.old-operand');
const equalsButton = document.querySelector('#equals');     
const clearButton = document.querySelector('#clear');
const addition = document.querySelector('#plus');
const subtraction = document.querySelector('#minus'); 
const multiplication = document.querySelector('#multiply');
const division = document.querySelector('#divide');

let newOperand;
let oldOperand;
let operator;
let answer;

// EVENT LISTENERS // 

// Triggers displayNewOperand and ClearAnswer to input new number on display
number.forEach(button => button.addEventListener('click', () => {
    displayNewOperand(button);
    clearAnswer();
}));

// Inputs chosen operator into equation, calculating two original operands if operations are done in succession without pressing equals, also moves a previous answer to the oldOperand spot if using it in a new operation
operators.forEach(button => button.addEventListener('click', () => { 
    if (newOperandText.textContent != '' && oldOperandText.textContent != '') {
        calculate();
        newOperand = answer;
        clearAnswer();
        declareOperator(button);
    } else if (answer != undefined) {
        newOperand = answer;
        clearAnswer();
        declareOperator(button);
    } else {
        declareOperator(button);
    }
}))

// Appends '+' sign to oldOperandText text content
addition.addEventListener('click', () => {
    oldOperandText.textContent = oldOperand + '+';
})

// Appends '-' sign to oldOperandText text content
subtraction.addEventListener('click', () => {
    oldOperandText.textContent = oldOperand + '-';
})

// Appends 'x' sign to oldOperandText text content
multiplication.addEventListener('click', () => {
    oldOperandText.textContent = oldOperand + 'x';
})

// Appends '/' sign to oldOperandText text content
division.addEventListener('click', () => {
    oldOperandText.textContent = oldOperand + '/';
})

// Triggers calculate function
equalsButton.addEventListener('click', () => {
    calculate();
})

// Triggers clear function
clearButton.addEventListener('click', () => {
    clear();
})

// FUNCTIONS // 

// Displays button text, appending it the previous text and assigns text to newOperand variable
function displayNewOperand (button) {
    newOperandText.textContent += button.textContent;
    newOperand = newOperandText.textContent;
}

// Deletes answer to previous operation
function clearAnswer() {
    if (answer != undefined) {
        answer = undefined;
        newOperandText.textContent = '';
    }
}

// Declares oeprator to be used in calculation function, reassigns newOperand to oldOperand to make way for another input
function declareOperator(button) {
    oldOperandText.textContent = newOperand;
    oldOperand = oldOperandText.textContent;
    newOperandText.textContent = '';
    operator = button.textContent;
}

// Requires both operands to run. 
// Turns operands into floats and uses previous declared operator to calculate answer. Answer then replaces newOperand in case further calculation is wanted
function calculate() {
    if(oldOperandText.textContent = '') return;
    const oldO = parseFloat(oldOperand);
    const newO = parseFloat(newOperand);
    switch (operator) {
        case '+':
            answer = oldO + newO;
            newOperandText.textContent = answer;
            oldOperandText.textContent = '';
            break;
        case '-':
            answer = oldO - newO;
            newOperandText.textContent = answer;
            oldOperandText.textContent = '';
            break;
        case 'x':
            answer = oldO * newO
            newOperandText.textContent = answer;
            oldOperandText.textContent = '';
            break;
        case '/':
            answer = oldO / newO
            if(answer == 'Infinity') {
                alert('No, no, no, no, there\'s none of that dividing by zero crap here. Try again.')
                answer = undefined;
            }
            newOperandText.textContent = answer;
            oldOperandText.textContent = '';
            break;
    }
}

// Deletes both operands
function clear() {
    oldOperandText.textContent = '';
    newOperandText.textContent = '';
}


