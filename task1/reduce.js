function reduce(combiner, initialValue) {
  let accumulator = initialValue ? initialValue : 0;
  for (let value of this) {
    accumulator = combiner(accumulator, value);
  }
  return accumulator;
}

module.exports = reduce;