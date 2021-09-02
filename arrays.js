/* 
ex:
    let array = [value, value, value, value];
Index position:    0      1      2      3
*/

let arr = ['first value', 'second value', 'third value']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// .length with an array:
console.log(arr.length);
console.log(arr[arr.length - 1]);

// Using an array constructor, uses new keyword
let test = new Array();
console.log(test)
console.log(test.length)

//created an empty array w/ 3 empty items
let test2 = new Array(3);
console.log(test2);
console.log(test2.length);

//We target a specific value/index/key, we assigned it a proper value
test2[0] ='New Value';
console.log(test2);

// Initializing an array with values
let nums = Array(1, 2, 3, 4, 5);
console.log(nums);
//console.log(typeof nums);

// let strings = 

//METHODS***************

//Methods are a way to pull out and / or manipulate the data within our arrays.

//forEach(), method runs a function over each index of our array

let boardGames = [ 'Scrabble', 'Chess', 'Monopoly', 'DnD', 'Clue' ];

for(i = 0; i < boardGames.length; i++) {
    console.log(boardGames[i]);
};

//Concise Body Array Function
boardGames.forEach(game => console.log(`Concise: ${game}`))

// Block Body Arrow Function
boardGames.forEach(game => {
    console.log(`Block: ${game}`)
});

//Anonymous Function
boardGames.forEach(function(game){
    console.log(`anon: ${game}`)
});

//Various other methods:
//Array.length -> returns the number of elements in the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.length);

//Array.push() -> adds an element to the end of the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.push('mint');
console.log(shoppingList);

// Array.pop() -> removes the last element of the array and returns that element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.pop()
console.log(shoppingList);

// Array.unshift() -> adds a new element at the beginning of the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.unshift('salt');
console.log(shoppingList)

// Array.shift -> removes the first element in the array, and returns that element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.shift();
console.log(shoppingList)

// Array.map -> transforms the element in the original array by calling the given function once for each element in the array

let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.map(item => item.toUpperCase()))

// Array.filter() -> creates a new array with only the elements that pass the test in a given function
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.filter(item => item.startsWith('l')))

// Array.find() -> return the first element in the array that passes a test given as a function
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.find(item => item.startsWith('l')));

// Array.reduce() -> executes a given function for each value of the array and returns a single value
let cost = [2.00, 3.00, 4.00, 13.00];
console.log(cost.reduce((total, cost) => total + cost))

// Array.includes() -> determines wether an array has a specific element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.includes('limes'))
console.log(shoppingList.includes('salt'))

// Array.indexOf() -> search the array for a specific element and returns it's first index.
// Returns -1 when element is not found
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.indexOf('limes'));
console.log(shoppingList.indexOf('salt'));

// Array.findIndex() -> returns the index of the first element in an array that passes the test given in a function. Returns -1 when element is not found
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.findIndex(item => item.startsWith('g')));

// Array.every -> checks if all elements in an array pass a test given as a function. If there is one element that returns a false value, the function returns false and does not check the rest of the element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.every(item => item.length > 7))

// Array.concat -> merge two or more arrays, and returns a new arrays
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
let secondList = ['mint', 'salt', 'simple syrup'];

console.log(shoppingList.concat(secondList));

// Array.slice() -> selects a part of an array, and returns a new array. It selects the element starting at the provided 
//start argunment, and ends at, but does *NOT* include the provided end argument
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.slice(1, 4))

// Array.splice -> add/removes elements of an array and returns the new elements. First Argument takes in an integer that specifies 
//that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. 
//Optional third argument takes in the new elements to be added to the array.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
//shoppingList.splice(2, 2);
console.log(shoppingList);

shoppingList.splice(2, 1, 'cherries');
console.log(shoppingList);

// Array.sort -> sorts the item in an array. The sort order can be either alphabetic or numeric, and either ascending or descending. By default, sort() orders the
//vales as strings in alphabetical ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending order.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
// want to sort by descending order
console.log(costs.sort((a, b) => b - a));
// want to sort by ascending order
console.log(costs.sort((a, b) => a - b));

// Array.reverse() -> reverses the order of elements in an array.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.reverse())//does not need any value in the curvy brackets

//Array.toString() -> converts an array into a string
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.toString());

//Array.join() -> converts the elements of an array into a string. Can accept an optional parameter, "separator", 
//which indicates how the elements will be separated. The default separator is a ","
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.join("! and "))
console.log(shoppingList.join()) //shows the default ","
console.log(shoppingList.join(" ")) // will accept simple spaces

// Lastly, and ES6 features: the spread operator. The spread operator, is indicated by these 3 dots"..." 
//and expands the contents of the array and takes it out of the array structure
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(...shoppingList)