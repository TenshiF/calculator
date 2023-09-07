function add(a,b) {
    return (a + b);
}

function subtract (a,b) {
    return (a-b);
}

function multiply (a,b) {
    return (a*b);
}

function divide (a,b) {
    return parseFloat((a/b).toFixed(3));
}

function operate (first, op, second) {
    let result;
    switch (op) {
        case '+':
            result = add(first,second);
            break;
        case '-':
            result = subtract(first,second);
            break;
        case 'x':
            result = multiply(first,second);
            break;
        case '/':
            result = divide(first,second);
            break;
    }
    return result;
}
let firstNum;
let operator;
let secondNum;

let haveFirstNumber = false;
let haveOperator = false;
let haveSecondNumber = false;

display = document.querySelector('.display');

nButtons = document.querySelectorAll('.number-button');

nButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!haveFirstNumber) {
            display.textContent += button.textContent;
        }
        else if (haveOperator) {
            if (parseInt(display.textContent) == firstNum) {
                display.textContent = button.textContent;
            }
            else {
                display.textContent += button.textContent;
            }
        }
        
    })
})

oButtons = document.querySelectorAll('.operator-button');

oButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!haveFirstNumber) {
            firstNum = parseInt(display.textContent);
            haveFirstNumber = true;
            operator = button.textContent;
            haveOperator = true;
        }
        else {
            secondNum = parseInt(display.textContent);
            firstNum = operate(firstNum,operator,secondNum);
            operator = button.textContent;
            console.log(firstNum);
            display.textContent = firstNum;
        }
        
    })
})

eButton = document.querySelector('.equal-button');
eButton.addEventListener('click', function() {
    if (haveFirstNumber && haveOperator) {
        secondNum = parseInt(display.textContent);
        firstNum = operate(firstNum,operator,secondNum);
        console.log(firstNum);
        display.textContent = firstNum;
    }
})

cButton = document.querySelector('.clear-button');
cButton.addEventListener('click', function() {
    display.textContent = '';
    haveFirstNumber = false;
    haveOperator = false;
})