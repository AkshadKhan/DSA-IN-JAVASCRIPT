function fact(n){
    if(n<0) return -1;
    if(n==0 || n==1) return 1;
    return n*fact(n-1);
}



// Test the function
console.log(fact(0)); // Output: 1
console.log(fact(1)); // Output: 1
console.log(fact(2)); // Output: 2
console.log(fact(3)); // Output: 6
console.log(fact(4)); // Output: 24
console.log(fact(5)); // Output: 120
console.log(fact(6)); // Output: 720
console.log(fact(7)); // Output: 5040
