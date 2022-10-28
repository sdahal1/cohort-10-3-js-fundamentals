/* 
Problem
For this use the CoinGecko Api to find market data for crypto coins.

getCoinMarketData()

Create a function called getCoinMarketData that takes a string as a parameter. The string represents a crypto currency coin such as "bitcoin", or "ethereum", or "solana"

The API endpoint will be similar to this endpoint to get bitcoin information: https://api.coingecko.com/api/v3/coins/bitcoin

Make sure to make the API call update based on the coin name that is passed into getCoinMarketData.

The function should return the market_data object from the result of the API call.

An example output would be

getCoinMarketData('bitcoin') /* ->
  
{
    "current_price": {
      "aed": 70733,
      "ars": 2980147,
      "aud": 30582,
      "bch": 178.634,
      "bdt": 1959024,
      "bhd": 7261.67,
      "bmd": 19257.73,
      "bnb": 70.727,
      "brl": 101677,
      "btc": 1.0,
      "cad": 26438,
      "chf": 19274.37,
      "clp": 18944794,
      "cny": 139869,
      "czk": 476955,
      "dkk": 144991,
      "dot": 3299,
      "eos": 17993,
      "eth": 14.425859,
      "eur": 19492.33,
      "gbp": 17048.91,
      "hkd": 151172,
      "huf": 8069988,
      "idr": 300336961,
      "ils": 68482,
      "inr": 1594236,
      "jpy": 2866799,
      "krw": 27794194,
      "kwd": 5977.41,
      "lkr": 7033330,
      "ltc": 367.378,
      "mmk": 40245174,
      "mxn": 384275,
      "myr": 91243,
      "ngn": 8446557,
      "nok": 202752,
      "nzd": 33889,
      "php": 1133654,
      "pkr": 4221871,
      "pln": 93296,
      "rub": 1191572,
      "sar": 72375,
      "sek": 215675,
      "sgd": 27389,
      "thb": 734875,
      "try": 358212,
      "twd": 622686,
      "uah": 707768,
      "usd": 19257.73,
      "vef": 1928.28,
      "vnd": 478691307,
      "xag": 1006.15,
      "xau": 11.7,
      "xdr": 13707.23,
      "xlm": 175337,
      "xrp": 42424,
      "yfi": 2.547197,
      "zar": 355157,
      "bits": 1000030,
      "link": 2819,
      "sats": 100002999
}, ...other keys related to market data



*/

//what do i need to import to make api calls?
const axios = require("axios");


/* 
1. read the instructions on qualified!!!
2. find out what to name the function based on instructions
3. figure out if the function is accepting any parameters
4. find the api endpoint in the instructions!! and test it (using Postman)!!
5. find what part of the response we are asked to return-> its in the instructions
6. if there is a parameter, find out how to structure your api endpoint. If there are no parameters, then you might just use the api endpoint provided without any modification. 
7. set up the endpoint in a variable inside the function, adjusted for if there is a parameter related to that endpoint
8. Make a api call using axios and the endpoint, extract the response.data using the .then .catch syntax or try/catch with async await
9. from the response.data, ask yourself-> is this what they are asking for in the instructions? (see step 5)
10. see if you can console.log the expected output first
11. return the axios call and return the response in the .then that you console.logged (if you're using the .then .catch syntax)---> if your using async await syntax, return the variable, not the axios call
*/

//how should i write this function-> does it need a parameter? if so, what would be a good name?
function getCoinMarketData2(coinName) {
    let endpoint = `https://api.coingecko.com/api/v3/coins/${coinName}`

    return axios.get(endpoint)
        .then((response)=>{
            // console.log(response.data.market_data)
            return response.data.market_data
        })
        .catch((err)=>{
            // console.log(`Coin not found, here is the error message: ${err.message}`)
            return err.message
        })

    
    
}


async function getCoinMarketData(coinName){
    try{
        let endpoint = `https://api.coingecko.com/api/v3/coins/${coinName}`
    
        let response = await axios.get(endpoint)
        // console.log(response.data.market_data)
        return response.data.market_data

    }
    catch(err){
        console.log(`Coin not found, here is the error message: ${err.message}`)
        return err.message
    }
}

// getCoinMarketData("robcoin")
// console.log("wazzzaaaaaaaaap")





/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* 

make a function called getFormattedCoinData that accepts a coin name as a parameter

What if you had to give back this response for the api endpoint
{
    coinName: "Bitcoin",
    genesis_date: "2009-01-03",
    usd_price: 20681,
    ath_usd: 69045
}


*/



function getFormattedCoinData(coinName){
    let endpoint = `https://api.coingecko.com/api/v3/coins/${coinName}`

    return axios.get(endpoint)
        .then((response)=>{
            console.log(response.data)
            let coinName = response.data.name;
            let genesis_date = response.data.genesis_date;
            let usd_price = response.data.market_data.current_price.usd;
            let ath_usd = response.data.market_data.ath.usd

            let result = {
                coinName,
                genesis_date,
                usd_price,
                ath_usd
            }

            // console.log(result)
            return result
        })
        .catch(err=>{
            console.log(err.message)
        })
}

async function getFormattedCoinData2(coin){
    try{
        let endpoint = `https://api.coingecko.com/api/v3/coins/${coin}`
    
        let response = await axios.get(endpoint)
        let coinName = response.data.name;
        let genesis_date = response.data.genesis_date;
        let usd_price = response.data.market_data.current_price.usd;
        let ath_usd = response.data.market_data.ath.usd
    
        let result = {
            coinName,
            genesis_date,
            usd_price,
            ath_usd
        }
        // console.log(result)
        return result
    }
    catch(err){
        console.log(err.message)
    }



        // .then((response)=>{
        //     console.log(response.data)
        //     let coinName = response.data.name;
        //     let genesis_date = response.data.genesis_date;
        //     let usd_price = response.data.market_data.current_price.usd;
        //     let ath_usd = response.data.market_data.ath.usd

        //     let result = {
        //         coinName,
        //         genesis_date,
        //         usd_price,
        //         ath_usd
        //     }

        //     // console.log(result)
        //     return result
        // })
        // .catch(err=>{
        //     console.log(err.message)
        // })
}



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/* 

make a function called getAllCoins that takes no parameters.
You can use this endpoint: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


What if you had to give back this response for the api endpoint
[
  {
    "name": "Bitcoin",
    "current_price": 20575,
    "price_change_percentage_24h": -0.29773
  },
  {...},
  {...}
]


*/

function getAllCoins(){
    let endpoint = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    return axios.get(endpoint)
        .then(response=>{
            //response.data is an array of objects
            // console.log(response.data)

            let result = response.data.map(coinObj=>{
                return {
                    name: coinObj.name,
                    current_price: coinObj.current_price,
                    price_change_percentage_24h: coinObj.price_change_percentage_24h
                }
            })
            console.log(result)
            return result;
        })

}

getAllCoins()

// getFormattedCoinData2("badcoin")

module.exports = { getCoinMarketData };
