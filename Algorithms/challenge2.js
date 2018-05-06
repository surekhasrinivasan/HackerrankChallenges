// Given an array of integers, find the sum of its elements.

// Input Format

// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers representing the array's elements.

// Output Format

// Print the sum of the array's elements as a single integer.

// Sample Input

// 6
// 1 2 3 4 10 11
// Sample Output

// 31
// Explanation

// We print the sum of the array's elements: 1 + 2 + 3 + 4 + 10 + 11 = 31 .

var

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
 
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
51
 * Complete the simpleArraySum function below.
52
 */
function simpleArraySum(ar) {
    var result = 0;

    for(var i = 0; i < ar.length; i++){
        result += ar[i];
    }
    return result;    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = simpleArraySum(ar);

    ws.write(result + "\n");

    ws.end();
}