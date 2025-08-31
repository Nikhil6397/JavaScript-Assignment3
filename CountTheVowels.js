// Q3. Count the Vowels
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the
// given string.
// Note: You have to complete Count_Vowel function. No need to take any input.
// Input Format
// The first and only line of the input contains string S.
// Output Format
// Return the number of Vowels in the string S as output.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S.
// Example
// Sample Input
// Prepbytes
// Sample Output
// 2

let str = "Prepbytes";

function Count_Vowel(str) {
    let count = 0;
    for (let ele of str) {
        if (ele == 'A' || ele == 'a' || ele == 'E' || ele == 'e' || ele == 'I' || ele == 'i' || ele == 'O' || ele == 'o' || ele == 'U' || ele == 'u') {
            count++;
            console.log(ele);
        }
    }
    console.log("Number of vowels are: ", count);
}

Count_Vowel(str);