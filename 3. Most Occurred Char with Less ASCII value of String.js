/*
Enter a string and Show the most occurred letter which is less ASCII value with occurrence

Input:      aabcddeeefggghh
Output:     e 3
*/



let str = 'aabcddeeefggghh';
let res = {};

for(const i of str){
  if(i !== ' '){
    res[i] = res[i] !== undefined ? (res[i] + 1) : 1;
  }
}


const maxOccurredAndLessASCIIChar = Object.keys(res).reduce((prev, curr) => ((res[prev] > res[curr]) || (res[prev] === res[curr] && prev.charCodeAt(0) < curr.charCodeAt(0))) ? prev : curr);
console.log(maxOccurredAndLessASCIIChar, res[maxOccurredAndLessASCIIChar]);
