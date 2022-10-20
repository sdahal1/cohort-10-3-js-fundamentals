const axios = require("../utils/axios"); //used to make api calls/requests (get, post, put, patch, delete)
const BASE_URL = "http://localhost:5000";

function index() {
  return axios
    .get(`${BASE_URL}/players`)
    .then(({ data }) => {
      const result = data.filter((player) => {
        return player.number_championships > 4;
      });
      return result;
    })
    .catch(({ message }) => {
      console.error(message);
      
    });
}



function createPlayer(body) {
  return axios
    .post(`${BASE_URL}/players`, body) //axios.post(urlForApiGoesHere, dataYouWantToAdd_GoesHere)
    .then(({ data }) => data)
    // .then((response) => response.data) //same as line 24
    .catch(({ message }) => {
      console.error(message);
    });
    // .catch((error) => { //another way to write line 26-28
    //   console.error(error.message);
    // });
}

function showOnePlayer(id) {
  return axios
    .get(`${BASE_URL}/players/${id}`)
    .then(({ data }) => data)
    .catch(({ message }) => {
      console.error(message);
    });
}

module.exports = {
  index,
  createPlayer,
  showOnePlayer,
};