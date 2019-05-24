const newReleases = require('./newReleases');

const newArray = newReleases.map(object => ({
    id: object.id,
    title: object.title,
}));

console.log(newArray);