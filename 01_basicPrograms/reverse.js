var reverse = function(x) {
    let rem = 0;
    let sum = 0;
    let isNegative = x<0;
    x = Math.abs(x);
    while(x!==0){
        rem=x%10;
        sum=sum*10+rem;
        x=Math.floor(x/10);
    }
    if(isNegative) sum=-sum;
    return sum 
};

console.log(reverse(-8987))