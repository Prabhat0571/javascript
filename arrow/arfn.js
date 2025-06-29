const user = {
    username: "prabhat",
    price: "999",
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}
user.welcomeMessage() 

//functions k andar this ka context undefined hota hai and it works inside the object 

