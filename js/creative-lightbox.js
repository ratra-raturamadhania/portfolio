document.addEventListener(
  "DOMContentLoaded",
  function () {

    const artworks =
      document.querySelectorAll(
        ".creative-art"
      );


    if (artworks.length === 0) {
      return;
    }


    /* ==============================
       CREATE LIGHTBOX
    ============================== */

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


      <div
        class="creative-lightbox-inner"
      >

        <img
          class="creative-lightbox-image"
          src=""
          alt=""
        >


        <div
          class="creative-lightbox-meta"
        >

          <strong
            class="creative-lightbox-title"
          ></strong>

          <span
            class="creative-lightbox-subtitle"
          ></span>

        </div>

      </div>

    `;


    document.body.appendChild(
      lightbox
    );


    /* ==============================
       ELEMENTS
    ============================== */

    const image =
      lightbox.querySelector(
        ".creative-lightbox-image"
      );


    const title =
      lightbox.querySelector(
        ".creative-lightbox-title"
      );


    const subtitle =
      lightbox.querySelector(
        ".creative-lightbox-subtitle"
      );


    const closeButton =
      lightbox.querySelector(
        ".creative-lightbox-close"
      );


    /* ==============================
       OPEN
    ============================== */

    artworks.forEach(
      function (artwork) {

        artwork.addEventListener(
          "click",
          function () {

            const imagePath =
              artwork.dataset.image;


            const artworkTitle =
              artwork.dataset.title || "";


            const artworkSubtitle =
              artwork.dataset.subtitle || "";


            image.src =
              imagePath;


            image.alt =
              artworkTitle;


            title.textContent =
              artworkTitle;


            subtitle.textContent =
              artworkSubtitle;


            lightbox.classList.add(
              "active"
            );


            document.body.style.overflow =
              "hidden";

          }
        );

      }
    );


    /* ==============================
       CLOSE
    ============================== */

    function closeLightbox() {

      lightbox.classList.remove(
        "active"
      );


      document.body.style.overflow =
        "";

    }


    closeButton.addEventListener(
      "click",
      closeLightbox
    );


    /*
      Klik background gelap
      untuk menutup.
    */

    lightbox.addEventListener(
      "click",
      function (event) {

        if (
          event.target === lightbox
        ) {

          closeLightbox();

        }

      }
    );


    /*
      ESC keyboard
    */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape" &&
          lightbox.classList.contains(
            "active"
          )
        ) {

          closeLightbox();

        }

      }
    );

  }
);
