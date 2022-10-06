const moment = require('moment'); // require
const faker = require('faker');


console.log(`wazzaaaaap at the time of ${moment().format("MMMM Do, YYYY - hh:mm")} `);

function teamGenerator(){
    let randomTeam = {
        name: faker.lorem.word(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country()
    }

    return randomTeam
}


console.log(teamGenerator())