var element = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");
toggleButton.onclick = function () {
    element.classList.toggle("toggled");
}; 