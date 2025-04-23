var isPalindrome = function(x) {
    let rem = 0;
    let reverse = 0;
    let num = x;
    x = Math.abs(x)
    while(x!==0){
        rem=x%10;
        reverse = reverse*10 + rem;
        x=Math.floor(x/10);
    }
    if(reverse===num) return true;
    else return false;
};

console.log(isPalindrome(-123))