/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function (s, p) {
//     //edge case 
//     if (s.length < p.length && !p.includes("*")) {
//         return false;
//     }

//     let matches = '';

//     let stringStartPos = 0;
//     let stringEndPos = 0;

//     for (let i = 0; i < p.length; i++) {
//         if (p[i] == '*') {
//             stringEndPos = nextTerminatingCharPos(stringStartPos, s, p[i + 1])
//             // stringEndPos = s.length - (p.length - (i + 1))
//         } else if (p[i] == '?' && s[stringStartPos] || p[i] == s[stringStartPos]) {
//             stringEndPos++
//         } else {
//             return false;
//         }
//         matches += s.slice(stringStartPos, stringEndPos)
//         stringStartPos = stringEndPos
//     }

//     return matches.length == s.length;
// };

// var nextTerminatingCharPos = function (startPos, string, char) {
//     if (!char) {
//         return string.length;
//     }

//     for (let i = startPos; i < string.length; i++) {
//         if (string[i] == char) {
//             return i;
//         }
//     }

//     return startPos;
// }
// using DP table

var isMatch = function (s, p) {
    //construct table
    const table = []

    for (let i = 0; i <= s.length; i++) {
        table.push([])
    }

    // remove repeated * 
    let cleanedP = ""
    for (let i = 0; i < p.length; i++) {
        if (p[i] == '*' && cleanedP[cleanedP.length - 1] == '*') {
            continue
        }
        cleanedP += p[i]
    }
    p = cleanedP
    // first column
    for (let i = 0; i <= s.length; i++) {
        table[i][0] = false
    }
    // first row
    for (let j = 0; j <= p.length; j++) {
        table[0][j] = false
    }

    // fill first row and first column
    table[0][0] = true

    if (p[0] == '*') {
        table[0][1] = true
    }
    // solve every subproblem and fill the rest of the table
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] == s[i - 1] || p[j - 1] == '?') {
                table[i][j] = table[i - 1][j - 1]
            } else if (p[j - 1] == '*') {
                table[i][j] = table[i][j - 1] || table[i - 1][j]
            } else {
                table[i][j] = false
            }
        }
    }

    return table[s.length][p.length]
};