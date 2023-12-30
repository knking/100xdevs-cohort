/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(reslove,reject){
        setTimeout(()=>{
            reslove(`I am Printing After ${n} Second`)
        },n*1000)
    })
  }
  
  wait(5).then((result)=>{
    console.log(result)
  })
  
module.exports = wait;
