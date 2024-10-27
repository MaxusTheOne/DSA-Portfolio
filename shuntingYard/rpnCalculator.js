export default function rpnCalculator(arr) {
    const calcStack = [];
 
    while (arr.length > 0) {
        let element = arr.shift();
        if (typeof element === "number") {
            calcStack.push(element);
        } else {
            operation(element, calcStack);
        }
    }
    return calcStack[0];
}
 
function operation(operation, stack) {
    const b = stack.pop();
    const a = stack.pop();
    switch (operation) {
        case "+":
            stack.push(a + b);
            break;
        case "-":
            stack.push(a - b);
            break;
        case "*":
            stack.push(a * b);
            break;
        case "/":
        case "%":
            stack.push(a / b);
            break;
        case "^":
            stack.push(a ** b);
            break;
        default:
            break;
    }
}