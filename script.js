const body = document.querySelector(".preload");
const outline = document.querySelector(".outline");

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        body.id = "active";
        outline.id = "active-box";
    }, 100)
})

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("art1");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "flex";
    modal.classList.toggle("dark");
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    modal.classList.toggle("dark");
}