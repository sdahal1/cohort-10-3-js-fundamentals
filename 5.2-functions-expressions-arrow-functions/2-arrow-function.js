const location = {
    name: "Arches",
    state: "Utah",
    geo: {
        lat: 38.68,
        lon: -109.57,
    },
};

//anonymousFunction
const getLocationState = function (location) {
    return location.state;
};


/* 
AS a function expression

function getLocationState(){
    return location.state;
}

*/

//arrowFunction 

const getLocationStateArrow = location => {
    return location.state === "Utah"? "Camping time!" : "Glad to not be camping"
}

//arrow function with implicit return (only works if you only have one line of code in the function body, and that line of code is a return statement)
const getLocationStateArrowImplicitReturn = location => location.state === "Utah"? "Camping time!" : "Glad to not be camping"


console.log(getLocationStateArrowImplicitReturn(location))


