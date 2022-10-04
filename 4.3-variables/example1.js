//declare variables using let or const. don't use var anymore
'use strict';

//use let for variables that will be reassigned
for(let i= 0; i<10; i++){
   console.log(i)
   const name = i;
   console.log("Name-", name)
}



let happy = false;

console.log("Oohh theres some pizza");

happy = true;


//use const for variables that you don't want reassigned

const topPlayers = ["Lebron", "Michael Jordan", "Serena Williams", "Curry", "Breuder", "Phelps"]

topPlayers.push("Simone Biles");

topPlayers[1] = "Goat"
console.log(topPlayers)






let x = 5
console.log(x)