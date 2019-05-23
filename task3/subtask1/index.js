document.addEventListener('DOMContentLoaded', (e) => {
    const helloButton = document.getElementById('button');
    let timeout = null;

    helloButton.addEventListener('click', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => console.log('Hello World'), 5000);
    });
});

