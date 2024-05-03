let menuBar = document.getElementById('menu-bar');
let crossIcon = document.getElementById('cross-icon');
let dropdown = document.getElementById('dropdown');
menuBar.addEventListener('click', myFunction)
function myFunction() {
    dropdown.style=("display: block");
    dropdown.classList.add('hide');
    menuBar.style=("display:none")
    crossIcon.style=("display: block")
}
crossIcon.addEventListener('click', yourFunction)
function yourFunction() {
    dropdown.style = ("display:none");
    crossIcon.style = ("display:none");
    menuBar.style = ("display:block");
}