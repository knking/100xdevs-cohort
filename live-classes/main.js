function calculateTotalSpentByCategory(transactions) {
    // Create an object to store the total spent for each category
    const categoryTotals = {};
  
    // Iterate over each transaction
    transactions.forEach(transaction => {
      const { category, price } = transaction;
  
      // If the category is not in categoryTotals, initialize it with the current price
      if (!categoryTotals[category]) {
        categoryTotals[category] = price;
      } else {
        // If the category is already in categoryTotals, add the current price to the total
        categoryTotals[category] += price;
      }
    });
  
    // Convert the categoryTotals object into an array of objects
    const result = Object.keys(categoryTotals).map(category => ({
      category,
      totalSpent: categoryTotals[category]
    }));
  
    return result;
  }
  
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

//   let record = {}
//   for (let i = 0; i < transactions.length; i++) {
//       const transaction = transactions[i]
//       if (transaction['category'] in record) {
//           record[transaction['category']] += transaction['price']
//       } else {
//           record[transaction['category']] = transaction['price']
//       }
//   }
//   let result = []
//     for (const [category, price] of Object.entries(record)) {
//         result.push({ category, totalSpent: price })
//     }
// console.log(record)

function isAnagram(str1, str2) {

  if(str1.length != str2.length){
     return false
    }
  // let check = false;
  // if(str1.length != str2.length){
  //   return check
  // }else{
  //   for(let i=0;i<str1.length;i++){
  //     for(let j=0;j<str1.length;j++){
  //       if(str1[i]===str2[j]){
  //         check=true;
  //       }
  //     }
  //     if(!check){
  //       return check
  //     }
  //   }
  // }
  const sorted1=str1.split('').sort().join('')
  const sorted2=str2.split('').sort().join('')
  
  return sorted1===sorted2
}

  const ans=  isAnagram("geek=squiz","zuiqkeegs")
  console.log(ans)