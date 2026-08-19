// ===========================
// Menú móvil (hamburguesa)
// ===========================
const navToggle = document.getElementById("navToggle");
const navbar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
  const isOpen = navbar.classList.contains("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Cierra el menú móvil al hacer clic en un link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
  });
});

// ===========================
// Acordeón de preguntas frecuentes (FAQ)
// ===========================
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Cierra los demás items abiertos (acordeón exclusivo)
    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-answer").style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove("open");
      answer.style.maxHeight = null;
    } else {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ===========================
// Sombra sutil en el navbar al hacer scroll
// ===========================
window.addEventListener("scroll", () => {
  if (window.scrollY > 8) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.25)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
