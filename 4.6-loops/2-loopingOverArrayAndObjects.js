let array = [1, 2, 4, 8, 16]; //the values in the array are called elements
//indices    0  1  2  3   4

/* 

//looping using the indices-> best for if you need to manipulate the array

for(let i = 0; i<array.length; i++){
    //if the current value is === 8, it will replace it with the word "kobe!"
    if(array[i] === 8){
        array[i] = "Kobe!"
    }
}


*/

/* 
// for of loop to iterate over an array and get access to the elements only, not the indices

for (let element of array) {
   // Logs 1, 2, 4, 8, 16
  if(element === 8){
    console.log("kobe!");
    
  }else{
    console.log(element);
    
  }
}

console.log(array)
*/

let person1 = {
    name: "Alice",
    location: "Sealand",
    isFun: false
};
/* 
// for - in loop to loop over objects



for (let key in person1) {
    // Logs "name Alice", "location Sealand"
    console.log(key, person1[key]);
}


console.log(person1['location'])
*/




//If i want all the keys of an object into an array you can use Object.keys()

let person1Keys = Object.keys(person1)

//If i want all the values of an object into an array you can use Object.values()


let person1Vals = Object.values(person1)

console.log(person1Keys)
console.log(person1Vals)
