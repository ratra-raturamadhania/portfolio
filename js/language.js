const languageButtons =
  document.querySelectorAll(".lang-button");

const translatableElements =
  document.querySelectorAll("[data-en][data-id]");


function setLanguage(language) {

  translatableElements.forEach(function (element) {

    element.textContent =
      element.dataset[language];

  });


  languageButtons.forEach(function (button) {

    button.classList.toggle(
      "active",
      button.dataset.lang === language
    );

  });


  document.documentElement.lang =
    language === "id"
      ? "id"
      : "en";


  localStorage.setItem(
    "portfolioLanguage",
    language
  );

}


languageButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    setLanguage(
      button.dataset.lang
    );

  });

});


const savedLanguage =
  localStorage.getItem(
    "portfolioLanguage"
  ) || "en";


setLanguage(savedLanguage);
