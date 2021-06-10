// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// -------------Method 1---------------
// function anagrams(stringA, stringB) {
// //     regexp to return only characters, then change all to lowercase
//     stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//     // get an obect with all the characters with the number of its repetition for both strings
//     let charsA = {};
//     for(let char of stringA){
//         charsA[char] = charsA[char] + 1 || 1;
//     }

//     let charsB = {};
//     for(let char of stringB){
//         charsB[char] = charsB[char] + 1 || 1;
//     }
    
//     // if both strings have same length meaning they both would have same number of characters

//     if(Object.keys(charsA).length !== Object.keys(charsB).length){
//         return false;
//     }

//     for(let char in charsA){
//         if(charsA[char] !== charsB[char]){
//             return false;
//         }
//     }

//     return true;
// }


// ------------Using chain function----------
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         return false;
//     }

//     for(let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(str){
//     const charMap = {}
//     for(let char of str.replace(/[^\w]/g, "").toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }


// -------Using sort-----------
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
    string = str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join();

    return string;
}

module.exports = anagrams;
