const map = require('./map');

Array.prototype.map = map;
  
console.log([1,2,3].map(function(x) { return x + 1; }))
console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');
  