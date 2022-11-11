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


function submitHandler(event){
    event.preventDefault() //this will prevent the form submit event from reloading the page
    console.log("submitting form!", event.target) //event.target is the form element that was submitted
    let formData = new FormData(event.target);
    
    //pass the formData to the validateForm function to see if there are any validation errors
    let errors = validateForm(formData)
    
//    console.log(errors)


    // Clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
        element.style.display = "none";
    }
    // Display any new errors. Object.keys gives an array of the keys from the error object
    Object.keys(errors).forEach((key) => {
        // Find the specific error element
        const errorElement = document.querySelector(`#${key}-form .error`);
        errorElement.innerHTML = errors[key]; //errors[key] will give teh error message
        errorElement.style.display = "block";
  });

  
  if(Object.keys(errors).length === 0){ //if there are no errors, then add the form info the dom

   

    //create a section element to put the form data indide of
    let sectionElem = document.createElement("section");
    sectionElem.classList.add("park-display");

    let content = `<h2>${formData.get("name")}</h2>
    <div class="location-display">${formData.get("location")}</div>
    <div class="description-display">${formData.get("description")}</div>
    <button class="rate-button" title="Add to Favourites">&#9734;</button>
    <div class="stats hidden">
      <div class="established-display stat">
        <h3>Established</h3>
        <div class="value">${formData.get("established")}</div>
      </div>
      <div class="area-display stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}</div>
      </div>
      <div class="rating-display stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
    </div>`

    //populate teh section element with the content from above ^^
    sectionElem.innerHTML = content;


     //select the element that we will insert the section element into on the page
     let main = document.querySelector("main");

     main.appendChild(sectionElem);

  }
}


//validates if the given value has characters inside it (not empty)
function validateExists(value) {
    //return true if value contains characters (aside from spaces), false if it doesn't
    return value && value.trim(); //.trim removes spaces from beginning and end of string
}

//returns true if value is number, false if not
function validateNumber(value) {
    return !isNaN(value);
  }


//returns true if value is within a given range of min and max
function validateRange(value, min, max) {
    return value >= min && value <= max;
}


function validateForm(formData) {
    const errors = {};
  
    // Check if name was entered
    if (!validateExists(formData.get("name"))) {
      errors.name = "Please enter a name";
    }
    
    // Check if rating was entered
    if (!validateExists(formData.get("rating"))) {
      errors.rating = "Please enter a rating";
    }else{
        //if rating value is inputted, we must also check that its a number and that its within a cretain range

        // Check if the rating is not a number, then generate error message
        if (!validateNumber(formData.get("rating"))) {
            errors.rating = "Rating must be a number";
        } else { //else if it is a number
            // Because it is a number, convert it
            const rating = Number.parseFloat(formData.get("rating"));
            // Check that the rating is between 1 and 5, inclusive
            if (!validateRange(rating, 1, 5)) {
                errors.rating = "Rating must be between 1 and 5 inclusive";
            }
        }
    }
    //{name: "Please enter a name", rating: "Please enter a rating" }
  
    // Check if description was entered
    if (!validateExists(formData.get("description"))) {
      errors.description = "Please enter short description";
    }
  
    // Check if established date was entered
    if (!validateExists(formData.get("established"))) {
      errors.established = "Please enter date";
    }
  
    // Check if area was entered
    if (!validateExists(formData.get("area"))) {
      errors.area = "Please enter the area of the park";
    }
  
    // Check if location date was entered
    if (!validateExists(formData.get("location"))) {
      errors.location = "Please enter the location of the park";
    }
    return errors;
  }




/*~~~~~~~~~~~~~~~~~~~~~ assessment hints ~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//when the form submits, check if the input in the search bar is not empty. if its empty, render this div at the bottom of the form  <divclass="error"id="searchError">Please enter a search term</div>

//1. make sure in the main() function you attach an event listner to the form for submit events

function searchFormSubmitHandler(event){
    //prevent form submission from reloading the page
    event.preventDefault();
    console.log("searching...");

    let h2Elements = document.querySelectorAll(".park-display h2");
        // console.log(h2Elements)

        //for each h2 element in the h2elements list, check if its inner text is equal to the search term. if it is not, then hide the section it belongs to
        h2Elements.forEach(h2=>{
            //check if its inner text is NOT equal to the search term, then hide/remove teh element its inside of
            let section = h2.parentElement;
            section.classList.remove(".hidden");
        })

    //get the form data in a variable
    let formData = new FormData(event.target);
    let searchTerm = formData.get("searchTerm").toLowerCase();

    if(searchTerm && searchTerm.trim()){ //if a valid input was typed then search
        //search through the h2 of every section. first get all the section h2's
        let h2Elements = document.querySelectorAll(".park-display h2");
        // console.log(h2Elements)

        //for each h2 element in the h2elements list, check if its inner text is equal to the search term. if it is not, then hide the section it belongs to
        h2Elements.forEach(h2=>{
            //check if its inner text is NOT equal to the search term, then hide/remove teh element its inside of
            let section = h2.parentElement;
            

            // console.log(h2.innerText.toLowerCase() === searchTerm);
            if(h2.innerText.toLowerCase().includes(searchTerm) === false){
                section.classList.add("hidden");
            }else{ 
                section.classList.remove("hidden");
            }
        })

    }else{
        //if the searchTerm was empty, generate an error div: <div class="error" id="searchError">Please enter a search term</div>

        //create a div to put the error message into
        let errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        errorDiv.id = "searchError";
        errorDiv.innerText = "Please enter a search term";
        console.log(errorDiv)

        //select the element i want to put the error div inside
        let searchForm = document.querySelector("#searchForm");

        //put the error div as a child to the search form
        searchForm.appendChild(errorDiv);

    }

}

  
function main() {
    highlightFavorites();
    sortByName();
    sortByRating();
    expandArticleBody();
    crossOffArticle();

    //attach an event listener for the form so it know when we submit the form
    let parkForm = document.querySelector("#park-form");
    parkForm.addEventListener("submit",submitHandler)

    let searchForm = document.querySelector("#searchForm");
    searchForm.addEventListener("submit", searchFormSubmitHandler);

}


//only run the main function after the dom loads on the window/page
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Loaded!");
    main();
  });


  