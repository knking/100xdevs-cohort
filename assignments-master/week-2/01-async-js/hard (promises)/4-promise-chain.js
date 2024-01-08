/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
 return new Promise((reslove,reject)=>{
    setTimeout(()=>{
reslove("Primise one resolved")
    },t)
 })
}

function wait2(t) {
return new Promise(function(reslove,reject){
    setTimeout(function(){
reslove("primise 2 resolved")
    },t)
})
}

function wait3(t) {
return new Promise((reslove,reject)=>{
    setTimeout(()=>{
reslove("promise 3 resolved")
    },t)
})
}

function calculateTime(t1, t2, t3) {
wait1(t1)
.then(wait2(t2))
.then(wait3(t3))
.catch((err)=>{
    console.log(err)
})
}

module.exports = calculateTime;
