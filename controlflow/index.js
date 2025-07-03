// // const isUserLoggedIn= true
// // const debitcard= false

// // if(isUserLoggedIn && debitcard){ //dono true hone chaiye
// //     console.log("you are allowed");
// // }
// // else{
// //     console.log("not allowed");
// // }

// // if(isUserLoggedIn || debitcard){ //koi ek true hona chaiye
// //     console.log("you are also allowed")
// // }


// //switch case
// const month= 3

// switch (month) { //anything is passed in this as a key will be matched for the respective case
//     case 1:
//           console.log("i am case one: ");
//         break;
//     case 2:
//         console.log("i am case two: ")    
//              break;
//     case 3:    
//     console.log("i am case three: ")
//     break;    
//     case 4:
//         console.log("i am case four: ")
//         break;             
//     default: //kch ni chla toh ye chla do
//     console.log("mai toh chluga hi") 
//         break;
// }

// //falsy values and truthy values are consider to be true and false but they are not as such exact true or false like a 
// // variable passed in if else
// // false , 0 , -0 , bigint (0n) , "" , null , NAN , undefined

// //how to check if object is empty:
// const obj = {}
// const objlength = Object.keys(obj)
// console.log(objlength.length) 

// //terniary operator
// //condition ? true : false

// const icedtea = 100
// icedtea < 80 ? console.log("less than 80") : console.log("more the 80")

//for of loops

// const arr= ['fruits', 'veggies' , 'nuts' , 'legumes'];
// for (const element of arr) { //element is like index and arr is the data type on which we are applying loop
//     console.log(element)
    
// }

// const naksha = new Map()
// naksha.set('1', "india")
// naksha.set('2', "USA")
// naksha.set('3', "France")
// naksha.set('4', "Africa")
// naksha.set('5', "operator")
// console.log(naksha);

// //how to apply loops on maps
// for (const [key , value] of naksha) { //doesnt work on objects
//     console.log(key ,":", value)
// }

// //foreachloop
// const newsyllabus= ['english' , 'mathematics', 'physics' , 'biology' , 'chemistry']
// newsyllabus.forEach((value)=>{
//     console.log(value)
// }) 

//we can also pass the reference of other functions to the loops
// it also has access to properties like index and arraylist
//for

// for(let i = 0 ; i <=10 ; i++){
//       console.log( `for i ${i}`)
//     for(let j=0; j<=10; j++){

//         console.log(`i am outerloop ${i} , from inner loop ${j}`)
//     }
// }

//filter, map , reduce

const mynums= [1,2,3,4,5,6,7,8,9,10];
const values= mynums.filter( (num)=>{
    return num >= 4  //scope k bina return karenge tho return lagane ki need nai h other wise we have to use return keyword     
} )  //this returns values
console.log(values)
