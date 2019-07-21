let menu = document.querySelector('.menu')
let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', change_menu_state)
menu.addEventListener('click', link_click)

function change_menu_state(e) {
    if (hamburger.classList.contains('hamburger_active')) {
        menu.classList.remove('menu_active')
        hamburger.classList.remove('hamburger_active')
    } else  {
        menu.classList.add('menu_active')
        hamburger.classList.add('hamburger_active')
    }
}

function link_click(e) {
    if (e.target.tagName == 'A') {
        menu.classList.remove('menu_active')
        hamburger.classList.remove('hamburger_active') 
    }
}