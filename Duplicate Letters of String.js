/*

  Duplicate Letters of a String

  Input:      helloworld
  Output:     [ 'l', 'o' ]

*/


const duplicateOccurrenceLetters = (str) => {
  let res = [];
  let seen = {};

  for (const l of str) {
    if (seen[l] && !res.includes(l)) {
      res.push(l);
    } else {
      seen[l] = true;
    }
  }
  return res;
};

const str = 'helloworld';
const result = duplicateOccurrenceLetters(str);
console.log('Duplicate Letters:', result);