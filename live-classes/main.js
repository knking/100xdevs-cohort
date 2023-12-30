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

function wait1(t) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise First resolved")
    }, t)
  })

}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise second Resovled")
    }, t)
  })
}

function wait3(t) {
  return new Promise(function (resolve) {
    setInterval(function () {
      resolve("Promise 3rd resolve")
    }, t)
  })
}

function calculateTime(t1, t2, t3) {
  Promise.all([wait1(t1), wait2(t2), wait3(t3)])
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error);
    })
}

calculateTime(2000, 5000, 1000)

