const tournament = {
    "1": { homeTeam: 100, awayTeam: 85 },
    "2": { homeTeam: 98, awayTeam: 100 },
    "3": { homeTeam: 50, awayTeam: 51 },
    "4": { homeTeam: 10, awayTeam: 8 },
};

const tournament2 = {
    "1": { homeTeam: 40, awayTeam: 85 },
    "2": { homeTeam: 98, awayTeam: 100 },
    "3": { homeTeam: 50, awayTeam: 51 },
    "4": { homeTeam: 10, awayTeam: 8 },
};




// calculateTotalPoints
//The calculateTotalPoints function will take in the tournament and return a total number of points scored from all teams in all games

function calculateTotalPoints(tournamentInput){
    // console.log("calculating!")
    let total = 0
    for(let key in tournamentInput){
        let currentGame = tournamentInput[key]
        // console.log(currentGame.homeTeam)
        // console.log(currentGame.awayTeam)
        total += (currentGame.homeTeam + currentGame.awayTeam)

    }

    return total
}

// console.log(calculateTotalPoints(tournament))
// console.log(calculateTotalPoints(tournament2))






// printGameSummarys
// The printGameSummarys function will take in the tournament and return a string, joined by \n, of the game results for each game

/* 
const tournament = {
    "1": { homeTeam: 100, awayTeam: 85 },
    "2": { homeTeam: 98, awayTeam: 100 },
    "3": { homeTeam: 50, awayTeam: 51 },
    "4": { homeTeam: 10, awayTeam: 8 },
};

*/



function printGameSummarys(tournament){
    // console.log("printing brrrrrr");
    // "Game ${gameNumberHere}: Home team ${either beat or Lost to here} the away team ${homeTeamScoreHere}-${awayTeamScoreHere} \n"

    let result = "";
    for(let gameNum in tournament){
        let gameObject = tournament[gameNum]
        //if the homeTeam score is greater than awayTeam score -> "beat", else -> "lost to"
        let outcome;
        // if(gameObject.homeTeam > gameObject.awayTeam){
        //     outcome = "beat"
        // }else{
        //     outcome = "lost to"
        // }

        gameObject.homeTeam > gameObject.awayTeam ? outcome = "beat" :  outcome = "lost to";

    
        result += `Game ${gameNum}: Home team ${outcome} the away team ${gameObject.homeTeam}-${gameObject.awayTeam} \n`
    }

    return result;
}

// For example:

console.log(printGameSummarys(tournament)); //> "Game 1: Home team beat the away team 100-85 \n Game 2: Home team lost to the away team 98-100 \n etc;"
