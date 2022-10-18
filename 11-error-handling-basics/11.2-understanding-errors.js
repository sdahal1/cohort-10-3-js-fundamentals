// const someFunction = require("./wazza")

// Import JavaScript's fs library (used to read and write text files)
const fs = require('fs')
// Attempt to read the idontexist.txt file
const content = fs.readFileSync("idontexist.txt")