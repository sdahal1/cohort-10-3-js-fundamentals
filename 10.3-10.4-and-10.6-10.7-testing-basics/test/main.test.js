const {getAverageRating, getLowRatedArtists, getArtistByName} = require("../src/main")

const expect = require("chai").expect; //chai is the assertion library

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


//describe is to group tests related to a function
describe("getAverageRating", ()=>{
    //each test is symbolized by the it() statement
    it("gets the average rating of all the artists form the given array", ()=>{
        

        const expected = 8.1

        //the results we actually get is derived from calling the function
        let result = getAverageRating(artists)

        expect(result).to.equal(expected)
        expect(result).to.be.a('number')

    })

    //each test is symbolized by the it() statement
    it("returns null if there are no artists given", ()=>{
        
        const expected = null

        const result = getAverageRating()

        expect(result).to.equal(expected)
    })
})


describe("getLowRatedArtists", ()=>{

    it("get all the artists who are rated lower than a given number", ()=>{

        const result = getLowRatedArtists(artists, 7)

        const expected = [
            { name: "Rob", rating: 6.25 },
            {
                name: "Random guy from beach who asked me to follow his sound cloud",
                rating: 5,
            }
        ]

        //.equal does not work here, because objects and arrays are refernece datatypes

        //use .equal to compare primitive data types (numbers, strings, booleans)

        //use .eql to compare reference data types (objects and arrays)

        expect(result).to.eql(expected) //expect the result to deeply equal to the expected

        expect(result).to.be.an("array") //expect the result to be a data type of an array

    })
})


describe("getArtistByName", ()=>{
    it("Should return an object representing the found artist by name", ()=>{
        const result = getArtistByName(artists, "Drake");

        const expected = { name: "Drake", rating: 9.8 }

        expect(result).to.eql(expected)
    })

    it("Should give back null if no artists are given",()=>{
        const result = getArtistByName();
        const expected = null;

        expect(result).to.equal(expected)
    })

    it("Should give back a string saying 'Name is required' if no artist name is given",()=>{
        const result = getArtistByName(artists);
        const expected = "Name is required";

        expect(result).to.equal(expected)
    })
})
