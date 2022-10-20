const {startGame, endGame, giveChallenge} = require("../utils/challenge-giver")

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


async function challengeSomeone(challenge) {
  // giveChallenge(challenge)
  //   .then((response) => {
  //     console.log(`Your challenge was: ${challenge}`);
  //     console.log(`Participant Details: ${response}`);
  //   })
  //   .catch((err) => {
  //     console.log(`There was an error: ${err}`);
  //   });

  try{
    let response = await giveChallenge(challenge)
    console.log(`Your challenge was: ${challenge}`);
    console.log(`Participant Details: ${response}`);

  }catch(err){
    console.log(`There was an error: ${err}`);
  }
}

// challengeSomeone()

async function fullGame(challenge) {
  // startGame()
  //   .then(console.log)
  //   .then(() => challengeSomeone(challenge))
  //   .then(() => endGame())
  //   .then((endGameResponse)=>console.log(endGameResponse))
  //   .catch((err) => {
  //     console.log(`There was an error: ${err}`);
  //   });

  try{
    let startGameMessage = await startGame();
    console.log(startGameMessage);
    await challengeSomeone(challenge);
    let endGameResponse = await endGame();
    console.log(endGameResponse)
  }catch(err){
    console.log(`There was an error: ${err}`);
  }
}


fullGame()




/* convert to async await  */

// const {startGame, endGame, giveChallenge} = require("../utils/challenge-giver")

// let challenges = [
//   "Say: 'We getting this chedda brrrrr'",
//   "Answer this question: What are you grateful for today?",
//   "Say Yeeee Hawwww like you're in the wild wild west",
//   "Tell us your favorite color",
//   "Laugh like Steve Urkel",
//   "Answer this question: Dogs or Cats?"
// ]

// function getRandomChallenge(){
//   const num = Math.random() * challenges.length;
//   const index = Math.floor(num);
//   return challenges[index];
// }

// let randomChallenge = getRandomChallenge();


// async function challengeSomeone(challenge) {
//   try{
//     let response = await giveChallenge(challenge)
//     console.log(`Your challenge was: ${challenge}`);
//     console.log(`Participant Details: ${response}`);
//   }catch(err){
//       console.log(`There was an error: ${err}`);
//   };
// }

// async function fullGame(challenge) {
//   try{
//     let response = await startGame()
//     console.log(response);
//     await challengeSomeone(challenge)
  
//     let endGameResponse = await endGame()
//     console.log(endGameResponse)

//   }catch(err){
//       console.log(`There was an error: ${err}`);
//   }
// }



// fullGame(randomChallenge)