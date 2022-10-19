const fs = require("fs"); //import file system library so i can use javascript to work with file system operations

let quote = null;

console.log("Finding a quote...");



const readFilePromise = new Promise((resolve, reject)=>{
    console.log("Im in the promise!")
    fs.readFile("quotes.txt", (error, buffer) => { //buffer represents the contents read from quotes.txt

        console.log("im in the readFile asynchronous function")
        if (error) {
            // throw error;
            console.log("*********")
            reject(error)
        }else{
            const lines = buffer.toString().split("\n"); //convert the buffer info (contents of quotes.txt) to a string, then split into an array like this ["On a long enough timeline, every line of code is obsolete. - Unknown", Deliver yesterday, code today, think tomorrow. - Unknown, ...]
            let randomIndex = Math.floor(Math.random() * lines.length)
            quote = lines[randomIndex]; //set quote to be a random quote
            resolve(quote)
            // console.log(`Your quote is: ${quote}`);

        }
    });
})


// setTimeout(() => {
    //     console.log(readFilePromise) //logs Promise { "Some quote here" }
    
    // }, 1000);
    
    
    //the readFilePromise is the UPS driver arriving at my door
    readFilePromise //only once the readFilePromise variable is either resolved or rejected, then run the .then() or .catch() 
    .then((randomQuote)=>{ //.then gives you back whatever was resolved.
        console.log("Checking my refund on teh order")
        console.log('Random quote is: ', randomQuote)
    })
    .catch((error)=>{
        console.log("error message is", error)
    })
    

console.log("Checking my refund before the ups arrives", readFilePromise) //logs Promise { <pending> }

console.log("Brushing my teeth")
console.log("Learning Javascript")


/* 
Sync code

import fs
quote = null
console.log("Finding a quote...");
console.log(`Your quote is: ${quote}`);

*/


/* 
async code

fs.readFile("quotes.txt", (error, buffer) => {
    if (error) {
        throw error;
    }
    const lines = buffer.toString().split("\n");
    quote = lines[Math.floor(Math.random() * lines.length)];
});


*/