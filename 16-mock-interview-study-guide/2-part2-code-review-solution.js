/* 
You will get some code that is already passing all tests, however you'll need to be able to explain it and refactor it to improve it (readibility, new/alternative syntax)

*/

const axios = require("axios");

function getTeamGamesData(teams = [], games = []) {
    let teamWinsLosses = [];

    //loop through the teams array, where teamObj represtns each team object and i represents the index numbers in the teams array
    teams.forEach((teamObj, i) => {
        let numWins = 0;
        let numLosses = 0;

        //currentTeamsGames is the array of game results corresponding to the current team index
        let currentTeamsGames = games[i];
        //this forEach will just find the number of wins and losses for the current gameResults array
        currentTeamsGames.forEach((gameResult)=>{
            if (gameResult === "W") {
                numWins++;
            } else {
                numLosses++;
            }
        })
        //push an object containing the team name, number of wins for this team, num losses for this team, and number of games total for this team-> push this object to our result array
        teamWinsLosses.push({
            teamName: teamObj.name,
            numWins,
            numLosses,
            numGames: currentTeamsGames.length,
        });
    });
    return teamWinsLosses;
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
];

let games = [
    ["W", "L", "W", "W", "L"],
    //
    ["W", "W", "W", "W", "W"],
    //
    ["L", "L", "L", "W", "L"], // i = 2
    //   j=0
];

// console.log(getTeamGamesData(teams, games));

let baseurl = "https://api.coingecko.com/api/v3/coins";

//what does this async keyword mean? -> we have an asynchronous function-> a function that has asynchronous code inside it that we can wait for that async code to finish running before completing the function
// async function getCoinInfo(coinObj){
// }



const getCoinInfo = async (coinObj) => {
    //what code would you write in cases where the axios call does not work? Where maybe something goes wrong? -> try catch
    try{
        //what does await do? what is another way to "wait" for an api call to finish, or to wait for asynchronous code to complete and resolve?
        const coinResponse = await axios.get( `${baseurl}/${coinObj.id.toLowerCase()}`)//making an api call to get information on the coin objec we received as a parameter
    
        return {
            name: coinObj.name,
            price: coinResponse.data.market_data.current_price.usd, ////why do we have .data here? what would it look like without the .data?
            links: coinResponse.data.links,
        };
    }catch(err){
        console.log(err.message)
        return err.message
    }
    //what syntax would you use if you use the async await vs .then ways?
    // axios.get(`${baseurl}/${coinObj.id.toLowerCase()}`)
    //     .then(coinResponse=>{
    //         return {
    //             name: coinObj.name,
    //             price: coinResponse.data.market_data.current_price.usd, ////why do we have .data here? what would it look like without the .data?
    //             links: coinResponse.data.links, //returning what part of the response we get back from api?
    //         };
    //     })
    //     .catch(err=>{
    //         console.log(err.message)
    //         return err.message
    //     })
};




const getCoinsInfo = (coins=[]) => {
    let topFiveCoins = coins.slice(0,5); //what does .slice do? -> give back a section of an array
    //what is another way to write this code below?
    // return Promise.all(topFiveCoins.map(getCoinInfo))
    //     .then((response) => {
    //         //response looks like the
    //         console.log("got response in .all", response); //what does response look like here? and why does it look like this?
    //         return response; //what happens if we don't return the response here?
    //         //what does the response from a .then in a promise.all look like? (response is an array of the responses for each api call)
    //     })
    //     .catch((err) => {
    //         console.log("couldn't find the coin");
    //     });
    // console.log(topFiveCoins)
    let arrayOfAsynchronousData = topFiveCoins.map(coinObj=>{
        return getCoinInfo(coinObj)
    })

    // console.log(arrayOfAsynchronousData)

    // arrayOfAsynchronousData.forEach(pendingProm=>{
    //     pendingProm.then(res=>{
    //         console.log(res)
    //     })
    // })

    return Promise.all(arrayOfAsynchronousData)
        // .then(response=>{
        //     console.log(response)
        // }) 
};

// getCoinsInfo([
//     {id: "bitcoin", name: "bitcoin"},
//     {id: "solana", name: "solana"},
//     {id: "ethereum", name: "ethereum"},
// ])



async function listCoinsInfoFromCoinGecko() {
    let response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    let arrayOfCoinObjects = await getCoinsInfo(response.data)
    let coinData = getCoinInfo(arrayOfCoinObjects);
//     return axios
//         .get(
//             "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//         )
//         .then((response) => {
//             return response.data; //response.data is our array of coins
//         })
//         // .then(getCoinsInfo)
//         .then((arrayOfCoinObjects)=>{
//             return getCoinInfo(arrayOfCoinObjects)
//         })
//         .then((coinData) => {
//             return coinData;
//         });
}

listCoinsInfoFromCoinGecko()
    .then(info=>{
        console.log(info)
    })

module.exports = { listCoinsInfoFromCoinGecko };
