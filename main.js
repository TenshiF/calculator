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
    return parseFloat(a/b);
}

let firstNum;
let operator;
let secondNum;

function operate (first, op, second) {
    let result;
    switch (op) {
        case '+':
            result = add(first,second);
            break;
        case '-':
            result = subtract(first,second);
            break;
        case '*':
            result = multiply(first,second);
            break;
        case '/':
            result = divide(first,second);
            break;
    }
    return result;
}

console.log(operate(2,'+',3));
console.log(operate(2,'-',3));
console.log(operate(2,'*',3));
console.log(operate(2,'/',3));