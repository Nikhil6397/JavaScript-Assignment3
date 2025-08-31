// Q12. Split the String
// You are given a string S, Your task is to split the string with respect to spaces.
// Note: You have to complete Split_the_String function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return the array of splitted strings of S.
// Constraints
// 1≤|S|≤100, where |S|denotes the length of string S. S contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// I am utkarsh raj
// Sample Output
// I
// am 
// utkarsh 
// raj

let str = "I am utkarsh raj";

Split_the_String = (str) => {
    // let str2 = str.split("   ");
    return str.split(" ");
}

console.log(Split_the_String(str));