/* 
You will get some code that is already passing all tests, however you'll need to be able to explain it and refactor it to improve it (readibility, new/alternative syntax)

*/

const axios = require("axios"); //what is this? what is it used for? -> allows us to make api calls (web requests-> get, post, put, patch, delete)




//Example 1- a function that is given an array of objects and another array of arrays. Return back an array of objects containing some data from the two inputs
//what are parameters? -> placeholder variables for the inputs the function expects to receive
//setting default parameters? Why are they useful? -> so you can help to avoid edge cases, tell the function what data type to expect to prevent errors, 
function getTeamGamesData(teams, games) {

    let teamWinsLosses = [];
    
    //for loop-> explain what indexes are when you looping through an array using the for loop with an iterator
        //looping through the teams array
    //what other ways do you know to loop through arrays? and what other ways can we get the number of a total amount of something?
    //refactor for loop to use an array method like .forEach,
    for (let i = 0; i < teams.length; i++) {
        let numWins = 0; //
        let numLosses = 0; //0

        //this nested loop will run the length of games[i] (the length of the sub array in the games array). games[0] would give me the games for the team[0]. games[0] is an array of the games that team[0] has played
        for (let j = 0; j < games[i].length; j++) {
            if (games[i][j] === "W") {
                //is it readable to say games[i][j]? what could make this more readable?
                numWins++;
            } else {
                numLosses++;
            }
        }
        //what can we do here to write this object in a more concise way? think about the variable names and the key value pair names...hmmm...
        teamWinsLosses.push({
            teamName: teams[i].name,
            numWins: numWins,
            numLosses: numLosses,
            numGames: games[i].length,
        });
        /* 
        {
            teamName: "Lakers",
            numWins: 3,
            numLosses: 2,
            numGames: 5
        },
        {
            teamName: "Warriors",
            numWins: 5,
            numLosses: 0,
            numGames: 5
        }
        
        */
    }
    return teamWinsLosses;
    /* 
    teamsWinsLosses will look like this 
    [
       {
            teamName: "Lakers",
            numWins: 3,
            numLosses: 2,
            numGames: 5
        },
        {
            teamName: "Warriors",
            numWins: 5,
            numLosses: 0,
            numGames: 5
        }

    ]
    
    
    */
}

let teams = [
    {
        name: "Lakers",
        city: "Los Angeles",
        num_championships: 20,
    },
    {
        name: "Warriors",
        city: "San Franscisco",
        num_championships: 6,
    },
    {
        name: "Heat",
        city: "Miami",
        num_championships: 10,
    },
]

let games = [
    ["W", "L", "W", "W", "L"], 
//    j    j    j    j    j                       
    ["W", "W", "W", "W", "W"], 
//                           
    ["L", "L", "L", "W", "L"], // i = 2
//   j=0
];

// console.log(getTeamGamesData(teams, games))



let baseurl = "https://api.coingecko.com/api/v3/coins";


//what does this async keyword mean?

const getCoinInfo = async (coinObj) => {
    //what does await do? what is another way to "wait" for an api call to finish, or to wait for asynchronous code to complete and resolve?
    //we are making an api call to an api endpoint-> this is a get request using axios, so we will be retieving information about a coin using the coinObj's id
    //the await just means wait for the response to come back before executing the next line of code. this is an alternative to .then() syntax
    const coinResponse = await axios.get(`${baseurl}/${coinObj.id.toLowerCase()}`);
    // can refactor the ^^^^ above line ^^^ is ---> const {data} = await axios.get(`${baseurl}/${coinObj.id.toLowerCase()}`);



    //form the reponse we get back, return back an object that has some information from the api response.
    
    return {
        name: coinObj.name,
        price: coinResponse.data.market_data.current_price.usd, ////why do we have .data here? what would it look like without the .data?
        links: coinResponse.data.links //returning what part of the response we get back from api?
    }
    //what code would you write in cases where the axios call does not work? Where maybe something goes wrong?-> try/catch
    //what syntax would you use if you use the async await vs .then ways?
    /* 
    .then way

    return axios.get(`${baseurl}/${coinObj.id.toLowerCase()}`)
        .then((coinResponse)=>{
            return {
                name: coinObj.name,
                price: coinResponse.data.market_data.current_price.usd, ////why do we have .data here? what would it look like without the .data?
                links: coinResponse.data.links //returning what part of the response we get back from api?
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    
    */
};


// console.log(getCoinInfo({id:"bitcoin", name: "Bitcoin" }))


const getMultipleCoinsInfo = (coins) => {

    //from the given array of coins, create a new array that only contains coins from index 0-2
    let topThreeCoins = coins.slice(0,3) 
    //what is promise.all-> promise.all takes an array of promises, and it resolves all the promises at once

    //what does .map do? -> it creates a new array with an item for each item in the original array that we mapped through

    //in this case, topThreeCoins.map(getCoinInfo) means-> for every coin object in topThreeCoins array, run the getCoinInfo function and return that result into an array. So we will have an array containing the result of the getCoinInfo function for each coin from topThreeCoins-> array of pending promsies---> [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]

    console.log(topThreeCoins.map(getCoinInfo));
    return Promise.all(topThreeCoins.map(getCoinInfo)).then((response) => {
        //response looks like the 
        console.log("got response in .all", response); //what does response look like here? and why does it look like this?
        return response; //what happens if we don't return the response here?
        //what does the response from a .then in a promise.all look like? (response is an array of the responses for each api call)
    }).catch(err=>{
        console.log("couldn't find the coin")
    })
};

// getMultipleCoinsInfo([
//     {id:"bitcoin", name: "Bitcoin" },
//     {id:"ethereum", name: "Ethereum" },
//     {id:"solana", name: "Solana" },
//     {id:"tether", name: "Tether" }
// ])


function listCoinsInfoFromCoinGecko(){
    // axios
    //     .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    //     .then(response=> {
    //         return response.data
    //     })
    //     .then(getMultipleCoinsInfo)
    //     .then((coinData)=>{
    //         return coinData
    //     })

    axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response=> {
            return response.data
        })
        .then((data)=>{
            return getMultipleCoinsInfo(data)
        })
        .then((coinData)=>{
            return coinData
        })
}


async function listCoinsInfoFromCoinGecko2(){
    let response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    let {data} = response;

    let coinData = await getMultipleCoinsInfo(data);
    return coinData;
}


// listCoinsInfoFromCoinGecko()

module.exports = { listCoinsInfoFromCoinGecko };
