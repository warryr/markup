function filter(predicateFunction) {
  const array = [];
  for (let el of this) {
    if (predicateFunction(el)) {
      array.push(el);
    }
  }
  return array;
}

module.exports = filter;