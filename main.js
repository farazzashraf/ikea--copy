const hamburgerElement = document.querySelector('aside');
const butttonElement = document.querySelector('button');
const menuElement = document.getElementById('menu');

function openElement() {
    menuElement.style.display = 'block';
}

function closeElement() {
    menuElement.style.display = 'none';
}

hamburgerElement.addEventListener('click', openElement);
butttonElement.addEventListener('click', closeElement)