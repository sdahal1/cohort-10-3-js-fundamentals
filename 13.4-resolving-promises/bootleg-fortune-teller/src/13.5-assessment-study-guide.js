const {
    startGame,
    endGame,
    giveChallenge,
} = require("../utils/challenge-giver");

let challenges = [
    "Say: 'We getting this chedda brrrrr'",
    "Answer this question: What are you grateful for today?",
    "Say Yeeee Hawwww like you're in the wild wild west",
    "Tell us your favorite color",
    "Laugh like Steve Urkel",
    "Answer this question: Dogs or Cats?",
];

function getRandomChallenge() {
    const num = Math.random() * challenges.length;
    const index = Math.floor(num);
    return challenges[index];
}

let randomChallenge = getRandomChallenge();

console.log(`Random challenge is: ${randomChallenge}`);

function showChallengeDetails(challenge) {
    // console.log("show challenge details function");
    return giveChallenge(challenge).then((response) => [
        `The challenge is: ${challenge}`,
        `Here is the lucky winner- ${response}`,
    ]);
}

// showChallengeDetails()
//   .then((challengeDetailsResponse)=>{
//     console.log(challengeDetailsResponse)
//   })
//   .catch(err=>{
//     console.log(err)
//   })


/* 
getChallenge()
//have this return a promise that returns an array containing the challenge information and information about who is being challenged


//have this function return an error message with the prefix "Uh ohh spaghettio- " if there is not challenge given to the function

*/
function getChallenge(challenge) {
  return showChallengeDetails(challenge)
    .catch(err=>{
      return `Uh ohh spaghettio- ${err}`
    })
}



/* 
//if a challenge is provided to the play() function, use the other functions and combine them to build an array containing and return a promise that returns this array:
[
  "Lets challenge a random student to a task!"",
  "The challenge is: Laugh like Steve Urkel",
  "Here is the lucky winner- Rob Dahal will have to do this: Laugh like Steve Urkel",
  "The game is now over.",
];


if no challenge is provided to the play() function, return a promise that returns an array that looks like this:
[
  "Lets challenge a random student to a task!"",
  "Uh ohh spaghettio- C'mon now, where is the challenge at?"
  "The game is now over.",
];

*/

function play(challenge) {
  //have an array to store results into
  let result = [];
  return startGame()
    .then((startGameMessage)=>{
      // console.log(startGameMessage)
      result.push(startGameMessage)
      return getChallenge(challenge)
    })
    .then((getChallengeMessage)=>{
        //console.log(getChallengeMessage) //this will either be an array or a string with the error message

        result = result.concat(getChallengeMessage);

        // console.log(result)
        return endGame()
    })
    .then((endGameMessage)=>{
        result.push(endGameMessage)
        console.log(result)
        return result
    })
    
}


// play()
//   .then(resultOfPlay=>{
//     console.log(resultOfPlay)
//   })
