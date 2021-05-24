// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// for(let char of string){
//     if(!chars[char]){
//         chars[char] = 1;
//     }else{
//         chars[char]++;
//     }
// }


// for(let char of string){
//     !chars[char] ? chars[char] = 1 : chars[char]++;
// }

// for(let char of string){
//     chars[char] = chars[char] + 1 || 1;
// }

// chars;

// function maxChar(str) {
//     const chars = {};
//     for(char of str){
//         if(chars[char]){
//             chars[char]++;
//         }else{
//             chars[char] = 1;
//         }
        
//     }
//     const max = Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
//     return max;
// }

function maxChar(str) {
    const chars = {};
    for(char of str){
        if(chars[char]){
            chars[char]++;
        }else{
            chars[char] = 1;
        }
    }
    console.log(chars)
    let maxValue = 0;
    let maxChar = '';
    for(char in chars){
        if(chars[char] > maxValue){
            maxValue = chars[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
