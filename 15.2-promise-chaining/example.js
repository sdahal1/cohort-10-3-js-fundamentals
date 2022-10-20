const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const playersUrl = `${BASE_URL}/players`;

const newPlayer = {
    name: "Monstaaar",
    team: "Suns",
    number_championships: 0,
    state: "Arizona"

}

console.log(1)
// axios.get(playersUrl)
//     .then(({ data }) => {
//         console.log(2)
//         //data is an array of player objects
//         let playerFound = data.find(playerObj=>{
//             return playerObj.name === newPlayer.name
//         })

//         if(playerFound) throw new Error("Player already exists!")

//         axios.post(playersUrl, newPlayer).then(({ data }) => {
//             console.log(4)
//             console.log(data)
//         })
//     .catch(console.log)
// });

// axios.get(playersUrl)
//     .then(({ data }) => {
//         console.log(2)
//         //data is an array of player objects
//         let playerFound = data.find(playerObj=>{
//             return playerObj.name === newPlayer.name
//         })

//         return playerFound
//     })
//     .then((playerFound)=>{
//         console.log(3)
//         if(!playerFound){
//             axios.post(playersUrl, newPlayer).then(({ data }) => {
//                 console.log(4)
//                 console.log(data)
//             })
//         }
//         else{
//             console.log("error")
//             return new Error("Duplicate player")
//         }
//     })
//     .catch(console.log)



// console.log(5)


// new Promise((resolve, reject) => {
//     const random = 8
//     random > 5 ? resolve(random) : reject(random);
//   })
//     .then((response) => {
//       console.log("Resolved!", response);
//       return response;
//     })
//     .catch((response) => {
//       console.log("Rejected!", response);
//       return response;
//     })
//     .then((response) => {
//       console.log("Add 10", response + 10);
//     });



//check to see if a player named Monstaar exists first, and if they dont exist, then i will create thee player using a post request