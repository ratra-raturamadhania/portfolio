const lightboxImages = document.querySelectorAll(
  ".phone-shot img, .desktop-shot img, .iot-main-photo img, .iot-gallery-card img, .iot-diagram-image img"
);

if (lightboxImages.length > 0) {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";

  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close image">×</button>
    <img class="lightbox-image" src="" alt="">
  `;

  document.body.appendChild(overlay);

  const lightboxImage = overlay.querySelector(".lightbox-image");
  const closeButton = overlay.querySelector(".lightbox-close");

  lightboxImages.forEach(function (image) {
    image.classList.add("lightbox-trigger");

    image.addEventListener("click", function () {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt || "";

      overlay.classList.add("active");

      document.body.classList.add("lightbox-open");
    });
  });

  function closeLightbox() {
    overlay.classList.remove("active");
    document.body.classList.remove("lightbox-open");
  }

  closeButton.addEventListener("click", closeLightbox);

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}
