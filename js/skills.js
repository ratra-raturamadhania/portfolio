document.addEventListener(
  "DOMContentLoaded",
  function () {

    const skillCategories =
      document.querySelectorAll(
        ".skill-category"
      );


    skillCategories.forEach(
      function (category) {

        const button =
          category.querySelector(
            ".skill-category-header"
          );


        button.addEventListener(
          "click",
          function () {

            const isActive =
              category.classList.contains(
                "active"
              );


            /* Tutup semua */

            skillCategories.forEach(
              function (item) {

                item.classList.remove(
                  "active"
                );


                const itemButton =
                  item.querySelector(
                    ".skill-category-header"
                  );


                itemButton.setAttribute(
                  "aria-expanded",
                  "false"
                );

              }
            );


            /* Kalau sebelumnya belum aktif,
               buka yang diklik */

            if (!isActive) {

              category.classList.add(
                "active"
              );


              button.setAttribute(
                "aria-expanded",
                "true"
              );

            }

          }
        );

      }
    );

  }
);
