const newReleases = require('./newReleases');

const ids = newReleases.filter(object => object.rating[0] === 5.0).map(object => object.id);

console.log(ids);