/*

  Check Palindrome string or not

  Input:      madam
  Output:     Is string is Palindrome? true

*/


const str = 'madam';
const reverse = str.split('').reverse().join('');
console.log('Is string is Palindrome?', str === reverse);