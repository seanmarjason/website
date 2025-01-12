
// MENU SHOW-HIDE
function toggleMenu() {
  var menu = document.getElementById("burgerMenu")
  var hamburger = document.getElementById("burger");
  menu.classList.toggle("burgerMenuShow");
  hamburger.classList.toggle("change");
}

// NAVBAR INTERACTIONS
var navbar = document.getElementById('navbar');
var logo = document.getElementById('logo');
var jumbotron = document.getElementById('jumbotron');
window.addEventListener('scroll', function () {
  if (window.scrollY >= 25) {
    navbar.classList.add("navbarScrolled");
    logo.classList.replace("invisible", "visible");
    jumbotron.classList.replace("visible", "invisible");
  }
  else {
    navbar.classList.remove("navbarScrolled");
    logo.classList.replace("visible", "invisible");
    jumbotron.classList.replace("invisible", "visible");
  }
})



// CAROUSEL
// Identify all slides
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var state = "play"
var slideIndex = 0;


// On load, Show only the first slide + On press of dots, show current slide
function showSlides(n) {

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.replace("active", "inactive");
    dots[i].classList.remove("activeDot");
  }

  if (n > (slides.length - 1)) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = (slides.length - 1);
  }

  slides[slideIndex].classList.replace("inactive", "active");
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("activeDot")
}

window.addEventListener('load', function () {showSlides(slideIndex)});


// Automatically rotate through slides 
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");

function playSlides() {
  t  = setInterval(function () {changeSlide(1)}, 5000);
  pauseButton.classList.replace("hide", "show");
  playButton.classList.replace("show", "hide");
}

function pauseSlides() {
  clearInterval(t);
  playButton.classList.replace("hide", "show");
  pauseButton.classList.replace("show", "hide");
}

document.addEventListener('load', playSlides());

// Play-pause carousel rotation
var play = document.getElementById("playPause");
play.addEventListener('click', playPauseSlides);

function playPauseSlides() {
  if (state === "play") {
    state = "pause";
    pauseSlides();
  }

  else {
    state = "play";
    playSlides();
  }
}

// On button press, iterate slide index to show next slide / previous slide
function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

previous = document.getElementById("previous");
previous.addEventListener('click', function () {changeSlide(-1)});
previous.addEventListener('click', function () {pauseSlides(t)});

next = document.getElementById("next");
next.addEventListener('click', function () {changeSlide(1)});
next.addEventListener('click', function () {pauseSlides(t)});

document.addEventListener('keydown', function(event) {

  // If keycode is ArrowLeft
  if (event.keyCode === 37) {
    changeSlide(-1);
    pauseSlides(t);
  }

  // If keycode is ArrowRight
  else if (event.keyCode === 39) {
    changeSlide(1);
    pauseSlides(t);
  }

  // If keycode is Space character
  else if (event.keyCode === 32 && event.target === document.body) {
    event.preventDefault();
    playPauseSlides();
  }
});