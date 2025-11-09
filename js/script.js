const navbarId = document.getElementById('navbarId');
const menuBar = document.getElementById('menuBar');

function toggleNavbar(e) {
    e.stopPropagation();
    navbarId.classList.toggle('show');
}

menuBar.addEventListener('click', toggleNavbar);