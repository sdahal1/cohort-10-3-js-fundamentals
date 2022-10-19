const axios = require("../utils/axios");
const { index, createPlayer, showOnePlayer } = require("../src/main");

const BASE_URL = "http://localhost:5000";

const fs = require("fs");
const path = require("path");

// describe("src/main.js", () => {
//   describe("index()", () => {

//     const playersList =[
//       {
//         id: "1",
//         name: "Lebron James",
//         team: "Lakers",
//         number_championships: 4,
//         state: "California"
//       },
//       {
//         id: "2",
//         name: "Steph Curry",
//         team: "Warriors",
//         number_championships: 4,
//         state: "California"
//       },
//       {
//         id: "3",
//         name: "Allen Iverson",
//         team: "Sixers",
//         number_championships: 0,
//         state: "Pennsylvania"
//       },
//       {
//         id: "4",
//         name: "Luka Doncic",
//         team: "Mavericks",
//         number_championships: 0,
//         state: "Dallas"
//       },
//       {
//         id: "5",
//         name: "Kobe",
//         team: "Lakers",
//         number_championships: 5,
//         state: "California"
//       },
//       {
//         id: "6",
//         name: "Charles Barkley",
//         team: "Suns",
//         number_championships: 0,
//         state: "Arizona"
//       },
//       {
//         id: "7",
//         name: "Michael Jordan",
//         team: "Bulls",
//         number_championships: 6,
//         state: "Illinois"
//       },
//       {
//         id: "8",
//         name: "Kyrie Irving",
//         team: "Nets",
//         number_championships: 1,
//         state: "New York"
//       }
//     ]

//     beforeEach(() => {
//       jest.spyOn(axios, 'get');
//     });
    
//     afterEach(() => {
//       jest.clearAllMocks();
//     });

//     it("should make a GET request to the appropriate URL", async () => {
//       await index();
//       const expectedURL = `${BASE_URL}/players`;
//       expect(axios.get).toHaveBeenCalledWith(expectedURL);
//     });

//     it("should return a list of all players with more than 4 championships", async () => {
//       axios.get.mockImplementation(() => Promise.resolve({ data: playersList })); //i want the function to resolve this data

//       const response = await index();
      
//       const expected = [
//         {
//           id: "5",
//           name: "Kobe",
//           team: "Lakers",
//           number_championships: 5,
//           state: "California"
//         },
//         {
//           id: "7",
//           name: "Michael Jordan",
//           team: "Bulls",
//           number_championships: 6,
//           state: "Illinois"
//         }
//       ]
//       expect(response).toEqual(expected);
//     });
    
//     it("should log an error to the console", async () => {
//       axios.get.mockImplementation(() =>
//         Promise.reject(new Error("GET request failed."))
//       );
//       jest.spyOn(console, "error");

//       await index();

//       expect(console.error).toHaveBeenCalledWith("GET request failed.");
//     });
//   });
  
//   describe("createPlayer()", () => {
//     const body =  {
//       name: "Magic Johnson",
//       team: "Lakers",
//       number_championships: 5,
//       state: "California"
//     }
    
//     // You can use this student data in your tests
//     const newlyCreatedPlayer = { ...body, id: "9" };

//     beforeEach(() => {
//       jest.spyOn(axios, 'post');
//     });
    
//     afterEach(() => {
//       jest.clearAllMocks();
//     });

//     it("should make a POST request to the appropriate URL with a valid data body", async () => {
//       await createPlayer(body);
//       const expectedURL = `${BASE_URL}/players`;
//       expect(axios.post).toHaveBeenCalledWith(expectedURL, body);
//     });

//     it("should resolve with a promise containing the newly saved player", async () => {
//       axios.post.mockImplementation(() => Promise.resolve({ data:newlyCreatedPlayer }));

//       const response = await createPlayer(body);
      
//       const expected = newlyCreatedPlayer
//       expect(response).toEqual(expected);
//     });
    
//     it("should log an error to the console", async () => {
//       axios.post.mockImplementation(() => Promise.reject(new Error("Post request failed homie")));
      
//       const response = await createPlayer();
//       jest.spyOn(console, "error");
//       expect(console.error).toHaveBeenCalledWith("Post request failed homie")
//     });
//   });
  
//    describe("showOnePlayer()", () => {
//     const player = {
//       id: "1",
//       name: "Lebron James",
//       team: "Lakers",
//       number_championships: 4,
//       state: "California"
//     }
     
//     const { id } = player;

//     beforeEach(() => {
//       jest.spyOn(axios, 'get');
//     });
    
//     afterEach(() => {
//       jest.clearAllMocks();
//     });

//     it("should make a GET request to the appropriate URL", async () => {
//       await showOnePlayer(id);
//       const expectedURL = `${BASE_URL}/players/${id}`;
//       expect(axios.get).toHaveBeenCalledWith(expectedURL);
//     });

//     it("should resolve with a promise containing the player data", async () => {
//       // Write your solution here
//       axios.get.mockImplementation(() => Promise.resolve({ data:player }));

//       const response = await showOnePlayer(id);
      
//       const expected = player
//       expect(response).toEqual(expected);
//     });
     
//     it("should log an error to the console", async () => {
//       // Write your solution here
//       axios.get.mockImplementation(() => Promise.reject(new Error("Couldn't find the homie")));

//       await showOnePlayer();
//       jest.spyOn(console, "error");
      
//       expect(console.error).toHaveBeenCalledWith("Couldn't find the homie");
//     });
//   }); 
// }); 

describe("main.test.js", () => {
  const solutionTestsFilePath = path.join(__dirname, "main.test.js");
  const solutionTestContent = fs.readFileSync(solutionTestsFilePath, "utf-8");
  
  it("should use the expect syntax", () => {
    expect(solutionTestContent).toContain("expect");
  });

  it("should use the describe syntax", () => {
    expect(solutionTestContent).toContain("describe");
  });
  
  it("should use axios.get.mockImplementation syntax", () => {
    expect(solutionTestContent).toContain("axios.get.mockImplementation");
  });
  
  it("should use axios.post.mockImplementation syntax", () => {
    expect(solutionTestContent).toContain("axios.post.mockImplementation");
  });

});

