//    let courses=[
//       {no:1, name: 'love'},
//       {no:2, name:'babbar'}
//    ]

//    console.log(courses)
//    let result=courses.find(course=>{
//       return course.name== 'love';
//    })

//    console.log(result) 

//    // let result1=courses.find(course=>
//    //       course.name=='babbar'
//    // )

//    // console.log(result1)
//    // let str= 'babbar';

// let arr=[10,-20,-49,67,123,-4]

// let answer= arr.filter(a=>{
//    return a>0
// })
// console.log(answer)

// function sum(a,b){
//     total=0;
//    for (let value of arguments)
//       total=total+value;
//       return total
   
// }

// ans= sum(1,2,3,4,5,6,7,78,346556,556,456)
// console.log(ans)


let person={
   fname: 'Prabhat',
   lname: 'Kumar',
   
   get fullname(){
      return `${person.fname} ${person.lname}`
   },
   set fullname(value){
     let parts= value.split(' ')
     this.fname=parts[0]//split ka output array m store hota h
     this.lname=parts[1]
   }
}
person.fullname 
console.log(person.fullname)