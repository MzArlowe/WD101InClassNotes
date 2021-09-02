/**
Parameters are values we haven't assigned yet.
Value is passed through to the function using an argument(s).
 
ex:
    function nameFunc(parameter) {
        return....
    }

    nameFunc(argument);
*/

// Parameter naming should reflect the desired data
function myName(name) {
    console.log(`My name is ${name}`);
}

myName("Ben");

function coffeePot(filter) {
    console.log(`I brewed some ${filter}.`)
}

coffeePot("Dark roast");
coffeePot("Medium Roast");
coffeePot("Light Roast");
coffeePot("Tea");

//Known as a Function Reference
let kettle = coffeePot;
// Undefined, until passed the argument for coffeePot
kettle("Green tea");


//Arguments get passed in order of position
function dinner(main, side, drink) {
    console.log(`For dinner, I had ${main} and ${side}. To wash is down, I had a ${drink}.`)
}

//dinner("Coke", "Steak", "Potatoes"); <-- Order doesn't work
dinner("Steak", "Potatoes", "Water");


// Return:
// Return is a variable thats used to capture the return value. When you want to call something specifically.
// Return is the keyword "waiting" to capture it.

function calc(one, two, three) {
    //declaring our new variable & whatever it is (calculation/value holder).
    let total = one + two + three;
    let average = Math.round(total / 3);
    return average;
}

//calc(15, 60, 55); <-- no way to see return
let avgWeight = calc(15, 60, 55);
console.log(`The amount of rice I bought is ${avgWeight} lbs.`);
