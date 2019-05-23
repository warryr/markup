const generateNumber = (min, max) => {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const generateFunction = (index, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Function #' + index);
            console.log('Executed in ' + delay + ' seconds');
            resolve();
        }, delay * 1000);
    });
};

const work = () => {
    const numberOfFunctions = generateNumber(1, 10);
    const promises = [];

    const startTime = new Date().getTime();

    for (let i = 1; i < numberOfFunctions; i++) {
        let time = generateNumber(1, 10);
        promises.push(generateFunction(i, time));
    }

    Promise.all(promises)
    .then(() => {
        const endTime = new Date().getTime();
        const seconds = Math.round((endTime - startTime) / 1000);
        console.log('Congrats! Work is done! Whole process took ' + seconds + ' seconds');
    });
};

work();
