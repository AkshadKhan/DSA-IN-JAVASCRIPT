/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let l = digits.length-1;
    let num = digits[l];
    while(l>=0 && digits[l]===9){
        digits[l]=0;
        l--;
    } 
    if(l>=0){
        digits[l]+=1;
    }
    else {
        digits.unshift(1);
    }

    return digits;
};