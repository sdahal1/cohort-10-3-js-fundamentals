//primitive data type- strings, numbers, booleans, null, undefined
let title = "Mort"; 

//make a copy of title using another vairable

let anothaTitle = title; //makes a actualy copy b/c its primitive data type

anothaTitle += " The Short"

// console.log(anothaTitle)
// console.log(title)



//reference data types -> arrays, objects

let person1 = {
    firstname: "Bob",
    lastname: "Marley"
}


//making a copy by creating a variable that points to person1 DOES NOT MAKE A COPY! IT REFERENCES THE ORIGINIAL

// let person2 = person1;

// person2.firstname = "Damian"

// console.log(person1, person2)


//to make an actual copy of an object or array, you need to use the spread operator

let person2 = {...person1};

person2.firstname = "Damian"

console.log(person1, person2)



const books = ["Mort", "Sourcery", "Equal Rites"];

//make an actual copy of books array using spread operator (...)
const booksCopy  = [...books]

booksCopy.push("Think and grow rich");

// console.log(books, booksCopy)