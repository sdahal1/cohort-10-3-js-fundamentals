/* 
1. addHeadingsAndImages-> make all <article>Puppy 1</article> look like 
        <article>
            <h2>Puppy 1</h2>
            <img src = "linkgoeshere">
        </article>
2. styleKittensandPuppies-> style all cats and dogs by adding the classlist "kitten" or "puppy" to the article containing either a kitten or a puppy
    eg: <article><h3>Puppy</h3></article> will look like <article class="puppy"><h3>Puppy 1</h3></article> and <article class="kitten"><h3>Kitten 1</h3></article>
3. separateCatsFromDogs
    -create a "kittens" section with the class of "kittens" to put kitten articles into
    -if the article has a kitten, remove it from that section and add it to a new section for kittens
*/

let images = [
    "https://media.tenor.com/BlHLysXBit4AAAAC/puppy-love-hi.gif",
    "https://media.tenor.com/PTBNHIGHS-kAAAAd/dog-smile.gif",
    "https://media.tenor.com/bK1qpWGyQKkAAAAM/kitty.gif",
    "https://media.tenor.com/avkEJ6QsXLcAAAAM/puppy.gif",
    "https://media.tenor.com/XybizgnL1zQAAAAM/kittens-cute.gif",
    "https://media.tenor.com/gZHJZ3gNDYwAAAAM/cute-cat.gif",
    "https://media.tenor.com/JMv_beVhW98AAAAM/perrete.gif",
    "https://media.tenor.com/g9bkJfFtovMAAAAM/dog.gif",
    "https://media.tenor.com/kKvpaWwGoPcAAAAM/stretch-kitty.gif",
    "https://media.tenor.com/WT7snNMnZoMAAAAM/luv-you-cute-kitten.gif"
];


//1
function addHeadingsAndImages(){
    //select all the articles
    let articles = document.querySelectorAll("article");
    console.log(articles)
    //for each article (how do i get each article form a list of articles?)
    for(let i=0; i<articles.length; i++){
        //current element in a variable
        let article = articles[i];
        //generate an h2 element
        let h2Element = document.createElement("h2")
        //make the h2 elements inner text be the articles inner text
        h2Element.innerText = article.innerText

        //remove teh innertext from article
        article.innerText = "";
        
        //insert the newly generated h2Element as a child to the current article element
        article.appendChild(h2Element)


        //create an img element
        let imgElem = document.createElement("img");

        //give the image element a source (src)
        imgElem.src = images[i];

        //insert the image into the dom-> 
        article.appendChild(imgElem)
    }
}

/* 
2. styleKittensandPuppies-> style all cats and dogs by adding the classlist "kitten" or "puppy" to the article containing either a kitten or a puppy
    eg: <article><h3>Puppy</h3></article> will look like <article class="puppy"><h3>Puppy 1</h3></article> and <article class="kitten"><h3>Kitten 1</h3></article>

*/

function styleKittensandPuppies(){
    //get all the articles
    let articles = document.querySelectorAll("article");
    //for each article
    for(let article of articles){
        //check if the article contains the text "Puppy" in it.
        if(article.innerText.toLowerCase().includes("puppy")){
            //if it has the word puppy in the text of the article, then give the article a css class of ".puppy"
            article.classList.add("puppy")
        }else{
            //if not, give css class of ".kitten"
            article.classList.add("kitten")
        }

    }
}


/* 
3. separateCatsFromDogs
    -create a "kittens" section with the class of "kittens" to put kitten articles into
    -if the article has a kitten, remove it from that section and add it to a new section for kittens
*/

function separateCatsFromDogs(){
    //create a section with the class of ".kittens"
    let kittensSection = document.createElement("section");
    kittensSection.classList.add("kittens")
    //select the row div i will insert the section into
    let rowdiv = document.querySelector(".row")
    //append the section to the dom as a child of the row div
    rowdiv.appendChild(kittensSection)

    //select all the articles so we can look at each one
    let articles = document.querySelectorAll("article");
    //for each article
    for(let article of articles){
        // console.log(article)
        //if the text has the word "kitten" in it
        if(article.innerText.toLowerCase().includes("kitten")){
            //add the current article to the kittens section as a child
            kittensSection.appendChild(article)
        }
    }
}




addHeadingsAndImages();
styleKittensandPuppies();
separateCatsFromDogs();






/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~solutions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

