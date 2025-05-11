/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    console.log(n);
    if(n==1) return true;
    else if(n<1) {
        return false;
    }
    else return isPowerOfTwo(n/2);
};


console.log(isPowerOfTwo(0.02));
// console.log(isPowerOfTwo(1));