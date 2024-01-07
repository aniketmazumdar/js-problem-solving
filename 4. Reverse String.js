/*

    Reverse the string
    Use of JS Library Functions

    Input:      aniket
    Output:     tekina

*/


const makeReverse = (str) => [...str].reverse().join('');

const str = 'aniket';
const reverseStr = makeReverse(str);
console.log('Reverse of', str, 'is', reverseStr);





/*

    Reverse the string
    Without Using any JS Library Function

    Input:      aniket
    Output:     tekina

*/


const makeReverse = (str) => {
    let reverse = '';
    for(let i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    return reverse;
};

const str = 'aniket';
const reverseStr = makeReverse(str);
console.log('Reverse of', str, 'is', reverseStr);