function debounce(fn,delay){
      let timerID;
      return function (...args){
        clearInterval(timerID) //  //har ek agla api call pichle wale ko cancel karta h
        timerID= setTimeout(() => {
           fn(...args)    
        }, delay);
      }  
}
const search = (query)=>{
  console.log(`searching for ` , query)
}
const searchWithdebounce = debounce(search , 1000)

searchWithdebounce('H')
searchWithdebounce('Ha')
searchWithdebounce('Har')
searchWithdebounce('Hard')
searchWithdebounce('Hard J')
searchWithdebounce('Hard Js')


