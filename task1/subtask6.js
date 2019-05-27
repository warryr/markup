const reduce = require('./reduce');

Array.prototype.reduce = reduce;

console.log([1,2,3].reduce(function(memo, item) { return memo + item; }) === 6);
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10) === 16);
