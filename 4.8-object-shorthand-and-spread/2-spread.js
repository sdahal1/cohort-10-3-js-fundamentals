const ownedBooks = ["Infernal Devices", "Foundation"];
const wishlist = ["Good Omens", "Guards! Guards!"];

//combine arrays using .concat()
let combined = ownedBooks.concat(wishlist)

// console.log(combined);

let combinedAnotherWay = [...ownedBooks, ...wishlist ]
// console.log(combinedAnotherWay);


//this does not make a copy. ownedBooksV2 is just a reference to the SAME array as ownedBooks. If you modify v2, it also modifies the originial
const ownedBooksV2 = ownedBooks;


//modify owenedBooksV2
ownedBooksV2[1] = "The Foundation!!!"
// console.log(ownedBooksV2)//they are the same array!
// console.log(ownedBooks)//they are the same array!


//this makes a copy since its not an array or object!
let x = 5
let y = x

y++;
// console.log(x,y)


const owenedBooksV3 = [...ownedBooks] //this makes a brand new copy called ownedBooksV3

owenedBooksV3[0] = "Wazzaaaa"
// console.log(ownedBooks, owenedBooksV3);



let song = {
    title: "Good Life",
    artist: "Kanye",
    albums: ["A", "B", "C"],
}

//this does not make a copy! to make a copy of an object or array, you need the spread operator!
// let song2 = song;
// song2.title = "Power";

//this makes a copy using the spread operator
let song2 = {...song};
let song3 = {...song};
song3.title = "Heard em say";
// console.log(song3)
// console.log(song)

let allSongs = {song:song, song2, song3}

console.log(allSongs)
// console.log(allSongs.song2)
// allSongs.song2.title = "Best life"

// console.log(allSongs)
// console.log(song2)


