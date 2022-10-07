

// Function declaration with a parameter of park
function ratingAsText(park) { 
    console.log("This is a function declaration.");
    // return park.rating > 4 ? "Excellent!" : "Good";
    // if(park.rating > 4){
    //     return "Excellent"
    // }else if(park.rating <=4 && park.rating > 2){
    //     return "It aiiiight"
    // }else{
    //     return "Nah"
    // }

    return park.rating > 4 ? "Excellent" : park.rating <=4 && park.rating > 2 ? "It aiiiight" : "Nah" 
}


// const ratingAsText2 = function ratingAsText(park) { 
//     console.log("This is a function declaration.");
//     // return park.rating > 4 ? "Excellent!" : "Good";
//     // if(park.rating > 4){
//     //     return "Excellent"
//     // }else if(park.rating <=4 && park.rating > 2){
//     //     return "It aiiiight"
//     // }else{
//     //     return "Nah"
//     // }

//     return park.rating > 4 ? "Excellent" : park.rating <=4 && park.rating > 2 ? "It aiiiight" : "Nah" 
// }


const ratingAsText2 = function (park) { 
    console.log("This is an anonymous function expression.");
    return park.rating > 4 ? "Excellent" : park.rating <=4 && park.rating > 2 ? "It aiiiight" : "Nah" 
}



let park1 = {
    name: "Cuvier Park",
    rating: 2
}


//calling the function (invoking the function) --> with any arguments the function expects (park1 is an argument)
console.log(ratingAsText2(park1))







