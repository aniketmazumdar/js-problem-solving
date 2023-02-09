/*

  Find the Fibonaccie series of certain range

  Input:      10
  Output:     0, 1, 1, 2, 3, 5, 8, 13, 21, 34

*/



const range = 10;
let n1 = 0, n2 = 1;
const res = [];
for (let i = 0; i < range; i++) {
  res[i]=n1;
  n1 = n2;
  n2 = n2 + res[i];
}

console.log(res);