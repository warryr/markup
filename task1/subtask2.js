const newReleases = require('./newReleases');
const map = require('./subtask1').map;

Array.prototype.map = map;

const newArray = newReleases.map(object => ({
    id: object.id,
    title: object.title,
}));

console.log(newArray);