console.log("wazzaaap");

//document.querySelector() --> to select one elements;
//document.querySelectorAll() --> to select multiple elements;



let h1 = document.querySelector("h1");

let biscayneSection = document.querySelector(".park-display");

let allEstablishedDates = document.querySelectorAll(".established-display .value");
console.log(allEstablishedDates)



let allAreas = document.querySelectorAll(".area-display .value");
console.log(allAreas)



function toggleBorder(){
    // //if it has a border then remove it, if not, add a red border
    // if(biscayneSection.style[0]=== undefined){
    //     biscayneSection.style = "border: 2px solid red;"
    // }else{
    //     biscayneSection.style = ""
    // }
    for(let i = 0; i<allEstablishedDates.length; i++){
        console.log(allEstablishedDates[i].innerText)
        allEstablishedDates[i].innerText= 1919
    }

}

// console.log(h1);
// console.log(biscayneSection);
