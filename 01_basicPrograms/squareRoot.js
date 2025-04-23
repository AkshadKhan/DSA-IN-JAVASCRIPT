
// the function should return floor of square root e.g if num = 5 , then output should be => 2


// function sqrt(num){
//     return Math.floor(Math.sqrt(num))
// }

let num = 4;

let sqrt = 0;
for(let i=0;i<=num;i++){
    if(i**2 <= num){
        sqrt = i;
    }
   
}
console.log(sqrt)
