/*
We will demonstrate the following built in array methods
    .find() 
    .filter()
    .map()
    .some()
    .every()


const employees = [
    {
        name: "Lebron James",
        salary: 110000,
        company: {
            name: "Google",
            city: "Reston",
            state: "Virginia",
        },
        languages: ["Javascript", "Java", "Python"],
    },
    {
        name: "Scooby Doo",
        salary: 200000,
        company: {
            name: "GreenChef",
            city: "New York City",
            state: "New York",
        },
        languages: ["Html", "Css"],
    },
    {
        name: "Larry David",
        salary: 80000,
        company: {
            name: "Comedy Central",
            city: "Los Angeles",
            state: "California",
        },
        languages: ["Javascript", "Java", "Python"],
    },
    {
        name: "Beyonce",
        salary: 90000,
        company: {
            name: "Google",
            city: "Brooklyn",
            state: "New York",
        },
        languages: ["Javascript", "Java", "Python"],
    }
];

*/

const employees = [
    {
        name: "Lebron James",
        salary: 110000,
        company: {
            name: "Google",
            city: "Reston",
            state: "Virginia",
        },
        languages: ["Javascript", "Java", "Python"],
    },
    {
        name: "Scooby Doo",
        salary: 200000,
        company: {
            name: "GreenChef",
            city: "New York City",
            state: "New York",
        },
        languages: ["Html", "Css"],
    },
    {
        name: "Larry David",
        salary: 80000,
        company: {
            name: "Comedy Central",
            city: "Los Angeles",
            state: "California",
        },
        languages: ["Javascript", "Java", "Python"],
    },
    {
        name: "Beyonce",
        salary: 90000,
        company: {
            name: "Google",
            city: "Brooklyn",
            state: "New York",
        },
        languages: ["Javascript", "Java", "Python"],
    }
];


//.find() -> it returns the first item (element) that matches a given condition, even if more than one item matches. If there is no match, find() returns undefined.
//.find() returns an element that matches or undefined if none matches
//find an employee who is named "Larry David"

function findEmployeeByName(employees, name){
    let foundEmployee = employees.find((employeeObj, idx)=>{
        //you need a condition here
        return employeeObj.name === name
    })

    return foundEmployee
}

// console.log(findEmployeeByName(employees, "Scooby Doo"))


//.filter() -> This method builds a new array of only the items that match a certain condition.-> returns an array
//find all the employees who are making over a given amount
function findHighEarners(employees, amount){
    let result =  employees.filter((employeeObj, idx)=>{
        //you need a condition here
        return employeeObj.salary > amount;
    })

    return result
}

// console.log(findHighEarners(employees, 100000))




//.map() -> this code processes each item in the array and creates a new value for each item in the original array. Each item in the original array maps to an item in the new array.-> returns an array
//give back a new array containing only the company names and city for each employee in the given list
function findCompanyNamesAndCity(employees){
    let result =  employees.map((employeeObj, idx)=>{
        // return {name: employeeObj.name, city: employeeObj.company.city}

        return `Hello ${employeeObj.name}, welcome to class. You are joining use from ${employeeObj.company.city}. Thank you. `
    })

    // console.log("original employees->", employees)

    return result
}


// console.log(findCompanyNamesAndCity(employees))





//.some() -> The some() method accepts a callback function that implements a comparison that is executed for each item in the array, similar to the previous methods. If the callback function returns true for any item in the array, then the entire some() method returns true. -> return true or false
//use .some() to check if any employees are from a company with the name "Comedy Central"
function doesCompanyHaveEmployee(employees, companyName){
    let result = employees.some((employeeObj, idx)=>{
        //have a condition here for it to check
        return employeeObj.company.name === companyName
    })

    return result;

}

// console.log(doesCompanyHaveEmployee(employees, "Comedy Central"))


//.every() ->The every() method works by checking the condition given against every item in the array. If that condition ever fails, it will return false. Otherwise, it will return true. --> returns true or false
//use .every() to indicate whether every employee is making over a certain salary
function areAllEmployeesGettingPaidGivenAmount(employees, amount){
    let result = employees.every((employeeObj, idx)=>{

        //check if every object matched the condition below
        return employeeObj.salary > amount
    })

    return result;
}

// console.log(areAllEmployeesGettingPaidGivenAmount(employees, 100000))



/* You can also combine the built in array methods!! */

/* Use filter() and map() to give back a new array containing only the company names and city for each employee in the given list who have a salary greater than or equal to a given amount

Hint: use .filter() to get back only the employees who make a given amount or more, then use .map to transform that data to a new array containing the company names and city of those employees
*/


function findCompanyNameAndCityOfHighEarners(employees, amount){

    //filter through the employees list to only find the ones making over a certain amount
    let highEarners = employees.filter((employeeObj, idx)=>{
        //give a codition to filter for
        return employeeObj.salary > amount;
    })

    let result = highEarners.map((employeeObj, idx)=>{
        return `${employeeObj.company.name} at the city: ${employeeObj.company.city}`
    })

    // return employees.filter((employeeObj, idx)=>employeeObj.salary > amount
    // ).map((employeeObj, idx)=> `${employeeObj.company.name} at the city: ${employeeObj.company.city}`
    // )

    return result;

    
}

// console.log(findCompanyNameAndCityOfHighEarners(employees, 100000))




/* Use filter() and some() method to find if any employee from a given state has a salary of over a given amount */


function anyBodyFromGivenStateGettingThisChedda(employees, stateName, amount){

    //filter the employees from a given state first
    let stateEmployees = employees.filter((employeeObj, idx)=>{
        return employeeObj.company.state === stateName;
    })

    let result = stateEmployees.some((employeeObj, idx)=>{
        //condition to check if any element matches this condition
        return employeeObj.salary > amount
    })

    return result;
}



console.log(anyBodyFromGivenStateGettingThisChedda(employees, "New York", 100000))

