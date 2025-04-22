function binaryToDecimal(num){
    num = new String(num)
    let l = num.length-1;
    let sum = 0;
    for (let item of num) {

        item = Number(item);
        // console.log(item)
        sum= sum + item*Math.pow(2,l)
        // console.log(sum)
        l=l-1
    }
    return sum;
}


function binaryToOctal(num){
    num = binaryToDecimal(num);
    let arr = []
    while(num!==0){
        let rem = num%8;
        arr.unshift(rem);
        num = Math.floor(num/8);
    }
    return arr.join('');
}

console.log(binaryToDecimal(0))