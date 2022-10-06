/*


Input: Teams array containing team objects


let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  }
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3

  }
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]

Write a function that returns a team that matches the given city name and a player name

1. should return null if a team cannot be found by city
2. should return null if a team cannot be found by player
3. should return the team if its matching a city and contains the given player

*/


function findTeamByCityAndPlayer(teams=[], city, player) {
  //return early if no city or player is provided
  if(!city || !player) return null;


  let selectedTeam = null
  //do for-of loop through the array to get just the elements in the array
  for(let team of teams){
    // console.log(team) //team represents a team object
    //if the team.city matches the given city, then check if the team.players arrray contains the given player
    if(team.city === city){
      //check the team.players array to see if it has the given player, if so, set the selectedTeam to be the current team we are on in the loop
      if(team.players.includes(player)) selectedTeam = team
    }
  }

  return selectedTeam;


}

// console.log("1" == 1) //true-> matches value only
// console.log("1" === 1) //false  -> matches value and data type


let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  },
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3

  },
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]
// console.log(findTeamByCityAndPlayer(teams, "New York", "Kyrie Irving"))



/*
Input: Team will be an object, cities will be an object


// Team object
let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}


Cities Object
let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}


Add a city from a given team to a given collection of cities and update the cities collection objects info

1. If called with only a team and no cities object, then use an empty object
2. If the given team's city is not in the cities object yet, then create a new key in the cities object with the given team's city and give it keys for numberOfPlayers, numberOfChampionships, and teams 
3. If the cities object already has a city that matches the given team, then update the cities object at that city key to update the number of players, number of championships and add to that cities teams array the given team

*/

//similar to add product to cart
function addCityToCities(team, cities) {
  // let city = team.city
  let {city} = team;

	//check if the given team's city exists in our given cities object. If it does, we need to update the cities object at that city key
  if(city in cities){
    //to the object at that key, update the values
    let foundCity = cities[city]
    foundCity.totalNumberOfPlayers += team.players.length;
    foundCity.numberOfChampionships += team.championships;
    foundCity.teams.push(team.name)
  }else{ //else-> the city does not exist in our cities objct, so add a new key to the object using the city name
    cities[city] = {
      totalNumberOfPlayers: team.players.length,
      numberOfChampionships: team.championships,
      teams: [team.name]
    }
  }
  return cities
}

// Team object (similar to product)
let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}


//Cities Object (similar to cart)
let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}


// console.log(addCityToCities(newTeam, cities_usa))



function calculateTotalChampionships(cities) {

  let total = 0;
	//loop through cities-> this is an object so-> "foreign object" -> for-in loop on object
  for(let city in cities){
    let currentCity = cities[city];
    // console.log(cities[city].numberOfChampionships)
    total += currentCity.numberOfChampionships;

  }

  return total
}

// console.log(calculateTotalChampionships(cities_usa))





/*

1. should return null if the cities is empty
2. should return a receipt of all items in the cart
3. example input:

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

//example output: "Los Angeles has 20 championships and the following teams: Lakers\n New York has 3 championships and the following teams: Knicks, Nets\n San Franscisco has 5 championships and the following teams: Warriors \n Total Championships: 28"

*/
function printInfo(cities) {
	//`${cityNameHere} has ${numberChampionshipsForCityHere} championships and the following team(s): ${listOfTeamsForCityHre}. \n`

  //have  a string to put all the sentences into
  let result = "";

  //loop through the cities object
  for(let city in cities){
    //store the current city in a variable
    let currentCityData = cities[city]
    // console.log("current city data is this--->", currentCityData)
    //build a sentence for the city in this format: `${cityNameHere} has ${numberChampionshipsForCityHere} championships and the following team(s): ${listOfTeamsForCityHre}. \n`
    let currentSentence = `${city} has ${currentCityData.numberOfChampionships} championships and the following team${currentCityData.teams.length>1 ? "s":""}: ${currentCityData.teams.join(", ")}. \n`

    // console.log(currentSentence)
    result+=currentSentence;
  }
  return result;
}


console.log(printInfo(cities_usa))