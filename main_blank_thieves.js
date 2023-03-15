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
    console.log('its monday...')
    break
  case 2:
    console.log('its tuesday')
    break
  case 3:
    console.log('its wednesday')
    break
  case 4:
    console.log('its thursday')
    break
  case 5:
    console.log('its friday')
    break
  default:
    console.log('its the weekend')
}


// JS Objects (Python Dicts)
const person = {
  name: 'Dylan',
  age: 99999,
  fav_color: 'green'
};

// access data in objects (using bracket or dot notation)
console.log(person['name'])
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

// Solution Here:
console.log(person2['teams'][1]['soccer'][0])
console.log(person2.teams[0].soccer[1])

// // JS Object methods ((Object.keys(object), Object.values(object)
// console.log(Object.keys(person2))
// console.log(Object.values(person2))
console.log(Object.keys(person2))
console.log(Object.values(person2))

// it will loop through object in parentheses, it will return an array
console.log(Object.keys('dylan'))
console.log(Object.values('dylan'))

// // looping an object using for in
// // for in: iterates over keys in object or indices in an array
for(let key in person2){
  console.log(key)
}

for(let idx in ['sj','emma', 'shannon']){
  console.log(idx)
}


// // ---------- Creating a JS Class ----------
class Team {
  constructor(city,name){
    this.city=city
    this.name=name
  }

  printInfo(){
    console.log(`The ${this.name} are from ${this.city}.`)
  } 
}

// // Creating an instance
const team1 = new Team('LA','Lakers')
console.log(team1.printInfo())
  

// Inheriting from a class using 'extends'
class Player extends Team {
  constructor(city, name, playerName){
    super(city,name)
    this.playerName=playerName
  }

  printInfo(){
    return `${this.playerName} plays for the ${this.city} ${this.name}`
  }
}

const player1 = new Player('Phoenix', 'Suns', 'Kevin Durant')
console.log(player1.printInfo())

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
//this is creating a lexiscope
//this is linking 
//Almost always comes up in an interview!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

//returns a pending promise
console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle pending promises
// first way using callbacks: .then(resolved) / .catch(reject)
// handle pending promise with .then(), .catch()
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((response) => {
//   console.log(response)
// })
// .catch((response) => {
//   console.error(response)
// })


// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((response) => {
//   return response.json()
// })
// .then((data)=> {
//   //here is where you'd want to add code to format the data you want from the api
//   console.log(data)
// })
// .catch((response) => {
//   console.error(response)
// })

// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)
// const pokemonData = async () => {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//   const data = await response.json()
//   console.log(data)
// }
// pokemonData()


const pokemonData = async () => {
  try { 
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    console.log(data)
  }
  catch(error){

  }
}
pokemonData()