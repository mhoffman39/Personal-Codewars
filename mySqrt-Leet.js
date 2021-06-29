// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

var mySqrt = function(x) {
    let multiples = 0;
    let i = 0;
    while (i <= x) {
        if (i * i === x) {
            return i;
        } else {
            multiples = i * i;
        }
        if (multiples > x) {
            return i - 1;
        }
        i++;
    }
};

console.log(mySqrt(4))  //2