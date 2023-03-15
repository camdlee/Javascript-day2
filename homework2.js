//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFoods(dict){
    // we want to parse through the dict and
    // display 'Deep Dish', 'South Side Thin Crust','Anything..' and so forth
    console.log("This person's favorite food dishes are:")
    // let's loop through the dictionary for key value pairs
    for(let key in dict){
        //console.log(key)
        // with above, we'd just get 'pizza, tacos, burgers, ice cream, shakes
        // but does not differentiate between data types
        // using if statements for different data types
        // if string we can just console.log that
        if (typeof dict[key] == 'string'){
            console.log(`${dict[key]}`)
        }// now if the data type is array we need to loop through array
        else if (typeof dict[key] == 'array'){
            // for loop through array
            for(let i in dict[key]){
                console.log(i)
            }
        } // lastly if the data type if a dictionary we need to parse through that
        else if(typeof dict[key] == 'object'){
            //loop through dict
            for(let subKey in dict[key]){
                // return values
                console.log(`${dict[key][subKey]}`)
            }
            /// why isn't the dictionary loop working?
        }
    }
}

// favFoods(person3)

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person {
    constructor(name, age){
        this.name=name
        this.age=Number(age)
    }
    //method normally
            // // printInfo method
            // printInfo(){
            //     console.log(`${this.name} is ${this.age} years old.`)
            // }
            // // increment age by 1 method
            // addyear(){
            //     this.age += 1
            //     console.log(`${this.name} just had a birthday and is now ${this.age} years old`)
            // }
    //arrow function
    printInfo = () => {
        return `${this.name} is ${this.age} years old.`
    }
    addyear = () =>{
        this.age += 1
        return `${this.name} just had a birthday and is now ${this.age} years old.`
    }
    addAge = (years) =>{
        this.age += years
        return `We went forward in time and ${this.name} is now ${this.age} years old.`
    }

}

//---------------- CHECKING CLASS ----------------
// const dylan = new Person('Dylan','28')
// console.log(dylan.printInfo())
// console.log(dylan.addyear())
// console.log(dylan.addyear())
// console.log(dylan.addyear())
// // ///I hope you're happy with your age
// const cameron = new Person('Cameron', '25')
// console.log(cameron.printInfo())
// console.log(cameron.addAge(5))



// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/





//--------------------------------CODE WARS QUESTIONS----------------------------
//1.To find the volume (centimeters cubed) of a cuboid you use the formula:
// volume = Length * Width * Height
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
// Note: side will be an integer

// function cubeChecker(volume, side){
//     //formula to volume is v = length * width * height
//     // for cube volume = side**3
//     if (volume <= 0){
//         return false
//     }
//     else if(side <= 0){
//         return false
//     }
//     else{
//         if (side**3 == volume){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }

// cubeChecker(27,3)



// //2.You are given two interior angles (in degrees) of a triangle.
// // Write a function to return the 3rd.
// // Note: only positive integers will be tested.

// function otherAngle(a,b){
//     return 180-a-b
// }


//2. Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example:[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// function grow(x){
//     result = 1
//     for(let i in x){
//         result = result*x[i]
//     }
//     console.log(result)
// }

// grow([1,2,3,4])