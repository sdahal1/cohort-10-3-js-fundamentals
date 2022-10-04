console.log("We are gona find out the most popular artist from this cohort");

function identifyTopArtist(artist) {
    console.log("artist parameter has this-->", artist)
    return "I'm thinking the best artist right now is " + artist.firstname;
}


let artist1 = { 
    firstName: "Drake",
    lastName: "Hotline Bling" 
};


//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS
let result = identifyTopArtist(artist1)
console.log(result)