function addNumbers(x=0, y=0) {
    if(!x && !y) return "nothing to sum here..."
    if(!x) return y;
    if(!y) return x;

    // if(typeof x !== "number" || typeof y !== "number"){
    //     return "Please input numbers only"
    // }
    let sum = x + y;
    return sum;
  }
  
// let result1 = addNumbers(6,4); //happy path


//if no numbers are given
// let result2 = addNumbers(); //edge case #1 -> function called with no inputs

//if only one number is given
// let result3 = addNumbers(4); //edge case #1 -> function called with no inputs


//if only wrong data types are given
let actualResult1 = addNumbers("hello", {name: "Lebron"}); //edge case #1 -> function called with no inputs
let expectedResult1 = "Please input numbers only"

// console.log(result1)
// console.log(result2)
// console.log(result3)
if(actualResult1 !== expectedResult1){
    console.log("Failed test case: When passing in non-numerical data types it  should return a string")
    console.log(`Expected ${actualResult1} to equal ${expectedResult1}`)
}else{
    console.log("Test passed with non-numerical data types!")
}


