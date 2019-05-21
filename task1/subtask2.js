const newReleases = require('./newReleases');

const newArray = newReleases.map(object => ({
    id: object.id,
    title: object.title,
    boxart: object.boxart,
    uri: object.uri,
    rating: object.rating,
    bookmark: object.bookmark,
}));

console.log(newArray);