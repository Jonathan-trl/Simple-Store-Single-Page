const nav = document.getElementById("nav-submenu");
const sticky = nav.offsetTop;

console.log(sticky);

document.addEventListener("scroll", () => {
    if(window.pageYOffset > sticky){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
});