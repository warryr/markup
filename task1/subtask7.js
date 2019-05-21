const ratings = [2,3,1,4,5];

let maximum = ratings.reduce((max, current) => current > max ? current : max);

console.log(maximum);