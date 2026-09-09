const creativeArtworks =
  document.querySelectorAll(".creative-art");


if (creativeArtworks.length > 0) {

  const lightbox =
    document.createElement("div");


  lightbox.className =
    "creative-lightbox";


  lightbox.innerHTML = `

    <button
      class="creative-lightbox-close"
      type="button"
      aria-label="Close artwork"
    >
      ×
    </button>

    <div class="creative-lightbox-inner">

      <img
        class="creative-lightbox-image"
        src=""
        alt=""
      >

      <div class="creative-lightbox-meta">

        <strong
          class="creative-lightbox-title"
        ></strong>

        <span
          class="creative-lightbox-subtitle"
        ></span>

      </div>

    </div>

  `;


  document.body.appendChild(lightbox);


  const lightboxImage =
    lightbox.querySelector(
      ".creative-lightbox-image"
    );


  const lightboxTitle =
    lightbox.querySelector(
      ".creative-lightbox-title"
    );


  const lightboxSubtitle =
    lightbox.querySelector(
      ".creative-lightbox-subtitle"
    );


  const closeButton =
    lightbox.querySelector(
      ".creative-lightbox-close"
    );


  creativeArtworks.forEach(function (artwork) {

    artwork.addEventListener(
      "click",
      function () {

        lightboxImage.src =
          artwork.dataset.image;


        lightboxImage.alt =
          artwork.dataset.title || "Artwork";


        lightboxTitle.textContent =
          artwork.dataset.title || "";


        lightboxSubtitle.textContent =
          artwork.dataset.subtitle || "";


        lightbox.classList.add("active");


        document.body.style.overflow =
          "hidden";

      }
    );

  });


  function closeCreativeLightbox() {

    lightbox.classList.remove("active");


    document.body.style.overflow =
      "";

  }


  closeButton.addEventListener(
    "click",
    closeCreativeLightbox
  );


  lightbox.addEventListener(
    "click",
    function (event) {

      if (event.target === lightbox) {

        closeCreativeLightbox();

      }

    }
  );


  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        closeCreativeLightbox();

      }

    }
  );

}
