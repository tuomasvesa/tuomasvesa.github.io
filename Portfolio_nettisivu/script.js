document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarMenu = document.querySelector(".navbar ul");

    menuIcon.addEventListener("click", function() {
        navbarMenu.classList.toggle("show");
    })
})