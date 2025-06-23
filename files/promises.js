// const PromiseOne= new Promise(function(resolve ,reject){
//    setTimeout(function(){
//     console.log('Async task is completed')
//     resolve({user: 'Prabhat', Email: 'Prabhat22pk@gmail.com'})
//    },1000)
// })

// PromiseOne.then(function(user){
//     console.log('promise consumed')
//     console.log(user)
// })

// const promise2= new Promise(function(resolve, reject){
//   setTimeout( function(){ 
//     let error=false;
//     if(!error){
//         resolve({username:'Prabhat', Password: "12345"})
//     }
//     else {
//         reject('Something Went Wrong')
//     }
// }
// ),1000
// })
// promise2
// .then((user)=>{
//     console.log( user.username)
// })
// .then((username)=>{
//    console.log('hi')
// })
// .catch((error)=>{
//     console.log(error)})
// .finally(function(){
//     console.log('always shows up by defaul')
// })    
    
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()    
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
    console.log(error)
})

