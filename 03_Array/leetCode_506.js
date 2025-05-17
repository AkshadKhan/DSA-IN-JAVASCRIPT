/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let n = score.length;
    let temp = score.map((e,i)=>[e,i]);
    temp.sort((a,b)=>b[0]-a[0]);
    let result = new Array(n);
    temp.forEach((e,i)=>{
        if(i===0){
            result[e[1]]="Gold Medal";
        }
        else if(i===1){
            result[e[1]]="Silver Medal";
        }
        else if(i===2){
            result[e[1]]="Bronze Medal";
        }
        else {
            result[e[1]]=String(i+1);
        }
    })
    return result;
};