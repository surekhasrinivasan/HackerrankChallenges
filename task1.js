// Task 
// To complete this challenge, you must save a line of input from stdin to a variable, print Hello, World. on a single line, and finally print the value of your variable on a second line.

// You've got this!

// Note: The instructions are Java-based, but we support submissions in many popular languages. You can switch languages using the drop-down menu above your editor, and the  variable may be written differently depending on the best-practice conventions of your submission language.

// Input Format

// A single line of text denoting  (the variable whose contents must be printed).

// Output Format

// Print Hello, World. on the first line, and the contents of  on the second line.

// Sample Input

// Welcome to 30 Days of Code!
// Sample Output

// Hello, World. 
// Welcome to 30 Days of Code!
// Explanation

// On the first line, we print the string literal Hello, World.. On the second line, we print the contents of the  variable which, for this sample case, happens to be Welcome to 30 Days of Code!. If you do not print the variable's contents to stdout, you will not pass the hidden test case.

// Easy
// Submitted 552535 times
// Max Score 30
// Need Help?

// View Tutorial
// View Discussions
// View Editorial Solution
// View Top Submissions
// Rate This Challenge:

// Download problem statement
// Download sample test cases
// Suggest Edits
// Current Buffer (saved locally, editable)      
// JavaScript (Node.js)

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");


    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");

    var _input = "";
    process.stdin.on("data", function (input) {

    _input += input;
});

process.stdin.on("end", function () {

   processData(_input);
});