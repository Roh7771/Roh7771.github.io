document.querySelector('.button_promo').addEventListener('click', showModal)
document.querySelector('.button_header').addEventListener('click', showModal)
document.querySelector('.button_footer').addEventListener('click', showModal)

function showModal(e) {
    if (e.target.tagName !== 'BUTTON') return;
    if (document.querySelector('.modal__thanks').style.display == 'block') {
        document.querySelector('.modal__thanks').style.display = 'none';
    }
    document.querySelector('.outlay').style.display = "block";
    document.querySelector('.outlay').style.opacity = 1;
    document.querySelector('.modal__consultation').style.display = "block";
}

document.querySelector('.outlay').addEventListener('click', hideModal)

function hideModal(e) {
    if (!e.target.classList.contains('modal__close')) return;
    document.querySelector('.outlay').style.display = "none";
}

// const submitButtons = document.querySelectorAll('.button_submit');
// for (button of Array.from(submitButtons)) {
//     button.addEventListener('click', showThanksWindow);
// }

// function showThanksWindow() {
//     document.querySelector('.modal__consultation').style.display = "none";
//     document.querySelector('.modal__thanks').style.display = 'block'
// }