const DISCOUNT_PERCENTAGE = 0.15; //globally scoped-> visible everywhere because its not declared inside of any function or block (loops, conditionals)

function discountPricesInCents(products) {
  const result = []; //result is functional scoped, its defined inside the function, so its only visible inside the function
  
  for (let i = 0; i < products.length; i++) { //i is block scoped, its only availalbe/visible in the for loop
    const product = products[i]; //product is also block scoped, only available in the for loop block
    let price = product.priceInCents;
    if (DISCOUNT_PERCENTAGE > 0) {
        const multiplier = 1 - DISCOUNT_PERCENTAGE; //multiplier is block scoped-> only available inside the if statement
  
        price = product.priceInCents * multiplier;
    }
    
    result.push(price);
}

return result;
}


let products = [
    {name: "ihpone", priceInCents: 2000},
    {name: "mouse", priceInCents: 1000},

]

discountPricesInCents(products)