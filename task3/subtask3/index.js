document.addEventListener('DOMContentLoaded', (e) => {
    const secondsButton = document.getElementById('button');
    let interval = null;

    const generateSeconds = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

    secondsButton.addEventListener('click', (e) => {
        if (interval === null) {
            const seconds = generateSeconds(1, 4);
            interval = setInterval(() => console.log(seconds + ' seconds'), seconds * 1000);
        } else {
            clearInterval(interval);
            interval = null;
        }
    });
});