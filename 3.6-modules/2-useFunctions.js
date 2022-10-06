
//Import the function from another file
const {findPlantById, sayHello} = require("./1-functions");


let plants = [
  { id: 1, name: "Garden Rocket Arugula" },
  { id: 2, name: "Watercress" },
  { id: 3, name: "Royal Rose Radicchio" },
];

sayHello()

const result = findPlantById(plants, 2);
console.log(result);