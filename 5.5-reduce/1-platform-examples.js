/* 
Reduce method allows us to accumulate some data for every element in an array

*/

const areas = [768, 1004.2, 433.1];


// let result = 1000;

// for (let i = 0; i < areas.length; i++) {
//   result += areas[i];
// }
// console.log(result); //> 2205.3

let sum = areas.reduce((result, element, indexNum)=>{
    return result + element //the return value gets accumulated to the first parameter in .reduce() -> which in this case is "result"
},0) //the result parameter starts off as this 0

console.log(sum)