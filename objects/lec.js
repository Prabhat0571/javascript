// // const obj = new Object //constructor method and produces a singleton object
// // console.log(obj);

// const sym= Symbol

// const user1= { 
//     //object literal method
//         name: "prabhat",
//         class: "btech cse",
//         Section: "A",
//         [sym]: "mykey1"

// }
//  //behind the scene ye ek string ki tarah treat hora hai but while writing the object we can write it simply as normal text
// //if we want to use symbol datatype in our object then we have to use [] square bracket notation`
// //if we want ki humari values change na ho object mai toh hum use freeze kar skte hai

//   user1.greeting = ()=>{
//     console.log("hello from user1");
//   } 

//    user1.greetingtwo = function(){
//     console.log(`hello from user1 ka ${this.name
//     }`);

//   } 

// //   console.log(user1.greetingtwo())

// //   console.log(user1);
  
// obj1={
//        1: "prabhat",
//        2: "yummy"
// }
// obj2={
//     3: "Ruchi",
//     4: "Jyoti"

// }

// const obj3= {...obj1, ...obj2} //spread operator
// // console.log(obj3)
// //object ka key-value pairs agr keys k form chaiye in an array toh hum use krte h object.keys
// const result = Object.keys(user1)
// //console.log(result) //return output of keys in an array then we can use loop

// const loop= result.forEach(element => {
//     console.log(element.length)
// });
// console.log(loop)

  
// ****************************************************object destructuring ******************************************************


// const course = {
//     coursename: "Javascript essentials",
//     price: "999",
//     courseInstructor: "hitesh"
// }
// //maanlo mjhe kisi value ko doosre naam dena ya m use dot notation se access ni karna chahta toh uska ek syntx hai:
// const {courseInstructor} = course
// // console.log(courseInstructor)
 

// function add(num1 , num2){
//   return num1 + num2
//  }
//  const result = add(1,2)
//  console.log(result)

function loginUserName(username){
  return `${username} just logged In `
}
const result = loginUserName("Prabhat")
console.log(result);

//for taking any number of argument in an function we use rest operator 
function addany(...num){
  let sum=0
  for (i=0; i<num.length; i++){
      sum= sum+ num[i]
  }
  return sum
}console.log(addany(1,2,4,5,66,7))