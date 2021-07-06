

/* PARTE VICTOR */

const mostrarMenu = document.querySelector('#menu__open');
const fechaMenu = document.querySelector('#menu__close');
const modal = document.querySelector('#modal');

const openMenu = (event) => {
    modal.classList.remove('hidden');
    mostrarMenu.classList.add('hidden');
    fechaMenu.classList.remove('hidden');
}

const closeMenu = (event) => {
    modal.classList.add('hidden');
    mostrarMenu.classList.remove('hidden');
    fechaMenu.classList.add('hidden');
}


mostrarMenu.addEventListener('click', openMenu);

fechaMenu.addEventListener('click', closeMenu)

/* PARTE FLÁVIO */


