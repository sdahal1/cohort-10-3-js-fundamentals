/* 


function addUserToDatabase(username) {
    if (!username || username.length < 3) {
        throw new Error("Must provide a username greater than 2 chars");
    }

    if (findUserInDatabase(username)) {
        throw new Error("Username already exists. Choose another.");
    }

    // All validations passed
    saveUserToDatabase(username);
    console.log("Successfully added person to database.");
}


let users = ["Benji", "Bjorn", "Brian"]

function findUserInDatabase(username){

    if(users.includes(username)){
        return true
    }else{
        return false
    }
}

function saveUserToDatabase(username){
    users.push(username)
}



try {
    addUserToDatabase("John"); // Successful
    addUserToDatabase("Brian"); // Will throw error and be caught below
    addUserToDatabase(); // Will throw error and be caught below
} catch (error) {
    console.log('********************************************************')
    // console.log(error)
    console.error(`${error.name}: ${error.message}`);
    console.log('********************************************************')
} finally{
    console.log("Okay we made it this far")
}


console.log("Phew! made it past the errors and we still runnin!")

*/



//Throwing an array of errors
function findPlayerAveragePoints(players={}, name){
    let errors = []
    //if player name is not in the players object, have an error
    if(! players[name]){
        // throw new Error("Player not found!")
        errors.push("Player not found");
    }
    //if player has not played any games, have an error
    if(players[name].points.length === 0){
        errors.push("Error, this player is benched.")
    }
    //if player has played in less than 2 games, have an error
    if(players[name].points.length < 2){
        errors.push("Error, this player has too much drama")
    }

    //throw all the errors if there are any errors
    if(errors.length >0){
        throw errors
    }else{
        let sum = players[name].points.reduce((total, num)=>{
            total+=num;
            return total
        },0)

        return sum/players[name].points.length
    }
    //else return the player Average points

}



/* 

let players = {
    "Lebron": {
        points: [30,22,32,26],
        team: "Lakers"
    },
    "Jordan": {
        points: [36,30,30,34],
        team: "Bulls"
    },
    "Rob": {
        points: [],
        team: "JavaScript-ers"
    },
    "Kyrie": {
        points: [25],
        team: "Nets"
    }
}

console.log(findPlayerAveragePoints(players, "Jordan"))
*/



function getRandomQuote(person) {
    try{
        let randomIndex = Math.floor(Math.random()* person.quotes.length)
        // console.log(randomIndex)
        return person["quotes"][randomIndex];
    }catch(error){
        return `Person has no quotes, here is the error ${error}`;
    }
}

const person1 = {
    name: "Michael Scott",
    quotes: [
        "An office is not for dying. An office is a place for living life to the fullest, to the max, to… an office is a place where dreams come true.",
        "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way.",
        "Do I have a special someone? Well, yeah, of course. A bunch of 'em. My employees.",
        "I love inside jokes. I hope to be a part of one someday.",
        "I'm an early bird and I'm a night owl so I'm wise and I have worms.",
    ],
    company: "Dunder Mifflin"
};


const person2 = {
    name: "Dwight Schrute",
    quotes: null,
    company: "Dunder Mifflin"
}


// console.log(getRandomQuote(person2));
// console.log(getRandomQuote(person1));
// console.log(getRandomQuote());



const locations = {
    40.35: {
        "-105.81": "ROCKY-MOUNTAINS",
        22.54: "KATERINI-GREECE",
    },
    28.66: {
        "-105.81": "CHIHUAHUA-MEXICO",
    }
};

function goToSecretLocation(lat, lon, passcode) {
    // console.log(lat);
    if (!lat || !lon || !passcode) {
        throw "latitude, longitude, and passcode are required!";
    }

    let result;
    try {
        // console.log(locations[lat]);
        if (locations[lat][lon] === passcode) {
            result = "Welcome.";
        } else {
            throw new Error("This is a new Error");
            // throw "Nothing to see here!";
        }
    } catch (error) {
        console.log(typeof error)
        if (typeof error === "string") {
            result = error;
        } else {
            console.log("jserror", error);
            console.log(error.name);
            console.log(error.message);

            //result ="You look around and don't see a thing.";
            result = "Not found fam";
        }
    }

    return result;
}

// console.log(goToSecretLocation());
// console.log(goToSecretLocation("0", 22.54, "ROCKY-MOUNTAINS"));
// console.log(goToSecretLocation(28.66, "-105.81", "CHIHUAHUA-MEXICO"));
console.log(goToSecretLocation(28.66, "-105.81", "Obie One Kanobie"));