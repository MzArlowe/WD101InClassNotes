/*
- Also called Fat Arrow Functions
- They are NOT (function) declarations
- DOT NOT get hoisted
- Two types:
    - Concise Body --> Return is automatic
    - Block Body --> Return is NOT automatic
- A concise way to write function expressions
 */

// CONCISE BODY
// speak('dog'); <-- Error: Example to show it isn't hoisted
let speak = (name) => console.log(`The ${name} goes woof!`);

speak('dog');

let firstName = "Peter";
let lastName = "Parker";

let concatName = (first, last) => `${first} ${last}`;
let fullName = concatName(firstName, lastName);
console.log(fullName)


// BLOCK BODY
// Use {curly bros} to contain the logic
let speakAgain = name => {
    console.log(`The ${name} goes woof! - Line 27 Console.log`);
}

speakAgain('dog');

let concat = (first, last) => {
    return `${first} ${last}`
}

let newFullName = concat(firstName, lastName);
console.log(newFullName);

let x = 27;
let y = 47;

let sum = (num1, num2) => {
    return num1 + num2
}

let returnValue = sum(x, y)
console.log(returnValue);