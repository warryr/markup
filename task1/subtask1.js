Array.prototype.map = function(projectionFunction) {
    const array = [];
    for (let el of this) {
        array.push(projectionFunction(el));
    }
    return array;
};
  
console.log([1,2,3].map(function(x) { return x + 1; }))
console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');
  