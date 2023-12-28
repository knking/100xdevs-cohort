/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  //method 1
  
  // let check = true;
  // for (let i = 1; i <= (str.length) / 2; i++) {
  //   if (str[i - 1] != str[str.length - i]) {
  //     check=false
  //   }
  // }
  // return check

  //method 2
  return str === str.split('').reverse().join('')
}

module.exports = isPalindrome;
