// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let stringed = n.toString().split('');
//     if(stringed[0] === '-'){
//         let removed = stringed.shift(); //this removes the first item in the array, so removed in this case is '-'
//         let reversed = removed + stringed.reverse().join('');
//         n = parseInt(reversed);
//         return n;
//     }
//     n = parseInt(stringed.reverse().join(''))
//     return n;
// }

// function reverseInt(n) {
//    let reversed = n.toString().split('').reverse().join('');
//    if(n<0){
//       return parseInt(reversed) * -1;
//    }
//    return parseInt(reversed);
// }

function reverseInt(n) {
   let reversed = n.toString().split('').reverse().join('');
   return parseInt(reversed) * Math.sign(n);
}

reverseInt(35);

reverseInt(-30);

module.exports = reverseInt;
