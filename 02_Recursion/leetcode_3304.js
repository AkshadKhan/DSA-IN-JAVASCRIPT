let arr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));


var kthCharacter = function(k , word="a") {
    if(word.length >= k){
        console.log(word)
        return word[k-1]
    }
    let newStr = ''
    for(let i =0 ;i<word.length;i++){
       newStr += arr[((arr.indexOf(word[i])) + 1)%26]
    }
   let str= word + newStr
    
    return kthCharacter(k, word = str);
};


console.log(kthCharacter(5)) 