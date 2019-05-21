Array.prototype.filter = function(predicateFunction) {
    const array = [];
    for (let el of this) {
        if (predicateFunction(el)) {
            array.push(el);
        }
    }
    return array;
  };
  
  console.log([1,2,3].filter(function(x) { return x > 2; }));
  console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2; })) === "[3]");
  