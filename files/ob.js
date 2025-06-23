console.log("hello")

// let rectangle={
//     length:1,
//     breadth:2,  


// draw(){
//     console.log('draw');
// }
// }

// function createRectangle(length,breadth){   //object creation using factory function
    
    
//     return rectangle={
    
//         length,
//         breadth,  

//     draw(){
//         console.log('draw rect');
//     }
//     }

// }
// obj1= createRectangle(5,4);

function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing')
    }
}
 
//object creation using constructor function
let obj1=  new Rectangle(12,20);
obj1.color='yellow';
console.log(obj1);

let numbers = [1,2,3,45];
console.log(numbers);


//callbackfunction
let courses=[{no:1, naam: 'rahul'},
    {no:2, naam : 'prabhat'}
];

let course=courses.find(function(course){
  return course.naam=='rahul';  
})
console.log(course)