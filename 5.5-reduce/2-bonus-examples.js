const movies = [
    {
        title: "Austin Powers",
        views: 1000,
        producer: { 
            name: "Universal Studios",
            city: "Los Angeles"
        }
    },
    {
        title: "Finding Nemo",
        views: 2000,
        producer: { 
            name: "Disney",
            city: "Orlando"
        }
    },
    {
        title: "Forrest Gump",
        views: 3000,
        producer: { 
            name: "Universal Studios",
            city: "Los Angeles"
        }
    },
];


/* Add up all the views numbers */

function totalViews(movies){
    let result =  movies.reduce((total, movieObj, index)=>{
        //return a value to add to the total
        return total + movieObj.views
    }, 0)

    return result;
}

console.log(totalViews(movies))



/* given an array of movie objects, return an object where each key is a movie title, and the value is the producer name 
Example output:
{
  'Austin Powers': 'Universal Studios',
  'Finding Nemo': 'Disney',
  'Forrest Gump': 'Universal Studios'
}

*/

function movieAndProducerName(movies){
   let result = movies.reduce((resultObj, movieObj, index)=>{
        //create a key in the resultObj with the currentMovie's title as the key and the value being the current Movies producer's name
        resultObj[movieObj.title] = movieObj.producer.name;

        return resultObj;
   }, {})

   return result;
}


// console.log(movieAndProducerName(movies));

/* given an array of movie objects, return an object where each key is the producer name, and each value is an array of movies associated with that producer name 

example output: 

{
  "Universal Studios": [ 
    {
        title: "Austin Powers",
        views: 1000,
        producer: { 
            name: "Universal Studios",
            city: "Los Angeles"
        }
    },
    {
        title: "Forrest Gump",
        views: 3000,
        producer: { 
            name: "Universal Studios",
            city: "Los Angeles"
        }
    },
],
 "disney": [
     {
        title: "Finding Nemo",
        views: 2000,
        producer: { 
            name: "Disney",
            city: "Orlando"
        }
    },
 ]
}


*/

function movieByProducer(movies){
    let result = movies.reduce((resultObj, movieObj, index)=>{
        //if the reuslt object doest not have a key with the currrent movie objects's producer name, then make a key with the producer name and set the value to be an array containing the current movie
        let currentProducer = movieObj.producer.name;
        if(resultObj[currentProducer] === undefined){
            resultObj[currentProducer] = [movieObj] 
        }
        //else, if the object already has a key with the producer name, then add (push) to the array the current movie object
        else{
            resultObj[currentProducer].push(movieObj)
        }

        return resultObj

    }, {})

    return result;
}

console.log(movieByProducer(movies))