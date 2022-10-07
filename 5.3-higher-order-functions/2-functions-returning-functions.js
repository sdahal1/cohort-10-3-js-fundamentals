//Closure is a function that is RETURNED by a function


// const discountedPrice = (price, discount) => price * discount;

// const finalPriceBed = discountedPrice(200, 0.9); // 90% of $200
// const finalPricePillow = discountedPrice(52, 0.9); // 90% of $52
// const finalPriceCurtain = discountedPrice(32, 0.9); // 90% of 32 



/* 
closure example below (function returning a function)
 */


// const discountedPrice = (discount) => {
//     return function(price){
//         return price * discount
//     };
// }

const discountedPrice = (discount) => {
    return (price)=> price * discount
}



const tenPercentDiscount = discountedPrice(0.9)
const fiftyPercentDiscount = discountedPrice(0.5)


console.log(tenPercentDiscount)
console.log(fiftyPercentDiscount)

const bedTenPercentOff = tenPercentDiscount(200) //200 is a price of the bed
const bedHalfOff = fiftyPercentDiscount(200) //200 is price of the bed
