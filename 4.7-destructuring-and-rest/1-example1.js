const car = {
    make: "Toyota",
    model: "Corolla",
    drive() {
        console.log("The car is driving!");
    },
};

// console.log(`The cars make is ${car.make}. The cars model is ${car.model}. When the car drives, it does ${car.drive}`)



// // Destructure values from car
// const { make, model, drive, numberOfWheels } = car;

// const {make, model, drive, numWheels} = car

// console.log(`make of car is ${make}`)

// drive()
// console.log(numWheels);



const product = {
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
      firstName: "Philip",
      surname: "Pullman",
    },
};

const {title, priceInCents, author:{firstName, surname}, author} = product;

// console.log(title);
// console.log(priceInCents);
// console.log(author);
// console.log(firstName);

const genres = [
    "Fantasy",
    "Fiction",
    "Nonfiction",
    "Science Fiction",
    "Young Adult",
    "Anotha one",
    "Self development"
  ];


// console.log(genres[0])
// console.log(genres[1])
// console.log(genres[3])

const [firstThang, secondThang,,mayTheFourthBeWithYou, ...thingsAfterFourth] = genres


console.log(firstThang, secondThang, mayTheFourthBeWithYou, thingsAfterFourth)




