const button = document.querySelector(".navbar__ham");
const menu = document.querySelector(".navbar__links");

button.addEventListener("click", () => {
    button.classList.toggle("open");
    menu.classList.toggle("navbar__open");
});

const imgExploreBtn = document.getElementById("hero__img-explore");

// Update the image source on btn click
imgExploreBtn.onclick = function () {
  document.getElementById("hero__image").src =
    "image/h1_hero1.jpg.webp" + new Date().getTime();
};
