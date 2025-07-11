const modal = document.getElementById("myModal");
const galleryImages = document.querySelectorAll(".gallery .gallery-item");
const modalImg = document.getElementById("img01");

galleryImages.forEach(img => {
    img.onclick = function () {
        if (modal.classList.contains("show")) return;

        // set the modal img to the img that was clicked
        modalImg.src = this.dataset.fullsrc;
        // onclick, show modal display as "flex"
        modal.style.display = "flex";

        void modal.offsetHeight;
        modal.classList.add("show");
        modalImg.classList.add("zoom");
    }
})

function closeModal() {
    // out transition
    modal.classList.remove("show")
    modalImg.classList.remove("zoom");
}

const span = document.querySelector(".close");

span.onclick = closeModal;

modal.onclick = function (e) {
    if (e.target !== modal) {
        return;
    }
    closeModal();
}

// support for esc key to exit image view
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

// wait until classes are removed before displaying "none"
modal.addEventListener("transitionend", () => {
    if (!modal.classList.contains("show")) {
        modal.style.display = "none";
        modalImg.src = "";
    }
});
