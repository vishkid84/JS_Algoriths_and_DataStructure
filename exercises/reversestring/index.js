// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     reversed = '';
//     for(let char of str){
//         reversed = char + reversed;
//     }
//     return reversed;
// }

// function reverse(str) {
//     reversed = str.split('').reverse().join('');
//     return reversed;
// }

function reverse(str) {
    return str.split('').reduce((rev, char) => {
        return char + rev;
    })
}

module.exports = reverse;
