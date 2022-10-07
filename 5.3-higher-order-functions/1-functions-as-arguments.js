//Callback is a function given to another function as an argument (input)


function printData(array, callback) { //callback is a function that will be given to this function
    for (let i = 0; i < array.length; i++) {
        callback(array, i)
    }
}

function helper(array, indexNum){
    console.log(`The arrays current value is ${array[indexNum]} and we are at index number ${indexNum}`)
}

function anothaHelper(array, indexNum){
    console.log(`Anotha one--> at index ${array[indexNum]}`)
}


const arr = [10, 20, 70, 90, 100];


//callling printData

//printData(arr, helper)
// printData(arr, anothaHelper)

printData(arr, (array, indexNum)=>{
    console.log("waaazzaap, we at this element: " + array[indexNum] )
})


