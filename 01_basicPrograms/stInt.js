var myAtoi = function (s) {
    s = s.trim()
    let sign = (s[0] == '-') ? -1 : +1
    let x = s;
    if (sign === -1 || sign == +1) {
        x = s.substring(1)
    }
    let n = 0;
    for (let c of x) {
        if (isNaN(c)) return sign * n || 0;
        n = n * 10 + Number(c);
    }
    return sign * n;
};


console.log(myAtoi("+01002"))

var myAtoi = function (s) {
    s = s.trim();
    let sign = (s[0] === '-') ? -1 : +1;
    let x = s;

    if (s[0] === '-' || s[0] === '+') {
        x = s.substring(1); // only remove the sign, not digits
    }

    let n = 0;
    for (let c of x) {
        if (isNaN(c)) return sign * n || 0;
        n = n * 10 + Number(c);
    }

    return sign * n;
};

console.log(myAtoi("+01002")); // ✅ Output: 1002
