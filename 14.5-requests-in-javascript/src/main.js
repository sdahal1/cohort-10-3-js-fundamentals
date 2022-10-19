const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";


function findAllPlayers(){

}

function findPlayerById(id){
  axios.get(`${BASE_URL}/players/${id}`)
    .then(response=>{
      console.log(response.data)
     
    })
    .catch()
}

function updatePlayerById(id){
  let newData = {
    "name": "Goat Bron"
  }

  axios.put(`${BASE_URL}/players/${id}`, newData)
    .then(response=>{
      console.log(response.data)
    })
    .catch()
}


function deletePlayerById(id){
 
  axios.delete(`${BASE_URL}/players/${id}`)
    .then(response=>{
      console.log(response.data)
    })
    .catch()
}

function getAllPlayerNames() {
  axios.get(`${BASE_URL}/players`)
    .then(response=>{
      let result = response.data.map(playerObj=>{
        return playerObj.name
      })
      console.log(result)
    })
}

function getPlayersByState(stateName) {
  axios.get(`${BASE_URL}/players`)
    .then(response=>{
      let playersFromCity = response.data.filter(playerObj=>{
        return playerObj.state === stateName
      })

      console.log(playersFromCity)
      return playersFromCity
    })
    .catch()
}


module.exports = {
  getAllPlayerNames,
  getPlayersByState,
};
