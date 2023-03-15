// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/

const day = new Date().getDay()
console.log(day)

switch(day){
    case 1:
        console.log('its monday....')
        break;
    case 2:
        console.log('its tuesssdaaaay!')
        break;
    case 3:
        console.log('Wednesday, middle of the week!')
        break;
    case 4:
        console.log('Thursday, one day until Friday!')
        break;
    case 5:
        console.log('ITS FRIDAY!')
        break;
    default:
        console.log('ITS THE WEEKEND BABY!')
}

// Objects (Python Dictionaries)
const person = {
    'name': 'Dylan',
    'age': 99999,
    'fav_color': 'green'
}

// access data in objects
console.log(person['fav_color'])
console.log(person.fav_color)

// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

  // Solution here:


// JS Object methods: ((Object.keys(object), Object.values(object))
console.log(Object.keys(person2))
console.log(Object.values(person2))

// looping an object using for in
// for in: iterates over keys in object or indices in an array
for(let key in person2){
    console.log(person2[key])
}

// ---------- Creating a JS Class ----------
class Team {
    // constructor
    constructor(city, name){
        this.city = city
        this.name = name
    }

    // class methods (We don't have to pass in 'this' inside each method like python 'self)
    printInfo() {
        console.log(`The ${this.name} are from ${this.city}`)
    }
}

// Inheriting from a class using 'extends'
class Player extends Team {
    constructor(city, name, playerName){
        super(city, name)
        this.playerName = playerName
    }

    printInfo(){
        console.log(`${this.playerName} plays for the ${this.city} ${this.name}`)
    }
}

const player1 = new Player('Phoenix', 'Suns', 'Kevin Durant')
player1.printInfo()

// ---------- JS Closures ----------

function a(){
    let grandpa = 'grandpa'
    return function b(){
        let father = 'father'
        return function c(){
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

console.log(a()()())

// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)

// handle pending promise with .then(), .catch()
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => {
    console.log(response)
})
.catch((response) => {
    console.error(response)
})

// viewing our data if promise resolved: 200 status code
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => {
    return response.json() // converting a json returns a pending promise
})
.then((data) => {
    console.log(data)
})

// Second way: Using async/await (ES6)
const pokemonData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}

pokemonData()