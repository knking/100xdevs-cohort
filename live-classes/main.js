const fs = require('fs');
// Example usage:
const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800000, price: 20, category: 'Clothing', itemName: 'T-shirt' },
  { id: 3, timestamp: 1656076800000, price: 15, category: 'Food', itemName: 'Burger' },
  { id: 4, timestamp: 1656076800000, price: 25, category: 'Electronics', itemName: 'Headphones' },
  { id: 5, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Ice Cream' }
];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);

// console.log(Object.keys(transactions[1]))
// console.log(Object.values(transactions[1]))
// const {category}= transactions[1]
// console.log(category)

// for (const iterator of transactions) {
//   console.log(Object.keys(iterator))
// }
// for(const key in transactions[2]){
//   console.log(key)
// }
// JavaScript (script.js)

// const currentDate = new Date();

// // Specify the options for formatting
// const options = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };

// // Format the date and time with AM/PM indicator
// const formattedTime = currentDate.toLocaleString('en-US', options);

// console.log(formattedTime);


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
 console.log(`Time ${t} spent`)
     },t*1000)
  })
 }
 
 function wait2(t) {
 return new Promise(function(reslove,reject){
     setTimeout(function(){
 reslove("primise 2 resolved")
 console.log(`Time ${t} spent`)
     },t*1000)
 })
 }
 
 function wait3(t) {
 return new Promise((reslove,reject)=>{
     setTimeout(()=>{
 reslove("promise 3 resolved")
 console.log(`Time ${t} spent`)
     },t*1000)
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
calculateTime(2,3,5)
 