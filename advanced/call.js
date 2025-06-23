const naam = {
    firstName: "Prabhat",
    lastName: "Kumar",
    
}

const naam2 = {
    firstName: "Gaurav",
    lastName: "Kumar",
   
   
}
  printFullname= function(hometown){
        console.log(this.firstName + " " + this.lastName + " " + hometown)
    }
printFullname.call(naam , "aligarh")
printFullname.apply(naam2, ["bulandshar"])
