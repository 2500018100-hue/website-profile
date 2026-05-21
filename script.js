const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("show");
  hamburger.classList.toggle("open", isOpen);
});

function closeMobileMenu() {
  mobileMenu.classList.remove("show");
  hamburger.classList.remove("open");
}

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id,
          );
        });
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach((s) => observer.observe(s));

const fadeEls = document.querySelectorAll(
  ".skill-card, .profil-grid, .home-inner",
);
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeUp 0.6s ease ${i * 0.08}s both`;
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

fadeEls.forEach((el) => fadeObserver.observe(el));
