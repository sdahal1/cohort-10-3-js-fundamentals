const artists = [
    { name: "Taylor Swift", rating: 9 },
    { name: "Drake", rating: 9.8 },
    { name: "J Cole", rating: 8 },
    { name: "Rob", rating: 6.25 },
    { name: "Kendrick Lamar", rating: 8.5 },
    { name: "Beatles", rating: 10 },
    {
        name: "Random guy from beach who asked me to follow his sound cloud",
        rating: 5,
    }
];



//get the average rating of all the artists form the given array
function getAverageRating(artists = []) {
    if(artists.length===0)return null;

    let sum = artists.reduce((sum, artistObj) => {
        sum += artistObj.rating;
        return sum;
    }, 0);

    let average = sum / artists.length;
    return Number(average.toFixed(1))
}


// get all the artists who are rated lower than a given number

function getLowRatedArtists(artists = [], rating) {
    let artistsWithLowRating =  artists.filter(artistObj=>{
        return artistObj.rating < rating
    })

    return artistsWithLowRating;
}


//get artist by name
function getArtistByName(artists=[], name){
    if(artists.length === 0){
        return null
    }
    if(!name){
        return "Name is required"
    }
    return artists.find(artistObj=>artistObj.name === name)
}



module.exports = {getAverageRating, getLowRatedArtists, getArtistByName};