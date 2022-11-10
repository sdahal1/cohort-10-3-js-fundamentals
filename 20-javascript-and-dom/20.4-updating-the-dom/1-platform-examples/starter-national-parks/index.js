const descriptions = document.querySelectorAll(".description-display")


console.log(descriptions)


for(let desc of descriptions){
    let shortDescription = desc.innerText.slice(0,20)
    // console.log(shortDescription)

    //update the desc element's inner text with teh shorterned version
    // setTimeout(()=>{
    
        desc.innerText = shortDescription;
        desc.innerHTML += "<a href='#'>...</a>";
    // },5000)
}



const ratings = document.querySelectorAll("div.rating-display .value");


for(let rating of ratings){
    console.log(rating.innerText)
    let ratingValue = parseFloat(rating.innerText)
    if(ratingValue> 4.7){
        //change the style of the rating element
        // rating.style.color = "green"
        // rating.style.backgroundColor = "blue";
        // rating.style.textDecoration = "underline"

        //add a class to the element
        rating.classList.add("high-rating")

    }else{
        // rating.style.color = "red"
    }
}



