Array.prototype.reduce = function(combiner, initialValue) {
    let accumulator = initialValue ? initialValue : 0;
    for (let value of this) {
        accumulator = combiner(accumulator, value);
    }
    return accumulator;
}

console.log([1,2,3].reduce(function(memo, item) { return memo + item; }) === 6);
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10) === 16);