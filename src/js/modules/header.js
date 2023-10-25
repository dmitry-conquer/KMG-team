export function useHeader() {
  const burgerButton = document.getElementById("burger-button");
  const burgerMenu = document.getElementById("header-nav");

  if (burgerButton) {
    burgerButton.addEventListener("click", () => {
      if (!burgerMenu.classList.contains("active-menu")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
      burgerMenu.classList.toggle("active-menu");
      burgerButton.classList.toggle("open");
    });
    burgerMenu.addEventListener("click", e => {
      if (e.target.closest("a")) {
        burgerMenu.classList.remove("active-menu");
        burgerButton.classList.remove("open");
        document.body.style.overflow = null;
      }
    });
  }
}
