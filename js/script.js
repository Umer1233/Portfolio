const menuButton =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


document
    .querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

        });

    });


document.getElementById("year").textContent =
    new Date().getFullYear();