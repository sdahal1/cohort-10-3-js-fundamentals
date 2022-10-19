const students = require("./students.json");

function selectRandomStudent() {
    const num = Math.random() * students.length;
    const index = Math.floor(num);
    return students[index];
}



function startGame() {
    const message = "Lets challenge a random student to a task!";

    // let gamePromise = new Promise((resolve, reject)=>{
    //     resolve(message)
    // }) 
    // return gamePromise;
    return Promise.resolve(message)
}

function endGame() {
    const message = "The game is now over.";
    return Promise.resolve(message);
}

function giveChallenge(challenge) {
    // console.log("giving challenge function")
    if (!challenge) {
        const message = "C'mon now, where is the challenge at?";
        // return new Promise((resolve, reject)=>{
        //     reject(message)
        // })
        return Promise.reject(message);
    }

    const student = selectRandomStudent(); //generates a random student and puts it in the variable "student"
    return Promise.resolve(`${student} will have to do this: ${challenge}`);
}

module.exports = { startGame, endGame, giveChallenge};
