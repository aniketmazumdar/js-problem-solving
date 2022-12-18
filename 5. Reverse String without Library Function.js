/*
Make reverse string without library function

Input:      aniket
Output:     tekina
*/


const str = 'aniket';
let reversedStr = '';

for(let i = str.length-1; i >= 0; i--){
  reversedStr += str[i];
}

console.log(reversedStr);
