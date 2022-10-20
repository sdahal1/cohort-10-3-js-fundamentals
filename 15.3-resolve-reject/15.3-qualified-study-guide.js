const axios = require("axios");
const BASE_URL = "http://localhost:5000";



//1. What if a function either returns null or a promise? -> heres the example from platform, refactored
function update(id, body) {

  if (!id || !body) return Promise.reject(false)


  const url = `${BASE_URL}/players/${id}`;
  return axios.put(url, body);
}

let newObj =  {
    "name": "The Answer",
    "team": "Sixers",
    "number_championships": 0,
    "state": "Pennsylvania"
  }

// update(3)
//   .then(response=>{
//     console.log("response found", response.data)
//   })
//   .catch(err=>{
//     console.error(err)
//   })








//Guess the result



// Promise.resolve("hello")
//     .then((value) => Promise.resolve(value + " world"))
//     .then((result) => console.log(`I said ${result}`))
//     .catch((result) => console.log("They said: ", result));


Promise.resolve({ name: "Lebron" })
    .then((value) => {
        return value.team //does value.team exist?
            ? Promise.reject(value)
            : Promise.resolve({ error: "Missing key." });
    })
    .then((result) => console.log("Success:", result))
    .catch((result) => console.log("Failure:", result));
/* 



//guess the result

*/