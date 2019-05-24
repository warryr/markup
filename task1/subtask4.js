const newReleases = require('./newReleases');
const map = require('./subtask1').map;
const filter = require('./subtask3').filter;

Array.prototype.map = map;
Array.prototype.filter = filter;

const ids = newReleases.filter(object => object.rating[0] === 5.0).map(object => object.id);

console.log(ids);