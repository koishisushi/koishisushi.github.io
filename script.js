const body = document.querySelector(".preload");
const outline = document.querySelector(".outline");

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        body.id = "active";
        outline.id = "active-box";
    }, 100)
})