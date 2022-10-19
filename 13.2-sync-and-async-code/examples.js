// console.log(1)


// setTimeout(()=>{
//     console.log("3")
// }, 0)

// setTimeout(()=>{
//     console.log("2")
// }, 0)


// console.log("4");





/* 
Sync code process

console.log(1)
console.log(2)
console.log(3)
let x = 5
console.log(x+2)
console.log(4)

*/


/* 
Async code queue (line) ->first in first out
setTimeout(()=>{
    console.log("Game over")
},1000)

setTimeout(()=>{
    console.log("Game time.")
},0)

*/



function download(url) {
    console.log(`Start downloading video from ${url} ...`);
    let fileName;
    setTimeout(() => {
        fileName = url.split("/").pop();
        console.log(`Video downloaded from ${url} to ${fileName}.`);
        
    }, 2000);

    return fileName;
}

function process(videoFile) {
    console.log(`Start processing ${videoFile} ...`);

    setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
    }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov"; // ["https:","www.thinkful.com","sync-and-async.mov"]

const fileName = download(url);
// console.log(fileName)
process(fileName);
setInterval(() => console.log("some other work is happening here"), 500);





/*
Sync code
download = function
process = function
const url = "https://www.thinkful.com/sync-and-async.mov";
fileName =  download(url);

console.log(`Start downloading video from ${url} ...`);
let fileName;
return fileName

process(fileName = undefined)

console.log(`Start processing ${videoFile=undefined} ...`);

*/


/* 
Async code (queue)

setTimeout(() => {
        fileName = url.split("/").pop();
        console.log(`Video downloaded from ${url} to ${fileName}.`);
        
}, 2000);

setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
}, 4000);

*/