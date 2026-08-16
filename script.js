/* Notes House Showcase — behavior */

const root = document.documentElement;
const body = document.body;

const themeToggle = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function setTheme(dark) {
  body.classList.toggle("dark", dark);
  localStorage.setItem("notesHouseTheme", dark ? "dark" : "light");
  themeToggle.textContent = dark ? "☾" : "☼";
}
setTheme(localStorage.getItem("notesHouseTheme") === "dark");

themeToggle.addEventListener("click", () => setTheme(!body.classList.contains("dark")));

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
document.querySelectorAll(".mobile-menu a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.querySelector(".scroll-progress").style.width = `${progress}%`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* Lightbox */
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll("[data-lightbox]").forEach(card => {
  card.addEventListener("click", () => {
    lightboxImage.src = card.dataset.lightbox;
    lightboxImage.alt = card.dataset.title || "Notes House screen";
    lightboxTitle.textContent = card.dataset.title || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

/* Apply team links from config.js */
function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}
document.querySelectorAll("[data-link]").forEach(link => {
  const value = getPath(SITE_CONFIG.team, link.dataset.link);
  if (value && value !== "#") {
    link.href = value;
    link.target = "_blank";
    link.rel = "noreferrer";
  } else {
    link.classList.add("disabled");
    link.setAttribute("aria-disabled", "true");
    link.addEventListener("click", e => e.preventDefault());
  }
});

/* APK + documentation */
const apkDownload = document.getElementById("apkDownload");
const docDownload = document.getElementById("docDownload");
const apkNote = document.getElementById("apkNote");

if (SITE_CONFIG.apkUrl) {
  apkDownload.href = SITE_CONFIG.apkUrl;
  if (SITE_CONFIG.apkUrl.includes("#")) {
    apkDownload.classList.add("disabled");
  }
}
if (SITE_CONFIG.documentationUrl) {
  docDownload.href = SITE_CONFIG.documentationUrl;
}
