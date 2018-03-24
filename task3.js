// Objective 
// In this challenge, we're getting started with conditional statements. 

// Task 
// Given an integer, perform the following conditional actions:

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

// Input Format

// A single line containing a positive integer, .

// Constraints

// 1 <= n <= 100

// Output Format

// Print Weird if the number is weird; otherwise, print Not Weird.

// Sample Input 0

// 3
// Sample Output 0

// Weird
// Sample Input 1

// 24
// Sample Output 1

// Not Weird
// Explanation

// Sample Case 0:  
//  is odd and odd numbers are weird, so we print Weird.

// Sample Case 1:  
//  and  is even, so it isn't weird. Thus, we print Not Weird.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var n = parseInt(readLine());
    var str="";
          
      // if 'n' is NOT evenly divisible by 2 (i.e.: n is odd)
      if(n%2==1){
         str = "Weird";
      }
      else if((n%2==0) && (n>=2 && n<=5)){
              str ="Not Weird";
          }
          else if((n%2==0) && (n>=6 && n<=20)){
              str="Weird";
          }
          else if((n%2==0) && (n>20)){
              str ="Not Weird";
          }    
        console.log(str);   
}