
// // 1. Write a function that finds the sum of two numbers 
// function sumOfTwoNum(a,b){
//     let ans = a+b
//     console.log(ans)
// }
//  sumOfTwoNum(5,6)
// // 2. Write another function that displays this result in a pretty format 
// // 3. Write another function that takes this sum and prints it in passive tense
// function printSumInPassiveTense(number1, number2) {
//     // Check if the inputs are valid numbers
//     if (typeof number1 !== 'number' || isNaN(number1) ||
//         typeof number2 !== 'number' || isNaN(number2)) {
//         return 'Invalid input. Please provide valid numbers.';
//     }
//     // Calculate the sum
//     const sum = number1 + number2;
//     // Use a template string to create the passive tense sentence
//     const passiveSentence = `The sum of ${number1} and ${number2} was calculated to be ${sum}.`;
//     return passiveSentence;
// }
// // Example usage
// const result = printSumInPassiveTense(10, 20);
// console.log(result);


// DRY code
function findSum(n){
    let ans =0;
    for(let i=1;i<=n;i++){
        ans+=i
    }
    return ans
}
let ans = findSum(5)
console.log(ans)

let ans2=findSum(20)
console.log(ans2)

// Can you call one function inside another function
// callback funcations

function square(n){
    return n*n
}

function sumOfSquare(a,b){
    let val1=square(a)
    let val2=square(b)
    return val1+val2
}

console.log(sumOfSquare(4,5))