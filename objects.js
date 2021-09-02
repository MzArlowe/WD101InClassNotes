// Objects notes 
/*
Objects are JS data types that hold key and value pairs of data.
Objects can hold numbers, strings, booleans, arrays, and other objects etc.
*/
//Curly brackets denote an object - objects REQUIRE two main attributes: *key and *value
let netflix = {
    id: 1, 
    name: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot',
            },
            {   episode: 2,
                episodeName: 'Diversity Day'
            },
            {   episode: 3,
                episodeName: 'Health Care'
            },
            {   episode: 4,
                episodeName: 'The Alliance'
            },
            {   episode: 5,
                episodeName: 'BasketBalls'
            },]
        }
    },
    season2: {},
    season3: {}
};

//Use dot and bracket notation. Episode name of episode 2

console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName)
// Kate is looking up the below console.log due to it being a bit confusing. How to find index of item in a nest array of objects
// console.log(netflix.season1.seasonInfo.episodeInfo.indexOf(ep => ep.episodeName.startWith('D')))

// *JSON Object 

/*
- JSON - JavaScript Object Notation
- derived from JSON syntax, JSON format is text only
- exists as a string.
    - useful when fetching data from a server(back-end application or logic). 
    - Needs to be converted to a native JavaScript Object if we want to access the data.
*/


// Bracket Notation / Property Accessors
// Property Accessors: dot notation (.), bracket notation []
// Created a variable that stores an empty object
let superHero = {};

//Target Object as a whole w/ bracket notation, inject or give a key which is a string.
superHero['name'] = 'Spider-man';
// Assigning a second key and value
superHero['alterEgo'] = 'Peter Parker';

console.log(superHero);
console.log(superHero['name'], superHero['alterEgo'])
console.log(superHero.name)

// All keys in an objects are strings even though they aren't wrapped in quotes when represented in the object itself. 

let test = Object.keys(superHero);
console.log(test)
console.log(typeof test[0]);

let spacedObject = {
    "Spaces Here": true,
    noSpaces: true
}
// Square brackets is good when we may not be able to use dot notation, BUT is not common.
console.log(spacedObject.noSpaces);
console.log(spacedObject["Spaces Here"]);