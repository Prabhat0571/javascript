// array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
//  console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //removes last element

// myArr.unshift(9) //start m value daaldeta h but do not use as it shifts all values to right 
//                     // expensive computation hai
// myArr.shift()  //removes the value inserted by unshift

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  //converts to string

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//splice array ko manupulate karta hai and range bhi include 
// karta h jabtk hume wo portion chaiye hota hai