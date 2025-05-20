
// Menu burger
document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});

// Animation au scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



// HORAIRES dynamiques
document.addEventListener("DOMContentLoaded", () => {
  const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const now = new Date();
  const currentDay = now.getDay();
  const heure = now.getHours();
  const liste = document.querySelectorAll("#horaires-liste li");
  const etat = document.getElementById("etat-ouverture");

  if (liste.length > 0) {
    liste[currentDay].style.fontWeight = "bold";
    if (currentDay === 0 || (currentDay === 6 && heure > 14) || heure < 7 || heure > 19) {
      etat.textContent = "Actuellement fermé";
    } else {
      etat.textContent = "Actuellement ouvert";
    }
  }

  // Retour en haut
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Animations au scroll
  const observers = document.querySelectorAll(".fade-in");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  observers.forEach(el => io.observe(el));
});

const images = [
  "images/slider1.jpg",
  "images/slider2.jpg",
  "images/slider3.jpg",
  "images/slider4.jpg",
  "images/slider5.jpg"
];

let current = 0;
const layers = document.querySelectorAll(".slide-layer");

// précharger toutes les images
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

setInterval(() => {
  layers[current % 2].classList.remove("active");
  current = (current + 1) % images.length;
  const nextLayer = layers[current % 2];
  nextLayer.style.backgroundImage = `url('${images[current]}')`;
  nextLayer.classList.add("active");
}, 6000);
