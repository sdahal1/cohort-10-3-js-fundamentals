/* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.5 Event Listeners ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
//select the element that I want to add and event listener to

function highlightFavorites(){
    //select all the rate buttons
    let rateButtons = document.querySelectorAll(".rate-button")
    rateButtons.forEach((button)=>{
        //button represents each individual rate button in the rateButtons list
        //add the event listener to the sellected element
        button.addEventListener("click", (event)=>{
            console.log(event.target.parentElement.style.backgroundColor = "red")
        })
    })
}

function sortByName(){
    //select the element
    let nameSorter = document.querySelector("#name-sorter")

    //add an event listener to it for "click" events
    nameSorter.addEventListener("click",(event)=>{
        //will prevent the anchor tag's click event from doing its default behavior of reloading the page
        event.preventDefault();
        
        //get the main element that contains the content (parks) we want to sort
        const main = document.querySelector("main");

        // 2. Get the list of parks
        const parksList = main.querySelectorAll(".park-display");
        console.log(parksList)

        //3. clear out the contents inside the main element so that we can replace the existing contents with the sorted version
        main.innerHTML = "";

        //4. convert the nodelist of park elements into an array so that we can use the built in array method .sort()
        const parksArray = Array.from(parksList);
        console.log(parksArray)
        //5. sort the parksArray
        parksArray.sort((parkA, parkB)=>{
            let parkAName = parkA.querySelector("h2").innerText.toLowerCase();
            let parkBName = parkB.querySelector("h2").innerText.toLowerCase();
            if (parkAName < parkBName) {
                return -1;
              } else if (parkAName > parkBName) {
                return 1;
              } else {
                return 0;
              }
        })

        //each item inside parksArray is a section element
        parksArray.forEach(sectionElement=>{
            //insert the park section element as a child to the main element containing all the park section elements
            main.appendChild(sectionElement)
        })

    })
}


function sortByRating(){
    //select the element
    let ratingSorter = document.querySelector("#rating-sorter")

    //add an event listener to it for "click" events
    ratingSorter.addEventListener("click",(event)=>{
        //will prevent the anchor tag's click event from doing its default behavior of reloading the page
        event.preventDefault();
        
        //get the main element that contains the content (parks) we want to sort
        const main = document.querySelector("main");

        // 2. Get the list of parks
        const parksList = main.querySelectorAll(".park-display");

        //3. clear out the contents inside the main element so that we can replace the existing contents with the sorted version
        main.innerHTML = "";

        //4. convert the nodelist of park elements into an array so that we can use the built in array method .sort()
        const parksArray = Array.from(parksList);
        console.log(parksArray)
        //5. sort the parksArray
        parksArray.sort((parkA, parkB)=>{
            //sort them by rating
            let parkARating = parseFloat(parkA.querySelector(".rating-display .value").innerText);
            let parkBRating = parseFloat(parkB.querySelector(".rating-display .value").innerText);

            return parkBRating-parkARating;

        })

        //each item inside parksArray is a section element
        parksArray.forEach(sectionElement=>{
            //insert the park section element as a child to the main element containing all the park section elements
            main.appendChild(sectionElement)
        })

    })
}




function expandArticleBody() {
    //select all the "view stats" buttons so that we can attach event listener for "click" event to them
    let statsButtons = document.querySelectorAll(".expand_button");
    // console.log(statsButtons);

    //for each button in the statsButtons list i want to add an event listener for "click"
    statsButtons.forEach((button)=>{
        //button reps each button in the statsButtons list

        //attach an event listener to each button
        button.addEventListener("click",()=>{
            //what to do when the button is clicked

            //get access to the section that the button is inside of and that contains the stats div
            let relatedSection = button.parentElement.parentElement.parentElement;

            let statsDiv = relatedSection.querySelector(".stats")
            // console.log(statsDiv)

            //if the button says "View Stats", then do this
            if(button.innerText === "View Stats"){
                //change the statsDiv style (css) property for display: block;
                statsDiv.style.display = "block";
                button.innerText = "Hide Stats"
            }else{
                statsDiv.style.display = "none";
                button.innerText = "View Stats"
            }

            //or i could remove the ".hidden" class from its list classes
            // statsDiv.classList.remove("hidden");
        })
    })
}

function crossOffArticle() {
    //wheen the "mark visited" button is clicked, we want to change the text (strikethrough) in the section the button is inside of

    //find all teh mark-visited buttons
    let allVisitedButtons = document.querySelectorAll(".toggle-visited")

    //for each button in the list of allButtons, add event listener to it to listen for "click" events
    allVisitedButtons.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            let section = btn.parentElement.parentElement.parentElement;

            //if the button says "Mark Visited", then add teh cross off class to the section
            if(btn.innerText === "Mark Visited"){
                section.classList.add("cross-off")
                btn.innerText = "Unvisit"
            }else{
                //otherwise, remove teh "cross off" class from the section
                section.classList.remove("cross-off")
                btn.innerText = "Mark Visited"
            }

        })
    })

}
  
  
  
  
  /* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.6 form submissions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  
function main() {
    highlightFavorites();
    sortByName();
    sortByRating();
    expandArticleBody();
    crossOffArticle();
}


//only run the main function after the dom loads on the window/page
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Loaded!");
    main();
  });


  