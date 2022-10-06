const authors = [
    {
        id: 1,
        name: {
            firstName: "Philip",
            surname: "Pullman",
        },
        series: ["His Dark Materials", "Sally Lockhart"],
    },
    {
        id: 2,
        name: {
            firstName: "Terry",
            lastName: "Pratchett",
        },
        series: ["Discworld", "Long Earth"],
    },
];

//given an array of authors, return back all the series
function getAllSeries(authors) {
    const result = []; //collect all the series into one array
    for (let i = 0; i < authors.length; i++) {
        //console.log(authors[i].series) //authors[i].series is an array

        //to make it more readable, put authors[i].series into a variable
        let currentSeries = authors[i].series;
        for (let j = 0; j < currentSeries.length; j++) {
            // console.log(authors[i].series[j])
            result.push(currentSeries[j]);
        }
    }

    // for (let i = 0; i < authors.length; i++) {
    //     for (let j = 0; j < authors[i].series.length; j++) {
    //         result.push(authors[i].series[j]);
    //     }
    // }
    return result;
}

// console.log(getAllSeries(authors))

function getSeriesListById(authors, id) {
    //selected will store the author who matches the given id
    let selected = null;

    for (let i = 0; i < authors.length; i++) {
        const author = authors[i];
        //if the curent author's id is === to the given id, then set selected to the author that matches
        if (author.id === id) selected = author;
    }

    //if an id is given
    if (id) {
        //if the 'selected' variable points to an author/ if it exists with data inside it
        if (selected) {
            const message = `Series list: ${selected.series.join(", ")}`;
            return message;
        } else {
            return [];
        }
    } else {
        //if no id is given
        return "No ID provided.";
    }
}

function getSeriesListByIdREADABLE(authors, id) {
    if (!id) return "No ID provided";

    //selected will store the author who matches the given id
    let selected = null;

    for (let i = 0; i < authors.length; i++) {
        const author = authors[i];
        //if the curent author's id is === to the given id, then set selected to the author that matches
        if (author.id === id) selected = author;
    }

    if (!selected) return []; //if the author with the given id does not exist, return []

    //if code reaches this point, that means we found an author with the given id
    const message = `Series list: ${selected.series.join(", ")}`;
    return message;
}

// console.log(getSeriesListByIdREADABLE(authors,10))

function moreThanThreeAuthors(authors) {
    // if (authors.length > 3) {
    //     return true;
    // } else {
    //     return false;
    // }

    return authors.length > 3
}


console.log(moreThanThreeAuthors(authors))





