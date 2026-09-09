document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     SMOOTH SCROLL
  ========================================= */

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


  /* =========================================
     SCROLL REVEAL
  ========================================= */

  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );

  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }

      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });


  /* =========================================
     ACTIVE NAVBAR SECTION
  ========================================= */

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const navLinks = document.querySelectorAll(
    ".nav-links a[href^='#']"
  );

  const sectionObserver = new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (!entry.isIntersecting) {
          return;
        }

        const activeId = entry.target.id;

        navLinks.forEach(function (link) {
          link.classList.remove("active");

          if (
            link.getAttribute("href") ===
            "#" + activeId
          ) {
            link.classList.add("active");
          }
        });

      });

    },
    {
      threshold: 0.35
    }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });


  /* =========================================
     SUNFLOWER MOUSE MOVEMENT
  ========================================= */

  const sunflowers = document.querySelectorAll(
    ".sunflower, .decorative-sunflower"
  );

  if (
    window.matchMedia("(pointer: fine)").matches
  ) {

    document.addEventListener(
      "mousemove",
      function (event) {

        const x =
          (event.clientX / window.innerWidth - 0.5);

        const y =
          (event.clientY / window.innerHeight - 0.5);

        sunflowers.forEach(
          function (flower, index) {

            const movement =
              7 + index * 2;

            const rotation =
              x * (3 + index);

            flower.style.setProperty(
              "--flower-x",
              `${x * movement}px`
            );

            flower.style.setProperty(
              "--flower-y",
              `${y * movement}px`
            );

            flower.style.setProperty(
              "--flower-rotate",
              `${rotation}deg`
            );

          }
        );

      }
    );

  }


  /* =========================================
     SUNFLOWER SCROLL ROTATION
  ========================================= */

  let ticking = false;

  window.addEventListener(
    "scroll",
    function () {

      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(
        function () {

          const scrollPosition =
            window.scrollY;

          sunflowers.forEach(
            function (flower, index) {

              const scrollRotation =
                scrollPosition *
                (0.008 + index * 0.002);

              flower.style.setProperty(
                "--flower-scroll",
                `${scrollRotation}deg`
              );

            }
          );

          ticking = false;

        }
      );

    },
    {
      passive: true
    }
  );


  /* =========================================
     PROJECT CARD POINTER TILT
  ========================================= */

  const projectCards =
    document.querySelectorAll(
      ".project-card"
    );

  if (
    window.matchMedia("(pointer: fine)").matches
  ) {

    projectCards.forEach(
      function (card) {

        card.addEventListener(
          "mousemove",
          function (event) {

            const rect =
              card.getBoundingClientRect();

            const x =
              event.clientX -
              rect.left;

            const y =
              event.clientY -
              rect.top;

            const centerX =
              rect.width / 2;

            const centerY =
              rect.height / 2;

            const rotateX =
              ((y - centerY) / centerY) * -2;

            const rotateY =
              ((x - centerX) / centerX) * 2;

            card.style.transform =
              `perspective(900px)
               rotateX(${rotateX}deg)
               rotateY(${rotateY}deg)
               translateY(-5px)`;

          }
        );


        card.addEventListener(
          "mouseleave",
          function () {

            card.style.transform = "";

          }
        );

      }
    );

  }

});
