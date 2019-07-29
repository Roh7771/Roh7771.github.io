const button = document.querySelector('.scrollUp');

window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 670) {
        button.style.transform = 'scale(1)';
    }
    else {
        button.style.transform = 'scale(0)';
    }
})

button.addEventListener('click', (e) => {
    let currentYCoords = window.pageYOffset;
    let difference = currentYCoords;
    let timer = setInterval(() => {
        if (difference > 50) {
            difference -= 50;
            window.scrollTo(0, difference);
        } else {
            clearInterval(timer);
            window.scrollTo(0,0);
        }
    }, 5);
})