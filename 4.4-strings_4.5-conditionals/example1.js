let topArtists = [
    { name: "Drake", rating: 10 },
    { name: "Taylor Swift", rating: 10 },
    { name: "J Cole", rating: 8 },
    { name: "Kendrick Lamar", rating: 9 },
    { name: "Beatles", rating: 10 },
];

function getRandomArtist(artists) {
    //generate a random num between 0 - last index of artists array
    let randomNum = Math.floor(Math.random() * artists.length);
    let randomArtist = artists[randomNum];
    return randomArtist;
}

let grammyWinner = getRandomArtist(topArtists);

// console.log("The award for best artist goes to " + grammyWinner.name + " with a rating of " + grammyWinner.rating);

// console.log(`The award for best artist goes to ${grammyWinner.name} with a rating of ${grammyWinner.rating}`)

function sentenceCase(sentence) {
    const firstCharacter = sentence[0];
    let result = firstCharacter.toUpperCase();

    for (let i = 1; i < sentence.length; i++) {
        const character = sentence[i];
        result += character.toLowerCase();
        // console.log(character)
    }

    return result;
}

let famousQuote =
    "it IS Not The MOUNTAINS Ahead tHat wiLL wear you oUt, Its the pebble in yOuR sHoE.";

// famousQuote += "!";
// console.log(famousQuote);

console.log(sentenceCase(famousQuote));

console.log(famousQuote.substr(3, 20));

function sentenceCase2(sentence) {
    const first = sentence.substr(0, 1);
    const rest = sentence.substr(1);

    return first.toUpperCase() + rest.toLowerCase();
}

console.log(sentenceCase2(famousQuote));
