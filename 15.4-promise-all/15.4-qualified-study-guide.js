const axios = require("axios");
const BASE_URL = "http://localhost:5000";

//1. What if you are given an array of id numbers, and you're job is to get information about all the players with those id's using axios.get() calls to get each player using the ids in the array.
let ids = ["1", "2", "5", "7"]

function bulkDisplayInfo(ids = []){
    /* 
    let getRequests = []
    for(let i = 0; i<ids.length; i++){
        let currentId = ids[i];
        getRequests.push(axios.get(`${BASE_URL}/players/${currentId}`))
    }

    console.log(getRequests)

    getRequests.forEach(request=>{
        request.then(responseFromApi=>{
            console.log(responseFromApi.data)
        })
    })
    */

    let getRequests = ids.map(id=>axios.get(`${BASE_URL}/players/${id}`))

    console.log(getRequests)
    Promise.all(getRequests) //promise.all take in an array of promises
        .then(responsesArray=>{ //responsesArray is an array of response object for each of the promise objects from teh getRequests array
            responsesArray.forEach(response=>{
                console.log(response.data)
            })
        })
        .catch(err=>{
            console.log("error,at least one of the ids were not found")
        })

//2. Promise all vs promise allSettled

        Promise.allSettled(getRequests) //promise.allSettled also takes in an array of promises. Even if some of the promises in the array are rejected, it will still execute the .then with information about each promise's status on if they were fulfilled or rejected
        .then(responsesArray=>{ //
            responsesArray.forEach(response=>{
                console.log(response.status)
                if(response.status === "fulfilled") console.log(response.value.data)
            })

        })
        .catch(err=>{
            console.log("error,at least one of the ids were not found")
        })

}

// bulkDisplayInfo(ids)





//3. Assessment hints-> bulk delete

function bulkDelete(ids = []){
    let deleteRequests = ids.map(id=>axios.delete(`${BASE_URL}/players/${id}`))

    console.log(deleteRequests)
    return Promise.all(deleteRequests) //promise.all take in an array of promises

}

// bulkDelete(ids)

