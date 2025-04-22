var addDigits = function(num) {
    let rem=0;
    let sum = 0;
    while(num>9){
        while(num!==0){
            rem=num%10
            sum+=rem;
            num=Math.floor(num/10);
        }
        if(Math.floor(sum/10)!==0){
            num=sum;
            rem=0;
            sum=0;
        }  
    }
    return sum || num
};

console.log(addDigits(49))