const menuButton = document.querySelector('.dropbtn');
const dropdownMenu = document.getElementById('myDropdown');

function showLinks() {
    dropdownMenu.classList.toggle('show');

}


menuButton.addEventListener('click', () => {
    showLinks();

})