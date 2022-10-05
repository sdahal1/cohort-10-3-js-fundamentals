function calculatePriceInDollars(priceInCents=0) {
    return priceInCents / 100;
}


// console.log(calculatePriceInDollars(150))
// console.log(calculatePriceInDollars())



function welcomeMessage(name, isReturnCustomer = false) {
    const message = isReturnCustomer ? "Welcome back" : "Welcome";
    return `${message}, ${name}!`;
}


// console.log(welcomeMessage("Rob", true))



// Function definition
function calculateTotal(products=[], {discountPercentage, salesTax}={discountPercentage:0.1, salesTax: 0.5 }) {
    // const {discountPercentage, salesTax} = options

    let result = 0;
    for (let i = 0; i < products.length; i++) {
      const { priceInCents, quantity } = products[i];
      result += priceInCents * quantity;
    }
  
    if (discountPercentage) result *= 1 - discountPercentage;
    return result * (1 + salesTax);
  }
  
  // Inputs
  const products = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const options = { discountPercentage: 0.1, salesTax: 0.0825 };
  
  // Function call
  calculateTotal()