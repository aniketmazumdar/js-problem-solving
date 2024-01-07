/*

  Fibonaccie series of N numbers
  Use of For Loop

  Input:      10
  Output:     0, 1, 1, 2, 3, 5, 8, 13, 21, 34

*/


const fibonacciSeries = (n) => {
  let min = 0;
  let max = 1;
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(min);
    max = min + max;
    min = max - min;
  }

  return res;
};

const n = 10;
const result = fibonacciSeries(n);
console.log('Fibonaccie Series of', n, '=', result);





/*

  Fibonaccie series of N numbers
  Use of Recursion

  Input:      10
  Output:     0, 1, 1, 2, 3, 5, 8, 13, 21, 34

*/


const fibonacciSeries = (n=0, min=0, max=1, res=[]) => {
  if(n>0){
      res.push(min);
      max = min + max;
      min = max - min;
      fibonacciSeries(n-1, min, max, res);
  }
  return res;
};

const n = 10;
const result = fibonacciSeries(n);
console.log('Fibonaccie Series of', n, '=', result);





/*

  Fibonaccie series within Nth 
  Use of While Loop

  Input:      50
  Output:     0, 1, 1, 2, 3, 5, 8, 13, 21, 34

*/


const fibonacciSeries = (maxN) => {
  let min = 0;
  let max = 1;
  let res = [];

  while (min <= maxN) {
    res.push(min);
    max = min + max;
    min = max - min;
  }

  return res;
};

const maxN = 50;
const result = fibonacciSeries(maxN);
console.log('Fibonaccie Series till', maxN, '=', result);





/*

  Fibonaccie series within Nth 
  Use of Recursion

  Input:      50
  Output:     0, 1, 1, 2, 3, 5, 8, 13, 21, 34

*/

const fibonacciSeries = (maxN, min=0, max=1, res=[]) => {
  if(min <= maxN){
      res.push(min);
      max = min + max;
      min = max - min;
      return fibonacciSeries(maxN, min, max, res);
  }
return res;
};

const maxN = 50;
const result = fibonacciSeries(maxN);
console.log('Fibonaccie Series till', maxN, '=', result);