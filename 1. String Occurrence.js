/*

  Find the occurrence of each letter of a string

  Input:      mississippi missouri
  Output:     { m:2, i:6, s:6, p:2, o:1, u:1, r:1 }

*/



const str = 'mississippi missouri'
const res = {};

for(const i of str){
  if(i !== ' '){
    res[i] = res[i] !== undefined ? (res[i] + 1) : 1;
  }
}

console.log(res);