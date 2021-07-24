const nav = document.getElementById("nav-submenu");

const overlay = document.getElementById("overlay");

const openNav = document.getElementById("bars");

const closeNav = document.getElementById("close");

openNav.addEventListener("click", () => {
    nav.classList.add("active");
    overlay.classList.add("active");
})

closeNav.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
})