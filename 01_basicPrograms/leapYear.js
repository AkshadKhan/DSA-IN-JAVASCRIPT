function leapYear(N){
    if(N%400===0) return true;
    else if(N%4===0 && N%100!==0) return true;
    else return false;
}

function main(){
    let N = 2025;
    let res = leapYear(N);
    console.log(`${(res)?"Yes it is":"Not"} a leap year`);
    return;
}

main();