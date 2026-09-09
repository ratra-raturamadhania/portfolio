document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     SMOOTH SCROLL
  ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const id = this.getAttribute("href");

      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


  /* =========================================
     REVERSIBLE SCROLL REVEAL
  ========================================= */

  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }

      });
    },
    {
      threshold: 0.12,
      rootMargin: "-20px 0px -20px 0px"
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =========================================
     ACTIVE NAVBAR
  ========================================= */

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        navLinks.forEach(link => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });

      });

    },
    {
      threshold: 0.3
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  /* =========================================
     SUNFLOWER PARALLAX
  ========================================= */

  const sunflowers = document.querySelectorAll(
    ".sunflower, .decorative-sunflower"
  );

  let mouseX = 0;
  let mouseY = 0;

  if (window.matchMedia("(pointer: fine)").matches) {

    document.addEventListener("mousemove", e => {

      mouseX =
        (e.clientX / window.innerWidth - 0.5);

      mouseY =
        (e.clientY / window.innerHeight - 0.5);

      sunflowers.forEach((flower, index) => {

        const strength = 5 + index * 2;

        flower.style.setProperty(
          "--flower-x",
          `${mouseX * strength}px`
        );

        flower.style.setProperty(
          "--flower-y",
          `${mouseY * strength}px`
        );

        flower.style.setProperty(
          "--flower-rotate",
          `${mouseX * 4}deg`
        );

      });

    });

  }


  /* =========================================
     SCROLL MOVEMENT
     GERAK ↓ DAN ↑
  ========================================= */

  let lastScroll = window.scrollY;
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {

      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {

        const currentScroll = window.scrollY;

        /*
        Nilai berasal langsung dari scroll position.

        Jadi:
        turun = bertambah
        naik = berkurang

        Otomatis reversible.
        */

        sunflowers.forEach((flower, index) => {

          const speed =
            0.012 + index * 0.003;

          const rotation =
            currentScroll * speed;

          const floating =
            Math.sin(
              currentScroll * 0.004 + index
            ) * 5;

          flower.style.setProperty(
            "--flower-scroll",
            `${rotation}deg`
          );

          flower.style.setProperty(
            "--flower-float",
            `${floating}px`
          );

        });


        /* =====================================
           DETECT SCROLL DIRECTION
        ===================================== */

        if (currentScroll > lastScroll) {

          document.body.classList.remove("scroll-up");
          document.body.classList.add("scroll-down");

        } else {

          document.body.classList.remove("scroll-down");
          document.body.classList.add("scroll-up");

        }

        lastScroll = currentScroll;

        ticking = false;

      });

    },
    {
      passive: true
    }
  );


  /* =========================================
     PROJECT CARD TILT
  ========================================= */

  if (window.matchMedia("(pointer: fine)").matches) {

    document.querySelectorAll(".project-card").forEach(card => {

      card.addEventListener("mousemove", e => {

        const rect =
          card.getBoundingClientRect();

        const x =
          e.clientX - rect.left;

        const y =
          e.clientY - rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          ((y - centerY) / centerY) * -2;

        const rotateY =
          ((x - centerX) / centerX) * 2;

        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-4px)
        `;

      });


      card.addEventListener("mouseleave", () => {

        card.style.transform = "";

      });

    });

  }

});
