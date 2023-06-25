/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n, cache = {}) {
//     if (n <= 1) {
//         return n;
//     }

//     if (cache[n]) {
//         return cache[n];
//     }

//     cache[n] = fib(n - 1, cache) + fib(n - 2, cache);

//     return cache[n];
// };

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) {
        return n;
    }

    let firstHolder = 1;
    let secondHolder = 1;
    for (let i = 2; i < n; i++) {
        temp = secondHolder
        secondHolder = firstHolder + secondHolder
        firstHolder = temp
    }
    return secondHolder;
};

/**
for n = 5 
 firstHolder
   \  
  [1,1,2,3,5,8]
    /
secondHolder
*/
