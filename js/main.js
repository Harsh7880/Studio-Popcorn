// Book Now Form
// Function to close the form popup
function closeForm() {
  document.querySelector(".form-popup-bg").classList.remove("is-visible");
}

// Open Book Now Form
document.addEventListener("DOMContentLoaded", function () {
  var btnOpenForms = document.querySelectorAll(".btnOpenForm");
  var formPopupBg = document.querySelector(".form-popup-bg");

  // Open form when any button with class 'btnOpenForm' is clicked
  btnOpenForms.forEach(function (btnOpenForm) {
    btnOpenForm.addEventListener("click", function (event) {
      event.preventDefault();
      formPopupBg.classList.add("is-visible");
    });
  });

  // Close form when clicking outside or on close button
  formPopupBg.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("form-popup-bg") ||
      event.target.id === "btnCloseForm"
    ) {
      event.preventDefault();
      closeForm();
    }
  });
});

// Toggle the navigation menu
function toggleNav() {
  var nav = document.querySelector(".header .nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

// Event listener for the hamburger button click
document.querySelector(".hamburger-btn").addEventListener("click", toggleNav);

// Event listener for navigation links click
var navLinks = document.querySelectorAll(".header .nav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 782) {
      toggleNav();
    }
  });
});

// Scroll Fixed
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// Scroll Function to handle smooth scrolling
function scrollToSection(event) {
  event.preventDefault();
  // Get the target section's ID from the clicked link
  var targetId = event.target.getAttribute("href").substring(1);
  // Find the target section element
  var targetSection = document.getElementById(targetId);
  // Calculate the offset based on the topOffset value
  var offset = -50; // Set the desired topOffset value
  // Calculate the target position by adding the offset to the target section's top position
  var targetPosition =
    targetSection.getBoundingClientRect().top + window.pageYOffset + offset;
  // Scroll to the target position smoothly
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

// Get all the navigation links
var navLinks = document.querySelectorAll('a[href^="#"]');

// Add click event listeners to each navigation link
navLinks.forEach(function (link) {
  link.addEventListener("click", scrollToSection);
});

// Know More custom model on About us section
document.addEventListener("DOMContentLoaded", function () {
  var clickHereButton = document.querySelector(".Click-here");
  var closeButton = document.querySelector(".close-btn");
  var bgOverlay = document.querySelector(".bg-overlay");
  var customModelMain = document.querySelector(".custom-model-main");

  // Open modal when "Click here" button is clicked
  clickHereButton.addEventListener("click", function () {
    customModelMain.classList.add("model-open");
  });

  // Close modal when close button or background overlay is clicked
  function closeModel(event) {
    if (event.target === closeButton || event.target === bgOverlay) {
      customModelMain.classList.remove("model-open");
    }
  }

  closeButton.addEventListener("click", closeModel);
  bgOverlay.addEventListener("click", closeModel);
});

// Swiper Slider's for triners, wedding-gallery, and testimonial's
// Function to initialize Swiper slider
function initializeSwiper(selector, options) {
  var swiper = new Swiper(selector, options);
}

// Initialize Swiper sliders
document.addEventListener("DOMContentLoaded", function () {
  initializeSwiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    loop: true,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      300: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
    },
  });

  initializeSwiper(".mySwiper1", {
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    cssMode: true,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      300: { slidesPerView: 1, spaceBetween: 50, loop: true },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1400: { slidesPerView: 4 },
    },
  });

  initializeSwiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    cssMode: true,
    loop: true,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      300: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
    },
  });
});

// Wedding gallery Image Pop-Up

// Get the window height
const wHeight = window.innerHeight;
document.querySelectorAll(".gallery-popup .gp-img").forEach(function (gpImg) {
  gpImg.style.maxHeight = wHeight + "px";
});

// Initialize itemIndex and totalGalleryItems
let itemIndex = 0;
const galleryItems = document.querySelectorAll(".gallery-item");
const totalGalleryItems = galleryItems.length;

// Event listener for clicking on gallery items
galleryItems.forEach(function (galleryItem) {
  galleryItem.addEventListener("click", function () {
    itemIndex = Array.from(galleryItems).indexOf(this);
    document.querySelector(".gallery-popup").classList.add("open");
    document.querySelector(".gallery-popup .gp-img").style.display = "none";
    gpSlideShow();
  });
});

// Event listener for next and prev controls
document
  .querySelector(".gp-controls .next")
  .addEventListener("click", function () {
    if (itemIndex === totalGalleryItems - 1) {
      itemIndex = 0;
    } else {
      itemIndex++;
    }
    document.querySelector(".gallery-popup .gp-img").style.display = "none";
    gpSlideShow();
  });

document
  .querySelector(".gp-controls .prev")
  .addEventListener("click", function () {
    if (itemIndex === 0) {
      itemIndex = totalGalleryItems - 1;
    } else {
      itemIndex--;
    }
    document.querySelector(".gallery-popup .gp-img").style.display = "none";
    gpSlideShow();
  });

// Function to handle the gallery popup slideshow
function gpSlideShow() {
  const imgSrc = galleryItems[itemIndex]
    .querySelector("img")
    .getAttribute("data-large");
  const gpImg = document.querySelector(".gallery-popup .gp-img");
  gpImg.src = imgSrc;
  gpImg.style.display = "block";
  document.querySelector(".gp-counter").textContent =
    itemIndex + 1 + "/" + totalGalleryItems;
}

// Event listener to hide gallery popup when the close button is clicked
document.querySelector(".gp-close").addEventListener("click", function () {
  document.querySelector(".gallery-popup").classList.remove("open");
});

// Event listener to hide gallery popup when clicked outside of gp-container
document
  .querySelector(".gallery-popup")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("open")) {
      document.querySelector(".gallery-popup").classList.remove("open");
    }
  });
