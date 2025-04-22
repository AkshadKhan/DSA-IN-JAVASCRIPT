
function decimalToBinary(num){
    if(num===0) return 0;
    let arr = []
    while(num!==0){
        let rem = num%2;
        arr.unshift(rem);
        num = Math.floor(num/2)
    }
    return arr.join('');
}

console.log(decimalToBinary(0))