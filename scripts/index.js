// scroll reveal animation
ScrollReveal().reveal(".reveal-header", {
  origin: "top",
  distance: "20px",
  duration: 800,
  delay: 100,
});

ScrollReveal().reveal(".reveal-icons", {
  origin: "right",
  distance: "50px",
  duration: 1000,
  delay: 3500,
  scale: 0.9,
});

// TOGGLE ACTIVE CLASS TO DISPLAY CONTENTS
const toggleNav = document.querySelectorAll(".js-nav-btn");
const videos = document.querySelectorAll(".videos");
const brandDetails = document.querySelectorAll(".js-hero-text");

const sliderNav = function (index) {
  toggleNav.forEach((nav) => {
    nav.classList.remove("active");
  });

  videos.forEach((video) => {
    video.classList.remove("active");
  });
  brandDetails.forEach((details) => {
    details.classList.remove("active");
  });

  videos[index].classList.add("active");

  toggleNav[index].classList.add("active");
  brandDetails[index].classList.add("active");
};

toggleNav.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    sliderNav(index);
  });
});

// CREATING SWIPPER CODE TO CHANGE ACTIVE STATE WHEN SWIPPED ON SMALL AND MD SCREENS

const swiperContainer = document.querySelector(".js-swipper");

swiperContainer.addEventListener("touchstart", touchStart);
swiperContainer.addEventListener("touchend", touchEnd);

let touchStartTime, clientX;

function touchStart(e) {
  e.preventDefault();

  touchStartTime = Date.now();
  clientX = e.touches[0].clientX;
}

function touchEnd(e) {
  // Record the timestamp of the touch end event
  const touchEndTime = Date.now();

  // Call the swipe function to check if a swipe gesture occurred
  swipe(e, touchEndTime - touchStartTime);
}

const DURATION_THRESHOLD = 1000;
const MOVE_THRESHOLD = 100;

function swipe(e, duration) {
  console.log(duration);
  // Get the final X  coordinates of the touch
  const endClientX = e.changedTouches[0].clientX;
  // Check if the elapsed time between touchstart and touchend events is less than or equal to the duration threshold
  if (duration <= DURATION_THRESHOLD) {
    // Check if the touch moved at least MOVE_THRESHOLD pixels in the X direction
    if (endClientX - clientX >= MOVE_THRESHOLD) {
      console.log("swiped right");
      changeVideo(-1);
    } else if (clientX - endClientX >= MOVE_THRESHOLD) {
      // Swipe left detected
      console.log("swiped left");
      changeVideo(1);
      // Perform any additional code for swipe left here
    }
  }
}
function changeVideo(direction) {
  let currentIndex = [...videos].findIndex((video) =>
    video.classList.contains("active")
  );
  const newIndex = (currentIndex + direction + videos.length) % videos.length;
  sliderNav(newIndex);
}
