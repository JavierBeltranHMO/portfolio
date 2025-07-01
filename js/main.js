//Header toggle
const headerToggleBtn = document.querySelector(".header-toggle");

function headerToggle() {
  document.querySelector("#header").classList.toggle("header-show");
  headerToggleBtn.classList.toggle("bi-list");
  headerToggleBtn.classList.toggle("bi-x");
}
headerToggleBtn.addEventListener("click", headerToggle);

//Hide mobile nav on same-page/hash links
document.querySelectorAll("#navmenu a").forEach((navmenu) => {
  navmenu.addEventListener("click", () => {
    if (document.querySelector(".header-show")) {
      headerToggle();
    }
  });
});

//Navmenu Scroll
let navmenulinks = document.querySelectorAll(".navmenu a");

function navmenuScrollspy() {
  navmenulinks.forEach((navmenulink) => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      document
        .querySelectorAll(".navmenu a.active")
        .forEach((link) => link.classList.remove("active"));
      navmenulink.classList.add("active");
    } else {
      navmenulink.classList.remove("active");
    }
  });
}
window.addEventListener("load", navmenuScrollspy);
document.addEventListener("scroll", navmenuScrollspy);

// section fade in animation
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // solo se anima una vez
      }
    });
  },
  {
    threshold: 0.1, // activa cuando el 10% del elemento está visible
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

//progressbar fill
const progressBars = document.querySelectorAll(".progress.reveal-bar");

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector(".progress-bar");
        const val = entry.target.querySelector(".val");
        const target = parseInt(bar.getAttribute("data-progress"), 10);

        // Animar la barra
        bar.style.width = `${target}%`;

        // Animar el número
        let count = 0;
        const interval = setInterval(() => {
          if (count <= target) {
            val.textContent = `${count}%`;
            count++;
          } else {
            clearInterval(interval);
          }
        }, 10); // 10ms por incremento (~1s total)

        observer2.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

progressBars.forEach((bar) => observer2.observe(bar));
