const axios = require("axios");
const BASE_URL = "http://localhost:5000";



//Show that if a player with an id is not found, it gives back an error
// axios.get(`${BASE_URL}/players/9`)
//     .then(res=>{
//         console.log(res.data)
//     })
//     .catch(err=>{
//         console.log("errror finding player", err.message)
//     })


//build a function that will take an id of a player, and data to update the player with. First, check if a player with a given id exists. Update the player if the player exists, if the player doesnt exist, just log the error message

function updatePlayerIfPlayerExists(id, body){
    //First, check if a player with a given id exists.
    // axios.get(`${BASE_URL}/players/${id}`)
    // .then(res=>{
    //     console.log(res.data) //res.data is the player object that was found
    //     axios.put(`${BASE_URL}/players/${id}`, body)
    //         .then(response=>{
    //             return response.data //response.data here represent the player object after being updated
    //         })
    // })
    // .catch(err=>{
    //     console.log("errror finding player", err.message)
    // })


    //better way

    axios.get(`${BASE_URL}/players/${id}`)
    .then(res=>{ //.then will execute if the player with the given id is found
        console.log(res.data) //res.data is the player object that was found
        
        return axios.put(`${BASE_URL}/players/${id}`, body)
          
    })
    .then(({data})=>{
        // console.log('********************************************************')
        // console.log(data)
        // console.log('********************************************************')
        return data;
    })
    .catch(err=>{
        console.log("errror finding player", err.message)
    })
}


let newObj = {
    "name": "King James",
    "team": "Cleveland",
    "number_championships": 5,
    "state": "Ohio"
  }

updatePlayerIfPlayerExists(20,newObj)

