// Q10. Match the Strings
// You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.
// Note: You have to complete String_Match function. No need to take any input.
// Input Format
// The first line of the input contains a string S1. The second line of the input contains a string S2.
// Output Format
// Return YES if S1 and S2 are same, else return NO.
// Constraints
// 1≤|S1|,|S2|≤100, where |S| denotes the length of string S. S1 and S2 contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// Prepbytes Prepbytes
// Sample Output
// YES

let str1 = "Prepbytes";
let str2 = "Prepbytes";
String_Match = (str1, str2) => {
    if (str1 === str2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(String_Match(str1, str2));