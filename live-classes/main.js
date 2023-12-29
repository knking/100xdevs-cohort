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
function clearFile() {
  fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    data = data.replace(/\s+/g, ' ')

    fs.writeFile('abc.txt',data,'utf-8',(err)=>{
      if(err){
        console.log(err)
        return
      }
      console.log("File written succesfully")
    })
  })
  
}

clearFile()