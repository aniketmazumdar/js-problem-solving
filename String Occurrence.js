/*

  Number of Occurrence of Each Letter of a String

  Input:      hello world
  Output:     { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

*/


const numberOfOccurrence = (str) => {
  let res = {};
  for(const l of str){
      if(l !== ' '){
          res[l]= res[l] === undefined ? 1 : res[l]+1;
      }
  }
  return res;
};

const str = 'hello world';
const result = numberOfOccurrence(str);
console.log('Result', result);