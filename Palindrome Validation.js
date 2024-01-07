/*

  Palindrome Validation

  Input:      madam
  Output:     true

*/


const palindromValidation = (str) => {
  const reverseStr = [...str].reverse().join('');
  return str === reverseStr;
}

const isPalindrom = palindromValidation('madam');
console.log('isPalindrom =', isPalindrom);
