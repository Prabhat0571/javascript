
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

  // const result = books.filter( (bk)=>{
  //   return bk.title == 'Book Six'
  // })
  // console.log(result)
  // const val = books.map( (value)=>{
  //   if(value.title== 'Book Eight'){
  //     return value.genre
  //   }

  // } )
  // console.log(val)

  //chaining of methods
  // const nums= [1,2,3,4,5,6,7,8,9,10]
  // const newNums= nums
  //               .map((val)=> val*10)
  //               .map((val)=> val+1)
  //               .filter((val)=> val>50 )
//  console.log(newNums)

 //reduce
 const nums=[1,2,3,4]
 const result = nums.reduce((acc, curr )=>{
      console.log(` accumulator is ${acc} ,current value is ${curr} `)
      return acc+curr
 } ,0) //ye wali value accumulator m jati h sbse pehli
 console.log(result)