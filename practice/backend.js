var arr = [1,2,3,4,5,6,7,8,9]


arr.forEach(function (val) {
    console.log(val + " hello") //har baar iterate krne par val iteratively 1 pe jata hai then agli baar 2 par and so on
})



var ans = arr.map((val) => {
    return 13    // jab bhi map dimg mai aaye ek khaali array usi size ka dimg m socho or fir usme jo daalna h daalo
})
console.log(ans)

var fliterans= arr.filter((val) => {    //jb kch kch rakhna ho or baaki discard karna ho or ye sb ek naye array m chaiye ho
   if(val>3){
    return true
   }
   else{
    return false
   }

})
console.log(fliterans)

var findkaAns= arr.find((val)=>{
    //hamesha arr ka pehla bnda dhund k dega jese array mai do baar 3 hai toh pehle wala teen dega
    if(val===12){
        return val
    }
})

console.log (findkaAns)

//object creation

var obj= {
    name: "prabhat",
    email: "prabhat22pk@gmail.com"

    // to save this data from manupulation  we can freeze this data and it cant be redeclared again 
}

Object.freeze(obj)