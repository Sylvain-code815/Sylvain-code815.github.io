// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let lastScrollY = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});
