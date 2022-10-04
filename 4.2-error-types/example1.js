let topArtists = [
    {name: "Drake", rating: 10},
    {name: "Taylor Swift", rating: 10},
    {name: "J Cole", rating: 8},
    {name: "Kendrick Lamar", rating: 9},
    {name: "Beatles", rating: 10}
]


function getRandomArtist(artists) {
    //generate a random num between 0 - last index of artists array
    let randomNum = Math.floor(Math.random()*artists.length)
    let randomArtist = artists[randomNum];
    return randomArtist
}

let dogName = "Junior"
if(1===1){
    dogName="Scooby doo"
}
console.log("i outside the loop", dogName)


// console.log("random num variable is this->", randomNum)
console.log(getRandomArtist(topArtists))
