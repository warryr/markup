const filter = require('./filter');

Array.prototype.filter = filter;
  
console.log([1,2,3].filter(function(x) { return x > 2; }));
console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2; })) === "[3]");
  