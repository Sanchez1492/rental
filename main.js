//Show and hide nav menu

const menu = document.querySelector('.media')
const accountMenu = document.querySelector('.account')
const openMenu = document.querySelector('#open-menu-btn')
const closeMenu = document.querySelector('#close-menu-btn')


function toggleMenu() {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    menu.style.right = '0';
    accountMenu.style.right = '0'
}

closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    menu.style.right = '-100%'
    accountMenu.style.right = '-100%'
})