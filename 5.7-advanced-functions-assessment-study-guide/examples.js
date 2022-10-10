const books = [
    {
        id: 1,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        publisher: { 
            name: "Simon & Schuster",
            state: "Maryland" 
        },
    },
    {
        id: 2,
        title: "How to win friends and influence People",
        author: "Dale Carnegie",
        publisher: { 
            name: "Simon & Schuster",
            state: "Maryland" 
        },
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        publisher: { 
            name: "Warner Books",
            state: "California" 
        },
    },
    {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        publisher: { 
            name: "Penguin Books",
            state: "Maryland" 
        },
    },
];

const students = {
    "Lebron": {
        finished: [1,2],
        notFinished: [3,4],
    },
    "Steph": {
        finished: [1],
        notFinished: [2,3,4],
    },
    "Jessie": {
        finished: [1,3,4],
        notFinished: [2],
    }
};



/*
1. Get books by publisher name

*/

function getBooksByPublisherName(books=[], publisherName=""){
    let result = books.filter((bookObj)=>{
        //for each bookObj, if its publisher is equal the given publisherName, then return it to our filtered array
        if(bookObj.publisher.name === publisherName){
            return bookObj
        }
    })
    return result
}

// console.log(getBooksByPublisherName())


/* 
2. Get a students finished books

Write a function that takes an array of books, object containing all students, and a student name.
It will return an array of book objects that represent the books that the given user has finished.
*/

function getStudentsFinishedBooks(books =[], students= {}, studentName = ""){
    //put the given students finished books in a variable
    let finishedBooks = students[studentName].finished;

    //loop through books object, and for each book object, give back the books whose id is inside the finishedBooks array
    let filteredBooks = books.filter(bookObj=>{
        //.includes is also an array method where you can check if the array contains/includes a given value
        if(finishedBooks.includes(bookObj.id)){
            return bookObj
        }
    })

    return filteredBooks
}

// console.log(getStudentsFinishedBooks(books, students, "Jessie"))



/* 
3. Find if a given student has read all the books from a given publisher. Return true or false

Function inputs: list of books, object containing all students, publisher name, student name

*/

function hasStudentReadAllBooksFromGivenPublisher(books=[], students={}, publisherName="", studentName=""){
    //first find all the books from a given publisher-> we have already built a function that does this so lets use it
    let booksByPublisher = getBooksByPublisherName(books, publisherName);
    
    //get the book ids that the given student has read
    let booksReadByStudent = students[studentName].finished

    //for every book object in booksByPublisher, return true if EVERY bookObj's id is inside of the array of book ids that the given student has read 
    return booksByPublisher.every((bookObj)=>{
        return booksReadByStudent.includes(bookObj.id)
    })

    /* 
    short way to write it is

    return booksByPublisher.every((bookObj)=> booksReadByStudent.includes(bookObj.id))
    */
}

// console.log(hasStudentReadAllBooksFromGivenPublisher(books, students, "Simon & Schuster", "Steph"));




/* 
4. Given an object containing all students, and two student names, determine if the first student has read any books that the second student has not read yet. If so, return true. If the first student has not read any books the second student has not read, return false.

*/

function usersReadBooksMatch(students={}, student1Name="", student2Name=""){
    //find the book ids that student1 has read
    let student1Finished = students[student1Name].finished;
    //find the book ids that student2 has not finished
    let student2unfinished = students[student2Name].notFinished;

    //we want to see if ANY of the books that student2 has not finished appear in the array of books that student 1 has finished
    let result = student2unfinished.some(bookId=>{
        return student1Finished.includes(bookId)
    })

    return result
}


// console.log(usersReadBooksMatch(students, "Lebron", "Steph"));




/* 
5. Return an array of all the student names who have read any book in the given student's notFinished list

Inputs: object of students, student name

*/

function studentsWhoFinishedGivenStudentsUnfinishedBooks(students={}, studentName=""){
    //get given students notFinished books
    let notFinishedBooks = students[studentName].notFinished;

    let studentNameList = []
    //for each student, use the usersReadBookMatch function above to see if the student has read anyBooks in the givenStudents unfinishedBooks array
    for(let currStudentName in students){
        //hasCurrentStudentReadTheBooks will be either true of false depending on if the currentStudent has read any of the books that the given student has not finished
        let hasCurrentStudentReadTheBooks = usersReadBooksMatch(students, currStudentName, studentName)

        //if the current student has read at least one book from the given students unfinished list, then push that students name to our result array called studentNameList
        if(hasCurrentStudentReadTheBooks === true){
            studentNameList.push(currStudentName)
        }
    }
    return studentNameList
}

// console.log(studentsWhoFinishedGivenStudentsUnfinishedBooks(students, "Steph"));











