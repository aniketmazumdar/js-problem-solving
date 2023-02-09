/*

    Reverse the string

    Input:      aniket
    Output:     tekina

*/


const str = 'aniket';

// Using library functions
const res1 = str.split('').reverse().join('');
console.log(res1);


// Without using any library functions
let res2 = '';
for(let i = str.length-1; i >= 0; i--){
    res2 += str[i];
}
console.log(res2);

