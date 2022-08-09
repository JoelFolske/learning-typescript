let userInput: unknown;
let userName: string;

userInput = 5;
userInput='Max';
if(typeof userInput === 'string'){
    userName = userInput;
}
// : never makes it clear that this code block will never return anything.
function generateError(message: string, code: number)/* : never*/ {
    throw {message: message, errorCode: code};
   // while (true) {} is also a function that will never return
}

generateError('An error occurred', 500);

