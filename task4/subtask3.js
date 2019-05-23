const generateTime = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

new Promise((resolve, reject) => {
    let seconds = generateTime(1, 3);
    if (seconds > 2) {
        setTimeout(() => reject('Execution took too long!'), seconds * 1000);
    } else {
        setTimeout(() => resolve('Executed normally'), seconds * 1000);
    }
})
.then((message) => console.log(message))
.catch((error) => console.error(error));
