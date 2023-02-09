/*

  Find the most occurred letter with occurrence of a string

  Input:      aabcddeeefggghh
  Output:     g 3

*/



let str = 'aabcddeeefggghh';
let res = {};

for(const i of str){
  if(i !== ' '){
    res[i] = res[i] !== undefined ? (res[i] + 1) : 1;
  }
}

const maxOccurredChar = Object.keys(res).reduce((prev, curr) => (res[prev] > res[curr]) ? prev : curr);
console.log(maxOccurredChar, res[maxOccurredChar]);