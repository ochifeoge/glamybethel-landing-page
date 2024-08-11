ScrollReveal().reveal(".reveal-header", {
  origin: "top",
  distance: "20px",
  duration: 800,
  delay: 100,
});

ScrollReveal().reveal(".reveal-h", {
  origin: "left",
  distance: "200px",
  duration: 2000,
  delay: 400,
});
ScrollReveal().reveal(".reveal-p", {
  origin: "left",
  distance: "200px",
  duration: 2000,
  delay: 1500,
});
ScrollReveal().reveal(".reveal-icon", {
  origin: "left",
  distance: "200px",
  duration: 2000,
  delay: 2000,
});
ScrollReveal().reveal(".reveal-icons", {
  origin: "right",
  distance: "50px",
  duration: 1000,
  delay: 3500,
  scale: 0.9,
});

const toggleNav = document.querySelectorAll(".js-nav-btn");
const videos = document.querySelectorAll(".videos");

const sliderNav = function (index) {
  toggleNav.forEach((nav) => {
    nav.classList.remove("active");
  });

  videos.forEach((video) => {
    video.classList.remove("active");
  });

  videos[index].classList.add("active");

  toggleNav[index].classList.add("active");
};

toggleNav.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    sliderNav(index);
    /*  if (nav[4]) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } */
  });
});
