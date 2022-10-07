/*
1. 

Given an array of Food items, print each item using forEach
["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"]

*/

let foods = ["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"]

// foods.forEach((food, idx)=>{
//   console.log(food)
// })



/*
2. use foreach() to loop through an array of objects
[
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "7",
    moneyEarnedFromRapping: -100
  }
];

*/
let freeStyleArtists = [
  {
    name: "Drake",
    fireLevel: 10,
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: 10,
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: 7,
    moneyEarnedFromRapping: -100
  }
];



// freeStyleArtists.forEach((rapper, idx)=>{
//   console.log(`Rapper name: ${rapper.name} spits some hot fire at fire level ${rapper.fireLevel} at index number ${idx}`)
// })





/*
3. use forEach to add up the fireLevels of the artists above and give back the totalfire and averageFire

*/

let totalFire = 0;

// for(let i = 0; i<freeStyleArtists.length; i++){
//   let rapperObj = freeStyleArtists[i]
//   totalFire += rapperObj.fireLevel;
// }

freeStyleArtists.forEach((rapperObj, idx)=>{
  totalFire += rapperObj.fireLevel
})

console.log(totalFire)
let averageFire = totalFire/freeStyleArtists.length
console.log(averageFire)

/*

4. use forEach to build a statement from given data above "My top rappers list are: Drake, Lupe Fiasco, Rob D, and they are all fuego.

*/

let resultString = "My top rappers list are: ";

freeStyleArtists.forEach((rapperObj, idx)=>{
  // resultString+= rapperObj.name + ", "
  resultString+= `${rapperObj.name}, `
})

resultString += "and they are all fuego."

// console.log(resultString)



/*

5. use forEach to log the moneyEarnedFromRapping for each artist above and format using the dollar sign to show amount in dollars

*/

function formatMoneyToDollars(amount){
  return `$${amount}`
}


freeStyleArtists.forEach((rapperObj, idx)=>{
  console.log(formatMoneyToDollars(rapperObj.moneyEarnedFromRapping))
})
