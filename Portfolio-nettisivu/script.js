//document.addEventListener("DOMContentLoaded", function() {
    //const menuIcon = document.querySelector(".menu-icon");
    //const navbarMenu = document.querySelector(".navbar ul");

    //menuIcon.addEventListener("click", function() {
        //navbarMenu.classList.toggle("show");
    //})
//})

//document.querySelector(".menu-icon").addEventListener("click", function() {
  //  const menu = document.querySelector(".menu-items");
    //menu.classList.toggle("show");
//})




document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarMenu = document.querySelector(".menu-items");

    menuIcon.addEventListener("click", function() {
        navbarMenu.classList.toggle("show");
    });
});