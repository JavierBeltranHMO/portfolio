/**
 * Header toggle
 */
const headerToggleBtn = document.querySelector(".header-toggle");

function headerToggle() {
  document.querySelector("#header").classList.toggle("header-show");
  headerToggleBtn.classList.toggle("bi-list");
  headerToggleBtn.classList.toggle("bi-x");
}
headerToggleBtn.addEventListener("click", headerToggle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll("#navmenu a").forEach((navmenu) => {
  navmenu.addEventListener("click", () => {
    if (document.querySelector(".header-show")) {
      headerToggle();
    }
  });
});
