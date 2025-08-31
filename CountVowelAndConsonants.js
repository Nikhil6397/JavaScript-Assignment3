// Q13. Count the Vowels and Consonants
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of 
// consonants in the given string.
// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.
// Input Format
// The first and only line of the input contains string S. 
// Output Format
// Return the number of Vowels and the number of Consonants in the string S in the functions.
// Constraints
// 1≤|S|≤100, where |S|denotes the length of string S. 
// Example
// Sample Input
// Prepbytes
// Sample Output
// 2 7

let str = "Prepbytes"

Count_Vowels = (str) => {
    let count = 0;
    for (let ele of str) {
        if (ele == "A" || ele == "a" || ele == "E" || ele == "e" || ele == "I" || ele == "i" || ele == "O" || ele == "o" || ele == "U" || ele == "u") {
            count++;
        }
    }
    return count;
}

console.log("No of vowels are: ", Count_Vowels(str));
console.log("No of consonants are:", str.length - Count_Vowels(str));