function add(n1: number, n2: number) {
    return n1 + n2;
}

// void means this function doesn't have a return statement
// does not return anything
function printResult(num: number): void {
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8))

addAndHandle(10, 20, (result) => {
    console.log(result);
})

// let someValue: undefined;
// if you place undefined instead of void,
// javascript will expect ypu to have a return statement
// undefined is a type in typescript
//