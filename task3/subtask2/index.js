document.addEventListener('DOMContentLoaded', (e) => {
    const youButton = document.getElementById('button');
    let interval = null;
    
    youButton.addEventListener('click', (e) => {
        if (interval === null) {
            interval = setInterval(() => console.log('You are welcome!'), 3000);
        } else {
            clearInterval(interval);
            interval = null;
        }
    });
});