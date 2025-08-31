// Q9. Reverse the String
// You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. Note: You have to 
// complete Reverse_String function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return the reversed String.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S. S contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// I am utkarsh raj
// Sample Output
// jar hsraktu ma I


let str = "I am utkarsh raj";

Reverse_String = (str) => {
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 = str2 + str[i];
    }
    return str2;
}

console.log(Reverse_String(str));