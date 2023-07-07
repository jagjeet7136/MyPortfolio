const navButton2 = document.querySelector(".nav-button");
const nav = document.querySelector(".navigation-container");
const logoSecond = document.querySelector(".name-logo");
const body = document.querySelector(".body");

const openCloseNav = () => {
  nav.classList.toggle("active");
  body.classList.toggle("active");
  navButton2.classList.toggle("active");
  logoSecond.classList.toggle("active");
};

navButton2.addEventListener("click", openCloseNav);

document.querySelectorAll(".navbar-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

const displayTime = document.querySelector(".time");
function showTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  displayTime.innerText = timeString + " (GMT+5.30)";
  setTimeout(showTime, 1000);
}
showTime();

document.addEventListener("scroll", () => {
  const vertical = window.scrollY;

  if (vertical > 75) {
    document.getElementById("nav-button-id").style.opacity = "1";
    document.getElementById("outer-menu-id").style.opacity = "0";
  } else {
    document.getElementById("nav-button-id").style.opacity = "0";
    document.getElementById("outer-menu-id").style.opacity = "1";
  }

});

document.addEventListener("scroll", function () {
  var windowWidth = window.innerWidth;
  var speed2 = 0.3;
  if (windowWidth <= 800) {
    speed2 = 0.1;
  }
  var firstPhoto = document.getElementById("first-photo-id");
  firstPhoto.style.bottom = Math.max(speed2 * window.scrollY) + "px";
});