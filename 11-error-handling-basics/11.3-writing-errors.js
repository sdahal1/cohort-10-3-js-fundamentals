// let bestBasketballPlayer = "Lebron James"

// let benjiOpinion = "Michael Jordan";

// if(benjiOpinion !== bestBasketballPlayer){
//     throw {message:"This is wrong. Please look at the documentation.Error code: GOAT", code: "GOAT_Incorrect"}
// }

// console.log("line should not run, app should crash here")

function one() {
    two();
}
function two() {
    three();
}
function three() {
    throw new Error("Here's the error");
}



one();
