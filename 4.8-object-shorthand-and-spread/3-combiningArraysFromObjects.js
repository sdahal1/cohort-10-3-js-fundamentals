let players = {
    player1: {
        firstName: "Lebron",
        lastName: "James",
        points: 32000,
        teams: ["Cavs", "Heat"]
    },
    player2: {
        firstName: "Kobe",
        lastName: "Bryand",
        points: 30000,
        teams: ["Lakers", "Team USA"]
    }

}


function joinTeams(obj){
    let result = []
    for(let player in obj){
        //player represents a key from the obj
        console.log(obj[player]) //obj[player] represents each player object

        //obj[player].teams represents the teams array for that player eg: ["Cavs", "Heat"]
        result.push(...obj[player].teams) //push to the result array, a copy of the teams array form the current player
    }
    return result
}


function checkIfPlayerIsInTeam(obj, teamName){
    
    for(let player in obj){
        //player represents a key from the obj
        console.log(obj[player]) //obj[player] represents each player object
        if(obj[player].teams.includes(teamName)){
            console.log("team foudn for the player named " + obj[player].firstName)
        }
    }
}

// console.log(joinTeams(players))

// checkIfPlayerIsInTeam(players, "Lakers")






let player1 =  {
    firstName: "Lebron",
    lastName: "James",
    points: 32000,
    teams: ["Cavs", "Heat"]
}

let player2 =  {
    firstName: "Kobe",
    lastName: "Bryand",
    points: 30000,
    teams: ["Lakers", "Team USA"]
}


function combine2objectTeams(player1, player2){
    // console.log(`PLayer 1 was on ${player1.teams.join(", ")}`)
    return [...player1.teams, ...player2.teams]
}


// console.log(combine2objectTeams(player1, player2))



//given a player object and a team name, add the team name to the player objects list of teams. Return the object with their first and last name combined into a full name, and also add to the teams arry the teamName
function updatePlayer(player, teamName) {
	const {firstName, lastName, points, teams} = player;

    teams.push(teamName) //add the given teamName to the array of teams
    console.log(teams)

    let result = {
        fullName:`${firstName} ${lastName}`,
        points,
        teams
    }
    return result
}


console.log(updatePlayer(player1, "Lakers"))




