// const user = {
//     username: "prabhat",
//     price: "999",
    
//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to the website`);        
//     }
// }
// user.welcomeMessage() 

//functions k andar this ka context undefined hota hai and it works inside the object 

//implicit return

// const add = (num1 ,num2) => (num1+num2) //ye wala format se hum object return kar skte hai like  ( { } ) this is called as implicit return
// console.log(add(1,2))

//immediately invoked functions

(function chai(){
    console.log("hello")
}) ()  //one bracket pair is for definition and other is for invoking khudse chlgya //we can also pass arguments as we pass is normal functions