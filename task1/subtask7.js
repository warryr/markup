const reduce = require('./reduce');

Array.prototype.reduce = reduce;

const ratings = [2,3,1,4,5];
const maximum = ratings.reduce((max, current) => current > max ? current : max);

console.log(maximum);