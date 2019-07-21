const tabsList = document.querySelectorAll('.catalog__tabs')
let currentTab = document.querySelector(".catalog__tab");
const productsBlocks = Array.from(document.querySelector('.catalog__content').children)
let currentProductBlock = productsBlocks[0];

document.querySelector('.catalog__tabs').addEventListener('click', (e) => {
    let target = e.target;
    while (target.tagName != ('LI')) {
        if (target.tagName === ('UL')) return;
        target = target.parentElement;
    }
    if (target.classList.contains('catalog__tab_active')) return;
    else {
        currentTab.classList.remove('catalog__tab_active');
        currentProductBlock.classList.remove(`${currentProductBlock.classList[0]}_active`);
        currentTab = target;
        target.classList.add('catalog__tab_active');
        currentProductBlock = productsBlocks[+target.dataset.tabNumber];
        currentProductBlock.classList.add(`${currentProductBlock.classList[0]}_active`);
    }
});

document.querySelector('.catalog__content').addEventListener('click', (e) => {
    if (!e.target.classList.contains('catalog__link')) return;
    if (e.target.parentElement.classList.contains('catalog__product')) {
        e.target.parentElement.classList.remove('catalog__product_active')
        e.target.parentElement.nextElementSibling.classList.add('catalog__list_active') 
    } else {
        e.target.parentElement.classList.remove('catalog__list_active')
        e.target.parentElement.previousElementSibling.classList.add('catalog__product_active')
    }
})