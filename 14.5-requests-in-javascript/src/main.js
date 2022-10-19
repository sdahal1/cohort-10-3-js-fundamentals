const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";


function findAllPlayers(){
  let result = axios.get(`${BASE_URL}/players`) //make a refund request and ups says they will be arriving eventually (didnt tell me exactly how long it will take) -> make a api call and we will get back some data form the api, but

  console.log("brush my teeth")
  result.then((responseFromApi)=>{//result.then is going to run only when the api data (result), fully finishes resolving
    console.log("ups driver arrived! Api returned info", responseFromApi.data)
    console.log(responseFromApi.status)

  })
  .catch(err=>{
    console.log("errrrrorrr, something went wrong!", err.message)
  })

  console.log("learn javascript")
  console.log("result looks like this->", result)

}

// findAllPlayers()

function findPlayerById(id){
  axios.get(`${BASE_URL}/players/${id}`)
    .then(({data})=>{
      console.log(data)
    })
    // .then((response)=>{
    //   const {data} = response
    //   console.log(data)
    // })
    .catch(err=>{
      console.log(err.message)
    })
}

// findPlayerById(3)


function createPlayer(body){
  axios.post(`${BASE_URL}/players`, body)
    .then(response=>{
      console.log(response.data)
    })
    .catch(err=>{
      console.log(err.message)
    })
}

let body = {
  name: "Klay",
  team: "Warriors",
  number_championships: 4,
  state: "California"
}
// createPlayer(body)

function updatePlayerById(id){
  let body = {
    id: "2",
    name: "Chef Curry",
    team: "Warriors",
    number_championships: 4,
    state: "California"
  }

  axios.put(`${BASE_URL}/players/${id}`,body)
    .then(({data})=>{
      console.log(data)
    })
    .catch(err=>{
      console.log(err.message)
    })
}


// updatePlayerById(2)

function deletePlayerById(id){
  axios.delete(`${BASE_URL}/players/${id}`)
  .then(({data})=>{
    console.log(data)
  })
    .catch(err=>{
      console.log(err.message)
    })
 
}

// deletePlayerById(8)

function getAllPlayerNames() {
  return axios.get(`${BASE_URL}/players`)
    .then(response=>{
      //console.log(response.data) //response.data is an array of player objects!
      let playersArray = response.data;
      let playersNamesOnly = playersArray.map((playerObj)=>{
        return playerObj.name
      })
      console.log(playersNamesOnly)
      return playersNamesOnly
    })
}

// console.log(getAllPlayerNames())

function getPlayersByState(stateName) {
  axios.get(`${BASE_URL}/players`)
    .then(response=>{
      let playersArray = response.data;
      let playersFromState = playersArray.filter(playerObj=>{
        return playerObj.state === stateName
      })

      console.log(playersFromState)
      return playersFromState
    })
}

// getPlayersByState("California")


module.exports = {
  getAllPlayerNames,
  getPlayersByState,
};
