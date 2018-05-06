// Compare the Triplets
// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

// We define the rating for Alice's challenge to be the triplet A = (a[0],a[1],a[2]) , and the rating 
// for Bob's challenge to be the triplet B = (b[0], b[1], b[2]).

// Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1],and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded  point.
// If a[i] < b[i], then Bob is awarded  point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given A and B, can you compare the two challenges and print their respective comparison points?

// Input Format

// The first line contains  space-separated integers, a[0], a[1], and a[2], describing the respective values in triplet A. 
// The second line contains  space-separated integers, b[0], b[1], and b[2], describing the respective values in triplet B.

// Constraints

// Output Format

// Print two space-separated integers denoting the respective comparison points earned by Alice and Bob.

// Sample Input

// 5 6 7
// 3 6 10
// Sample Output

// 1 1 
// Explanation

// In this example:
// A = (a[0],a[1],a[2]) = (5, 6, 7)
// B = (b[0], b[1], b[2]) = (3, 6, 10)

// Now, let's compare each individual score:

// a[0] > b[0], so Alice receives 1 point.
// a[1] = b[1], so nobody receives a point.
// a[2] < b[2], so Bob receives 1 point.
// Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we print 1 1 (Alice's comparison score followed by Bob's comparison score) on a single line.

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
 * Complete the solve function below.
52
 */
function solve(a0, a1, a2, b0, b1, b2) {
    var a = 0; 
    var b = 0; 

    if (a0 > b0) {
        a++;
    }
    else if (a0 < b0) {
        b++;
    }
    if (a2 > b2 ) {
        a++; 
    }
    else if (a2 < b2) {
        b++;
    } 
    if (a1 > b1) {
        a++;
    }
    else if (a1 < b1) {
        b++;
    }
    return [a, b];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a0A1A2 = readLine().split(' ');

    const a0 = parseInt(a0A1A2[0], 10);

    const a1 = parseInt(a0A1A2[1], 10);

    const a2 = parseInt(a0A1A2[2], 10);

    const b0B1B2 = readLine().split(' ');

    const b0 = parseInt(b0B1B2[0], 10);

    const b1 = parseInt(b0B1B2[1], 10);

    const b2 = parseInt(b0B1B2[2], 10);

    let result = solve(a0, a1, a2, b0, b1, b2);

    ws.write(result.join(" ") + "\n");
    
    ws.end();
}