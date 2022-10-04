const { expect } = require("chai");
const getUserName = require("../src/solution");

describe("Solution", () => {
  it("should return a string as a name", () => {
    const name = getUserName();
    if (typeof name === "string") {
      console.log(`Hello, ${name}!`);
    }
    expect(name).to.be.a("string");
  });
});
