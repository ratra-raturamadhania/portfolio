/* ========================================
   MOBILE MENU
======================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  const mobileLinks = mobileMenu.querySelectorAll("a");

  mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });

  });

}


/* ========================================
   DESKTOP MOUSE PARALLAX
======================================== */

const hero = document.querySelector(".hero");
const heroVisual = document.querySelector(".hero-visual");
const profilePhoto = document.querySelector(".profile-photo");

const smallFlower = document.querySelector(".sunflower-small");
const largeFlower = document.querySelector(".sunflower-large");

const decorativeFlowers =
  document.querySelectorAll(".decorative-sunflower");


if (
  window.matchMedia("(min-width: 701px)").matches &&
  hero &&
  heroVisual
) {

  hero.addEventListener("mousemove", function (event) {

    const rect = hero.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const moveX =
      (mouseX - centerX) / centerX;

    const moveY =
      (mouseY - centerY) / centerY;


    if (profilePhoto) {

      profilePhoto.style.transform =
        `translate(
          ${moveX * 7}px,
          ${moveY * 7}px
        )`;

    }


    if (smallFlower) {

      smallFlower.style.setProperty(
        "--mouse-x",
        `${moveX * -14}px`
      );

      smallFlower.style.setProperty(
        "--mouse-y",
        `${moveY * -14}px`
      );

    }


    if (largeFlower) {

      largeFlower.style.setProperty(
        "--mouse-x",
        `${moveX * 17}px`
      );

      largeFlower.style.setProperty(
        "--mouse-y",
        `${moveY * 17}px`
      );

    }


    decorativeFlowers.forEach(function (flower, index) {

      const strength =
        6 + index * 3;

      flower.style.setProperty(
        "--mouse-x",
        `${moveX * strength}px`
      );

      flower.style.setProperty(
        "--mouse-y",
        `${moveY * strength}px`
      );

    });

  });


  hero.addEventListener("mouseleave", function () {

    if (profilePhoto) {
      profilePhoto.style.transform =
        "translate(0, 0)";
    }


    if (smallFlower) {

      smallFlower.style.setProperty(
        "--mouse-x",
        "0px"
      );

      smallFlower.style.setProperty(
        "--mouse-y",
        "0px"
      );

    }


    if (largeFlower) {

      largeFlower.style.setProperty(
        "--mouse-x",
        "0px"
      );

      largeFlower.style.setProperty(
        "--mouse-y",
        "0px"
      );

    }


    decorativeFlowers.forEach(function (flower) {

      flower.style.setProperty(
        "--mouse-x",
        "0px"
      );

      flower.style.setProperty(
        "--mouse-y",
        "0px"
      );

    });

  });

}


/* ========================================
   PROJECT CARD HOVER
======================================== */

const projectCards =
  document.querySelectorAll(".project-card");


if (window.matchMedia("(min-width: 701px)").matches) {

  projectCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        (centerY - y) / 45;

      const rotateY =
        (x - centerX) / 45;


      card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    });


    card.addEventListener("mouseleave", function () {

      card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

  });

}
