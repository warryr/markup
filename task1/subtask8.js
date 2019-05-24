const map = require('./subtask1').map;
const reduce = require('./subtask6').reduce;

Array.prototype.map = map;
Array.prototype.reduce = reduce;

const boxarts = [{
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
}, {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
}, {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}, {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
}];

const obj = boxarts.map(boxart => ({
    square: boxart.width * boxart.height,
    url: boxart.url
})).reduce((acc, boxart) => {
    return boxart.square > acc.maxSquare ?
        {maxSquare: boxart.square, url: boxart.url} :
        {...acc}
}, {maxSquare: 0, url: ''});

console.log(obj.url);
    