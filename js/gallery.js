/* ==========================================
   Twinks n Lors DigitalFix Solutions
   gallery.js
========================================== */
document.addEventListener("DOMContentLoaded", function () {
    // Get all portfolio images
    const galleryImages = document.querySelectorAll(".portfolio-card img");
    if (galleryImages.length === 0)
        return;
    // Create Lightbox
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <span id="prevImage">&#10094;</span>
        <img id="lightboxImage">
        <div id="imageCaption"></div>
        <span id="nextImage">&#10095;</span>
    `;
    document.body.appendChild(lightbox);
    let currentIndex = 0;
    function showImage(index) {
        currentIndex = index;
        const image = galleryImages[index];
        document.getElementById("lightboxImage").src = image.src;
        document.getElementById("imageCaption").textContent =
            image.alt;
        lightbox.style.display = "flex";
    }
    galleryImages.forEach((img, index) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
            showImage(index);
        });
    });
    document.getElementById("closeLightbox").onclick = () => {
        lightbox.style.display = "none";
    };
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox)
            lightbox.style.display = "none";
    });
    document.getElementById("prevImage").onclick = () => {
        currentIndex--;
        if (currentIndex < 0)
            currentIndex = galleryImages.length - 1;
        showImage(currentIndex);
    };
    document.getElementById("nextImage").onclick = () => {
        currentIndex++;
        if (currentIndex >= galleryImages.length)
            currentIndex = 0;
        showImage(currentIndex);
    };
    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display !== "flex")
            return;
        if (e.key === "Escape")
            lightbox.style.display = "none";
        if (e.key === "ArrowLeft")
            document.getElementById("prevImage").click();
        if (e.key === "ArrowRight")
            document.getElementById("nextImage").click();
    });
});