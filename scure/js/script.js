const header = document.querySelector('.headder__black');
const headerRight = document.querySelector('.black__right');


console.log(headerRight);

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll > 20) {
        header.style.height = "0"
        headerRight.style.opacity = 0
    } else {
        header.style.height = "5rem"
        headerRight.style.opacity = 1


    }
});