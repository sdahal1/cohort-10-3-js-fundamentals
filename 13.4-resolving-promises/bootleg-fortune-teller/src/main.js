const { startGame, endGame, giveChallenge } = require("../utils/challenge-giver");

let challenges = [
    "Say: 'We getting this chedda brrrrr'",
    "Answer this question: What are you grateful for today?",
    "Say Yeeee Hawwww like you're in the wild wild west",
    "Tell us your favorite color",
    "Laugh like Steve Urkel",
    "Answer this question: Dogs or Cats?"
]

function getRandomChallenge(){
    const num = Math.random() * challenges.length;
    const index = Math.floor(num);
    return challenges[index];
}

let randomChallenge = getRandomChallenge();

console.log(`Random challenge is: ${randomChallenge}`);


///////////////////////////////////////////////////////////////////


// startGame()
//     .then((startGameMsg)=>{
//         console.log(startGameMsg)
//     })

startGame()
    .then(console.log)
    .catch(console.log)
