const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


menuButton.addEventListener(
  "click",
  function () {

    mobileMenu.classList.toggle(
      "active"
    );

  }
);


const mobileLinks =
  mobileMenu.querySelectorAll("a");


mobileLinks.forEach(
  function (link) {

    link.addEventListener(
      "click",
      function () {

        mobileMenu.classList.remove(
          "active"
        );

      }
    );

  }
);
