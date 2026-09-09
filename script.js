const revealElements =
  document.querySelectorAll(".reveal");


function revealOnScroll() {

  const windowHeight =
    window.innerHeight;


  revealElements.forEach(
    element => {

      const elementTop =
        element
          .getBoundingClientRect()
          .top;


      if (
        elementTop
        <
        windowHeight - 80
      ) {

        element
          .classList
          .add("visible");

      }

    }
  );

}


window.addEventListener(
  "scroll",
  revealOnScroll
);


revealOnScroll();



const menuButton =
  document.getElementById(
    "menuButton"
  );


const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );


menuButton.addEventListener(
  "click",
  () => {

    mobileMenu
      .classList
      .toggle("active");

  }
);



const mobileLinks =
  mobileMenu
    .querySelectorAll("a");


mobileLinks.forEach(
  link => {

    link.addEventListener(
      "click",
      () => {

        mobileMenu
          .classList
          .remove("active");

      }
    );

  }
);
