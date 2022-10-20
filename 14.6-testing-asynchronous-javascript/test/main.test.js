const axios = require("../utils/axios");
const { index, createPlayer, showOnePlayer } = require("../src/main");

const BASE_URL = "http://localhost:5000";

describe("src/main.js", () => {
  describe("index()", () => { //describe is to indicate which function we are testing
    //our test data set
    const playersList =[
      {
        id: "1",
        name: "Lebron James",
        team: "Lakers",
        number_championships: 4,
        state: "California"
      },
      {
        id: "2",
        name: "Steph Curry",
        team: "Warriors",
        number_championships: 4,
        state: "California"
      },
      {
        id: "3",
        name: "Allen Iverson",
        team: "Sixers",
        number_championships: 0,
        state: "Pennsylvania"
      },
      {
        id: "4",
        name: "Luka Doncic",
        team: "Mavericks",
        number_championships: 0,
        state: "Dallas"
      },
      {
        id: "5",
        name: "Kobe",
        team: "Lakers",
        number_championships: 5,
        state: "California"
      },
      {
        id: "6",
        name: "Charles Barkley",
        team: "Suns",
        number_championships: 0,
        state: "Arizona"
      },
      {
        id: "7",
        name: "Michael Jordan",
        team: "Bulls",
        number_championships: 6,
        state: "Illinois"
      },
      {
        id: "8",
        name: "Kyrie Irving",
        team: "Nets",
        number_championships: 1,
        state: "New York"
      }
    ]

    beforeEach(() => { 
      jest.spyOn(axios, 'get');  //creates a jest mock function for axios.get()
    });
    
    afterEach(() => {
      jest.clearAllMocks(); //clear the mock test after the implementation. It doesnt need to spy on axios.get after we finish testing
    });

    it("should make a GET request to the appropriate URL", async () => { //any it() is a  test case for a function
      await index(); //calling on the index() function

      const expectedURL = `${BASE_URL}/players`; //indicating which url is the right url for the index() function's axios.get() call to call
      expect(axios.get).toHaveBeenCalledWith(expectedURL); //check if the axios.get() was called like this axios.get(`${BASE_URL}/players`)

    });

    it("should return a list of all players with more than 4 championships", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: playersList })); //i want the function to resolve this data

      const response = await index();
      
      const expected = [
        {
          id: "5",
          name: "Kobe",
          team: "Lakers",
          number_championships: 5,
          state: "California"
        },
        {
          id: "7",
          name: "Michael Jordan",
          team: "Bulls",
          number_championships: 6,
          state: "Illinois"
        }
      ]
      expect(response).toEqual(expected);
    });
    
    it("should log an error to the console", async () => {
      axios.get.mockImplementation(() =>
        Promise.reject(new Error("GET request failed."))
      );
      jest.spyOn(console, "error"); //spy on any console.error() calls 

      await index();

      expect(console.error).toHaveBeenCalledWith("GET request failed.");
    });
  });
  
  describe("createPlayer()", () => { //describe-> represents the function im testing
    //body represents the data we want to add (or post)
    const body =  {
      name: "Magic Johnson",
      team: "Lakers",
      number_championships: 5,
      state: "California"
    }
    
    // You can use this player data in your tests
    const newlyCreatedPlayer = { ...body, id: "9" }; //newLyCreatedPlayer will look like body, but it will also have an id of 9

    beforeEach(() => {
      jest.spyOn(axios, 'post');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a POST request to the appropriate URL with a valid data body", async () => {
      //how should the post request look like
      await createPlayer(body);

      //what url should axios.post be calledd with?
      let expectedURL = `${BASE_URL}/players`;

      expect(axios.post).toHaveBeenCalledWith(expectedURL, body);

    });

    it("should resolve with a promise containing the newly saved player", async () => {
      axios.post.mockImplementation(()=>{
        return Promise.resolve({data: newlyCreatedPlayer})
      })

      //test the createPlayer() function and store the return value
      const response = await createPlayer(body);

      expect(response).toEqual(newlyCreatedPlayer);

    });
    
    it("should log an error to the console", async () => {
      axios.post.mockImplementation(()=>{
        return Promise.reject(new Error("Post request failed fam."))
      })

      await createPlayer(body)
      jest.spyOn(console, "error") //spy on console.error()

      expect(console.error).toHaveBeenCalledWith("Post request failed fam.")
      

    });
  });
  
   describe("showOnePlayer()", () => {
    const player = {
      id: "1",
      name: "Lebron James",
      team: "Lakers",
      number_championships: 4,
      state: "California"
    }
     
    const { id } = player;

    beforeEach(() => {
      jest.spyOn(axios, 'get');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      
      await showOnePlayer(id);

      //what url should axios.get be calledd with?
      let expectedURL = `${BASE_URL}/players/${id}`;

      expect(axios.get).toHaveBeenCalledWith(expectedURL);
      

    });

    it("should resolve with a promise containing the player data", async () => {
      // Write your solution here

     
      axios.get.mockImplementation(()=>{
        return Promise.resolve({data:player})
      })

      //test the showOnePlayer() function is returning the data
      const response = await showOnePlayer(id);

      expect(response).toEqual(player);

    });
     
    it("should log an error to the console", async () => {
      // Write your solution here
      axios.get.mockImplementation(()=>{
        return Promise.reject(new Error("Get request failed fam."))
      })
      
      //keep track of console.error statements
      jest.spyOn(console, "error");
      await showOnePlayer(id)

      expect(console.error).toHaveBeenCalledWith("Get request failed fam.");

    });
  }); 
});  
