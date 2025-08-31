// Q4. Concatenate the Strings
// You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the 
// concatenation of both the given strings. 
// Note: You have to complete Concatenate_Strings function. No need to take any input.
// Input Format
// The first line of the input contains the first string S1 and the second line of input contains the second string S2. 
// Output Format
// Return the String S3 as output, which is the concatenation of given both strings.
// Constraints
// 1≤|S1|,|S2|≤100, where |S|denotes the length of string S. 
// Example
// Sample Input
// Prep bytes
// Sample Output
// Prepbytes

let str1 = "Prep";
let str2 = "bytes";

const Concatenate_Strings = (str1, str2) => {
    return str1.concat(str2);
}

console.log(Concatenate_Strings(str1, str2));