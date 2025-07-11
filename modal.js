const modal = document.getElementById("myModal");
const galleryImages = document.querySelectorAll(".gallery .gallery-item");
const modalImg = document.getElementById("img01");

galleryImages.forEach(img => {
    img.onclick = function () {
        // onclick, show modal display as "flex"
        modal.style.display = "flex";
        // set a timeout so the page renders the transition
        setTimeout(() => {
            modal.classList.add("show")
            modalImg.classList.add("zoom");
        }, 0)
        // set the modal img to the img that was clicked
        modalImg.src = this.dataset.fullsrc;
    }
})

function closeModal() {
    // out transition
    modal.classList.remove("show")
    modalImg.classList.remove("zoom");
    // wait until classes are removed before displaying "none"
    setTimeout(() => modal.style.display = "none", 200);
}

const span = document.getElementsByClassName("close")[0];

span.onclick = closeModal;

modal.onclick = function (e) {
    if (e.target === modal) {
        closeModal();
    }
}