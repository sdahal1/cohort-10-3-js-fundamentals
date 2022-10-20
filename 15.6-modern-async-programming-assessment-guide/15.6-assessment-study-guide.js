const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";


function isValid({ id, name, team, number_championships, state }) {
  return id && name && team && number_championships && state;
}


/* 
1. This function should take in a player object that includes an id. It should then return a PUT request with axios to update that resource with the new contents.

2. If that request fails, it should return a rejected promise with the following result. Assume id is the value of the player's id property.

{
    error: `Updating player (id: ${id}) failed.`;
}
*/
function update(player={}) {}




/* 
1. This is the main function you will be working on.

First, this function should take an array of player objects. If an array is not provided, the function should return a rejected promise with an object. That object should have an error key that includes a relevant message.

bulkImport({}).catch((error) => {
  console.log(error) //--> looks like this { error: "Inputted argument must be an array." }
});


Before making the PUT request, you must first validate that all of the constellations are valid, according to the isValid() function. If any constellation is not, the function should return a rejected promise with an object and an error message, like above.

const players = [{ team: "Lakers" }];
bulkImport(players).catch((error) => {
  console.log(error);
  //> { error: "All players must include relevant fields." }
});

If all of the players are valid, the function will create a request for each of the given players and store those requests inside of an array. Use the update() function to create each of the PUT requests.


Finally, use Promise.allSettled() to return a promise that evaluates all of the requests.
*/

function bulkImport(players=[]) {}
