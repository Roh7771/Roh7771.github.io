document.querySelector('.button').addEventListener('click', showModal)
document.querySelector('.button_consult').addEventListener('click', showModal)
document.querySelector('.catalog__content').addEventListener('click', showModal)

function showModal(e) {
    if (e.target.tagName !== 'BUTTON') return;
    document.querySelector('.outlay').classList.add('outlay_active');
    if (e.target.dataset.modalType === "consultation") {
        document.querySelector('.modal__consultation').classList.add('modal__consultation_active');
    }
    if (e.target.dataset.modalType === "order") {
        document.querySelector('.modal__order').classList.add('modal__order_active');
        let parrent = e.target.parentElement.parentElement;
        let name = parrent.getElementsByClassName('catalog__subtitle')[0];
        document.querySelectorAll('.modal__descr')[1].innerHTML = name.innerHTML
    }
}

document.querySelector('.outlay').addEventListener('click', hideModal)

function hideModal(e) {
    if (!e.target.classList.contains('modal__close')) return;
    e.target.parentElement.classList.remove(`${e.target.parentElement.classList[0]}_active`);
    document.querySelector('.outlay').classList.remove('outlay_active');
}