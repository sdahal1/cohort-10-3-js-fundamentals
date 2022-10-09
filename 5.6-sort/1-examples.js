/* 
const parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];


example: parks.sort((parkA, parkB)=>{
    return parkB.rating - parkA.rating
})
If the number returned is negative, the first item (parkA) will be moved before the second item (parkB). The opposite is true if the number is positive. This iteration then continues, but with the second and third items. 




*/

/* Example 1: sorting numbers- given an array of numbers */
const nums = [23,4,12,77,-3,-5,1]

//Ascending
nums.sort((a,b)=>{
  return a-b //if the a-b equals a positive number, it will switch their order, otherwise it will stay the same
})


//Descending example here
nums.sort((a,b)=>{
  return b-a 
})
console.log(nums)

/* Example 2: sorting numbers- given an array of objects */
const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Indiana Dunes", rating: 4.1 },
    { name: "Gateway Arch", rating: 4.5 },
  ];

//sorting ascending
parks.sort((a,b)=>{
  return a.rating - b.rating
})

//sorting descending
parks.sort((a,b)=>{
  return b.rating - a.rating
})

console.log(parks)


/* Example 3: Sorting strings */


//alphabetical order parks
parks.sort((a,b)=>{
  //we can only return a positive number or a negative number
  // if(a.name.toLowerCase() < b.name.toLowerCase()){
  //   return -1
  // }else{
  //   return 1;
  // }

  return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
})

console.log(parks)


/* Example 4: Sort strings by length */

parks.sort((a,b)=>{
  return a.name.length - b.name.length;
})

