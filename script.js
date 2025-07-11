const body = document.querySelector(".preload");
const outline = document.querySelector(".outline");

// add a transition when page has loaded
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        body.id = "active";
        outline.id = "active-box";
    }, 100)
})