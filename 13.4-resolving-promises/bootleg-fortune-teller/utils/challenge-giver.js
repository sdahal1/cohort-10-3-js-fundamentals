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
    return Promise.resolve(message);
}

function endGame() {
    const message = "The game is now over.";
    return Promise.resolve(message);
}

function giveChallenge(challenge) {
    if (!challenge) {
        const message = "C'mon now, where is the challenge at?";
        return Promise.reject(message);
    }

    const student = selectRandomStudent();
    return Promise.resolve(`${student} will have to do this: ${challenge}`);
}

module.exports = { startGame, endGame, giveChallenge};
