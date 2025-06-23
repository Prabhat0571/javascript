
//axios, settimeout , setinterval are basically async code

var ans = new Promise((resolve , reject)=>{  // a simple promise
    var n= Math.floor(Math.random()*10)
 
    if(n<5){
        return resolve()
    }
    else{
        return reject()
    }
})

ans.then(()=>{
    console.log("below")
})
.catch(()=>{
console.log("above")
})

