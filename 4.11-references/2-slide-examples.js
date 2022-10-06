let myNumber = 10;

function passedPrimitive(num) {
  num = 20;
}

passedPrimitive(myNumber);
console.log(myNumber);   // => 10




const mySequence = [1,2,3];

function passedComplex(arr) {
    // arr = mySequence
  arr.push(4);
}

passedComplex(mySequence);
console.log(mySequence);  // => [1,2,3,4]