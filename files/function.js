function run(){
    console.log('running');
}
run();

let stand= function walk(){
    console.log('walking')
}
console.log(stand)
stand()

function sum(a,b){
  console.log (a+b)
}

sum(1,3)

//-> Getter setter

let person={
  fname: 'Prabhat',
  Lname: 'Kumar',   
  get fullname(){
    return `${person.fname} ${person.Lname}`;
  },

  set fullname(value){
    let parts =value.split(' ')
    this.fname=parts[0]
    this.Lname= parts[1]

  }
}
console.log(person.fullname)

try{
  person.fullname=1;
}
 catch(e){
    
 }