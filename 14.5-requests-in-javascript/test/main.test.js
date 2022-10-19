// Uncomment the following to see STDERR of the server
//process.env.NODE_ENV = "dev";

const axios = require("../utils/axios");
const { getAllPlayerNames, getPlayersByState } = require("../src/main");

jest.mock('axios');
const BASE_URL = "http://localhost:5000";

const data = [
  {
    "id": "1",
    "name": "Lebron James",
    "team": "Lakers",
    "number_championships": 4,
    "state": "California"
  },
  {
    "id": "2",
    "name": "Steph Curry",
    "team": "Warriors",
    "number_championships": 4,
    "state": "California"
  },
  {
    "id": "3",
    "name": "Allen Iverson",
    "team": "Sixers",
    "number_championships": 0,
    "state": "Pennsylvania"
  },
  {
    "id": "4",
    "name": "Luka Doncic",
    "team": "Mavericks",
    "number_championships": 0,
    "state": "Dallas"
  },
  {
    "id": "5",
    "name": "Kobe",
    "team": "Lakers",
    "number_championships": 5,
    "state": "California"
  },
  {
    "id": "6",
    "name": "Charles Barkley",
    "team": "Suns",
    "number_championships": 0,
    "state": "Arizona"
  },
  {
    "id": "7",
    "name": "Michael Jordan",
    "team": "Bulls",
    "number_championships": 6,
    "state": "Illinois"
  },
  {
    "id": "8",
    "name": "Kyrie Irving",
    "team": "Nets",
    "number_championships": 1,
    "state": "New York"
  }
];
describe("Assignment", () => {

  describe("getAllPlayerNames()", () => {
    

    const resp = {data: data};

    beforeEach(() => {
      jest.spyOn(axios, 'get');
      axios.get.mockImplementation(() => Promise.resolve(resp));
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      await getAllPlayerNames();
      const expectedURL = `${BASE_URL}/players`;
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });
    
    it("should log an array of names from all the players", async () => {
      const spy = jest.spyOn(console, 'log').mockImplementation();
      await getAllPlayerNames();
      expect(console.log).toBeCalledWith(["Lebron James", "Steph Curry", "Allen Iverson", "Luka Doncic", "Kobe", "Charles Barkley", "Michael Jordan", "Kyrie Irving"]);
    });
  });
  
  describe("getPlayersByState()", () => {
    
    const resp = {data: data};
    
    beforeEach(() => {
      jest.spyOn(axios, 'get');
      axios.get.mockImplementation(() => Promise.resolve(resp));
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      await getPlayersByState("California");
      const expectedURL = `${BASE_URL}/players`;
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });

    it("should log only those players who come from the given state", async () => {
      await getPlayersByState("California");
      expect(console.log).toHaveBeenCalledWith([
        {
          "id": "1",
          "name": "Lebron James",
          "team": "Lakers",
          "number_championships": 4,
          "state": "California"
        },
        {
          "id": "2",
          "name": "Steph Curry",
          "team": "Warriors",
          "number_championships": 4,
          "state": "California"
        },
        {
          "id": "5",
          "name": "Kobe",
          "team": "Lakers",
          "number_championships": 5,
          "state": "California"
        }
      ]);
    });
  });
});