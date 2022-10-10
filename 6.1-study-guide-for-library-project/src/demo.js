//import data
const courses = require("../data/courses")
const instructors = require("../data/instructors")
const students = require("../data/students")



//1. Get Total courses count
function getTotalCoursesCount(courses=[]) {
    return courses.length
}

// console.log(getTotalCoursesCount())

//2. Get Total students count
function getTotalStudentsCount(students=[]) {
    return students.length
}

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id
function findInstructorById(instructors, id) {
    let result = instructors.find((instructorObj)=>{
        return instructorObj.id === id;
    })

   return result? result: null;
    //instructors.find((instructorObj)=>instructorObj.id === id
    
}

// console.log(findInstructorById(instructors, 40))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id
function findCourseById(courses, id) {
    let result = courses.find((courseObj)=>{
        return courseObj.id === id;
    })

   return result? result: null;
    //courses.find((courseObj)=>courseObj.id === id
}

// console.log(findCourseById(courses, 60))

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students, id) {
    let result = students.find((studentObj)=>{
        return studentObj.id === id;
    })

   return result? result: null;
    //students.find((studentObj)=>studentObj.id === id
}

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students) {
    students.sort((stuA, stuB)=>{
        //a-b way for alphabetize
        return stuA.name.first.toLowerCase() < stuB.name.first.toLowerCase()? -1 : 1
    })

    return students;
}

// console.log(sortStudentsByFirstName(students))

/* 
7. Partition courses by student on pace
find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace

[[{},{},{}], [{},{},{}]]

*/

function partitionCoursesByStudentProgress(courses) {
   //go through the courses array, and filter for the courses where the courseObj.roster has at least one student who is not on pace
    let notOnPaceCourses = courses.filter((courseObj)=>{
        let roster = courseObj.roster;

        //are any of the students in the roster for this courseObj not on pace?
        let isNotOnPace = roster.some(currStudent=>{

            //.some() has to return true or false. 
            return currStudent.onPace === false
        })
        //if we return true, the current element(courseObj) will be part of the result array
        //if we reutrn false, the current element(courseObj) will not make it through the filter and will not be in our result
        return isNotOnPace //isNotOnPace will be true if at least one student is not on pace, and it will return false if everybody is on pace
    })

    let onPaceCourses = courses.filter((courseObj)=>{
        let roster = courseObj.roster;

        //are every student in the roster for this courseObj on pace?
        let isOnPace = roster.every(currStudent=>{

            //.every() has to return true or false. 
            return currStudent.onPace === true
        })
        //if we return true, the current element(courseObj) will be part of the result array
        //if we reutrn false, the current element(courseObj) will not make it through the filter and will not be in our result
        return isOnPace //isOnPace will be true if at least one student is not on pace, and it will return false if everybody is on pace
    })

    return [onPaceCourses, notOnPaceCourses]

}

// console.log(partitionCoursesByStudentProgress(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, return an array of student objects that match the courses roster list, and add the onPace property from the roster objects to the student object. 

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true
        },
        {
            studentId: 2,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 4,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}
*/

function getStudentsForCourse(course, students) {
    // let roster = course.roster
    let {roster} = course; //destructuring roster array from the course object
    //For each element in the roster array, i want a new array with the related student object

    let result = roster.map((rosterStudent)=>{
        //current roster students id
        let foundStudentObj = students.find((studentObj)=>{
            return studentObj.id === rosterStudent.studentId;
        })
    
       return foundStudentObj
        //dont forget to return cuz u got curly braces!
    })

    return result;
}

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true,
        },
        {
            studentId: 2,
            onPace: false,
        },
        {
            studentId: 3,
            onPace: true,
        },
        {
            studentId: 4,
            onPace: true,
        },
        {
            studentId: 5,
            onPace: true,
        },
    ],
};

console.log(getStudentsForCourse(oneCourse, students))

/* 
9. getTotalNumberOfClassesForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }
*/

function getTotalNumberOfClassesEnrolledIn(student, courses) {
    
}

let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};

// console.log(getTotalNumberOfClassesEnrolledIn(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of authors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in



*/

function getCoursesStudentEnrolledIn(student, courses, instructors) {
    
}

// console.log(getCoursesStudentEnrolledIn(student1, courses, instructors));

/*
11. Get count of courses who have at least on student not onPace- similar to getBooksBorrowedCount(books)
*/

function getCoursesNotOnPaceCount(courses) {
    
}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]

*/

const getMostCommonCategories = (courses) => {
    
};

// console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 3 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 },
  { name: 'Python Fundamentals', rosterSize: 3 }
]
*/

function getMostPopularCourses(courses) {
   
}

// console.log(getMostPopularCourses(courses));

/* 

14. Get instructors of largest classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 }
]

*/

function instructorsOfLargestClasses(courses, instructors) {
    
}

function helperJoinFirstAndLastNames(first, last) {
   
}

// console.log(getMostBusyInstructors(courses, instructors));

