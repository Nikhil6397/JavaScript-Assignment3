// Q1. Count Characters
// You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of 
// character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
// Note: You have to complete countCharacters function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return array B as output.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S. S contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// AbaDd
// Sample Output
// 1 1

let S = "AbaDd";


function countCharacters(S) {
    let countA = 0;
    let countD = 0;
    let B = new Array(2);
    for (ele of S) {
        if (ele == 'A') {
            countA++;

        }
        if (ele == 'D') {
            countD++;

        }
    }
    B[0] = countA;
    B[1] = countD;
    console.log(B[0], B[1]);
}

countCharacters(S);