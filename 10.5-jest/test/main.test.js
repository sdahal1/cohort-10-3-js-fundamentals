const {getAverageRating, getLowRatedArtists, getArtistByName} = require("../src/main")

//with Jest, you dont need to import "chai" to be able to use the expect() function
// const expect = require("chai").expect; //chai is the assertion library


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

        expect(result).toBe(expected)
        // expect(result).toBeInstanceOf(Number)
        expect(typeof result).toEqual("number")

    })

    //each test is symbolized by the it() statement
    it("returns null if there are no artists given", ()=>{
        
        const expected = null

        const result = getAverageRating()

        expect(result).toEqual(expected)
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

        expect(result).toEqual(expected) //expect the result to deeply equal to the expected
        console.log('********************************************************')
        console.log(result)
        console.log('********************************************************')
        expect(Array.isArray(result)).toBe(true)

    })
})


describe("getArtistByName", ()=>{
    it("Should return an object representing the found artist by name", ()=>{
        const result = getArtistByName(artists, "Drake");

        const expected = { name: "Drake", rating: 9.8 }

        expect(result).toEqual(expected)
    })

    it("Should give back null if no artists are given",()=>{
        const result = getArtistByName();
        const expected = null;

        expect(result).toEqual(expected)
    })

    it("Should give back a string saying 'Name is required' if no artist name is given",()=>{
        const result = getArtistByName(artists);
        const expected = "Name is required";

        expect(result).toEqual(expected)
    })
})
