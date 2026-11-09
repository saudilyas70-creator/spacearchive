console.log("Space Archive website loaded!");

const exploreButton = document.querySelector(".explore-btn");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        alert("Welcome to the Space Exploration Archive!");
    });
}

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        window.open(image.src, "_blank", "noopener");
    });
});

