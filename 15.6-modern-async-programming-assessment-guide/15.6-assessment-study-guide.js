const axios = require("axios");
const BASE_URL = "http://localhost:5000";



/* 
1. This function should take in a player object that includes an id. It should then return a PUT request with axios to update that resource with the new contents.

2. If that request fails, it should return a rejected promise with the following result. Assume id is the value of the player's id property.

{
    notFound: `Updating player (id: ${id}) failed.`;
}
*/
function updatePlayer(player={}) {
  return axios.put(`${BASE_URL}/players/${player.id}`, player)
    .then(res=>{
      console.log("hit the .then->", res.data)
      return res
    })
    .catch(err=>{
      console.log('err.message is this-->',err.message)
      return {notFound: `Updating player (id: ${player.id}) failed. Try again.`}
    })
}


// let player = {
//   "id": "50",
//   "name": "Kobe",
//   "team": "Knicks",
//   "number_championships": 10,
//   "state": "New York"
// }

// updatePlayer(player)
//   .then(res=>{
//     console.log("inside the line 38 .then()", res)
//   })


/* 
1. This is the main function you will be working on.

First, this function should take an array of player objects. If an array is not provided, the function should return a rejected promise with an object. That object should have an error key that includes a relevant message.

bulkImport({}).catch((error) => {
  console.log(error) //--> looks like this { error: "Inputted argument must be an array." }
});


Before making the PUT request, you must first validate that all of the players are valid, according to the isValid() function. If any player is not, the function should return a rejected promise with an object and an error message, like above.

const players = [{ team: "Lakers" }];
bulkImport(players).catch((error) => {
  console.log(error);
  //> { error: "All players must include relevant fields." }
});

If all of the players are valid, the function will create a request for each of the given players and store those requests inside of an array. Use the update() function to create each of the PUT requests.


Finally, use Promise.allSettled() to return a promise that evaluates all of the requests.
*/

function updateManyPlayers(players=[]) {
  //validate that the players variable is an array first!
  //If an array is not provided, the function should return a rejected promise with an object.
  if(!Array.isArray(players)){
    return Promise.reject({error: "Input must be an array"})
  }


  //make sure every player is a valid player (meaning they all have teh properties: id, name, team, number_championships, state)
  let isEveryObjectValid = players.every((playerObj)=>{
    if(playerObj.id && playerObj.name && playerObj.team && playerObj.number_championships>=0 && playerObj.state){
      return true;
    }else{
      return false;
    }
  })

  //Before making the PUT request, you must first validate that all of the players are valid, according to the isValid() function. If any player is not, the function should return a rejected promise with an object and an error message
  if(isEveryObjectValid === false){
    return Promise.reject({error: "All objects must have their relevant keys"})
  }

  let putRequestArray = players.map(playerObj=>{
    return updatePlayer(playerObj).catch(err=>console.log(err))
  })

  console.log("put request array ->", putRequestArray)



  return  Promise.allSettled(putRequestArray)
  
}


let arrayOfObjectsIWantToUpdate = [
  {
    "id": "2",
    "name": "LBJ",
    "team": "Lakers",
    "number_championships": 5,
    "state": "Los Angeles"
  },
  {
    "id": "3",
    "name": "The Answer",
    "team": "Sixers",
    "number_championships": 0,
    "state": "Pennsylvania"
  },
  {
    "id": "4",
    "name": "Luka The Don",
    "team": "Mavs",
    "number_championships": 0,
    "state": "Dallas"
  },
  {
    "id": "49",
    "name": "Anotha One",
    "team": "Spurs",
    "number_championships": 5,
    "state": "Texas"
  }
]


updateManyPlayers(arrayOfObjectsIWantToUpdate)
  .then(response=>{
    console.log("response from promise.allsettled", response)
  })
  .catch(err=>{
    console.log("err from promise.allsettled, good catch Bjorn", err)
  })




