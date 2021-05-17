// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     pal = str.split('').reverse().join('');
//     return str === pal;
// }

// function palindrome(str) {
//     let pal = '';
//     for(let char of str){
//         pal = char + pal;
//     }
//     return str === pal;
// }

// function palindrome(str) {
//     pal = str.split('').reduce((char, rev) => {
//         return rev + char;
//     });
//     return str === pal;
// }

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}


module.exports = palindrome;
