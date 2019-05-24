function map(projectionFunction) {
    const array = [];
    for (let el of this) {
        array.push(projectionFunction(el));
    }
    return array;
};

Array.prototype.map = map;
module.exports = { map };
  
console.log([1,2,3].map(function(x) { return x + 1; }))
console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');
  