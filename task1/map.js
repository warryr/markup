function map(projectionFunction) {
  const array = [];
  for (let el of this) {
    array.push(projectionFunction(el));
  }
  return array;
}

module.exports = map