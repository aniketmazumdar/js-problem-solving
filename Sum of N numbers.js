/*

    Sum of N numbers. SUM = N + (N-1) + (N-2) + .... + 3 + 2 + 1
    Use of Recursive 

    Input:      5
    Output:     15

*/


const sumOfN = (n, sum = 0) => {
    if (n > 0) {
        sum += n;
        return sumOfN(n - 1, sum);
    }
    return sum;
}

const n = 5;
const sum = sumOfN(n);
console.log('SUM of', n, '=', sum);





/*

    Sum of N numbers. SUM = N + (N-1) + (N-2) + .... + 3 + 2 + 1
    Use of While Loop 

    Input:      5
    Output:     15

*/


const sumOfN = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n;
        --n;
    }
    return sum;
}

const n = 5;
const sum = sumOfN(n);
console.log('SUM of', n, '=', sum);
