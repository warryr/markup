document.addEventListener('DOMContentLoaded', (e) => {
    const textInput = document.getElementById('input');
    let timeout = null;

    textInput.addEventListener('keyup', (e) => {
        const value = e.target.value;
        
        clearTimeout(timeout);

        if (value !== '') {
            timeout = setTimeout(() => console.log('You have typed: ', value), 1000);
        }
    });
});