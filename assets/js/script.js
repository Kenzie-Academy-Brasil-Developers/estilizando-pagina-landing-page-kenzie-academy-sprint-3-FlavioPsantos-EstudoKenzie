

/* PARTE VICTOR */

const mostrarMenu = document.querySelector('#menu__open');
const fechaMenu = document.querySelector('#menu__close');
const modal = document.querySelector('#modal');

mostrarMenu.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mostrarMenu.classList.add('hidden');
    fechaMenu.classList.remove('hidden');
});

console.log('oi')

/* PARTE FLÁVIO */


