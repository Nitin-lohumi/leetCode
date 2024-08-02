/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let a;
    return function() {
         a =n;
         n= n+1;
         return a;  
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */