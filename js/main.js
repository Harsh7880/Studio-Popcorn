// function closeForm() {
//   $('.form-popup-bg').removeClass('is-visible');
// }

// $(document).ready(function ($) {

//   /* Contact Form Interactions */
//   $('#btnOpenForm').on('click', function (event) {
//     event.preventDefault();

//     $('.form-popup-bg').addClass('is-visible');
//   });

//   //close popup when clicking x or off popup
//   $('.form-popup-bg').on('click', function (event) {
//     if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
//       event.preventDefault();
//       $(this).removeClass('is-visible');
//     }
//   });
// });



// People Filter  show
// $(document).ready(function () {

//   // nav tooggle
//   $(".hamburger-btn").click(function () {
//     $(".header .nav").slideToggle();
//   })
//   $(".header .nav a").click(function () {
//     if ($(window).width() < 782) {
//       $(".header .nav").slideToggle();
//     }
//   })

// Function to toggle the navigation menu
function toggleNav() {
  var nav = document.querySelector('.header .nav');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
}

// Event listener for the hamburger button click
document.querySelector('.hamburger-btn').addEventListener('click', toggleNav);

// Event listener for navigation links click
var navLinks = document.querySelectorAll('.header .nav a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth < 782) {
      toggleNav();
    }
  });
});
  // // fixed header
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $(".header").addClass("fixed");
  //   }
  //   else {
  //     $(".header").removeClass("fixed");
  //   }
  // })

  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 20) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
  // // Scrol// Function to handle smooth scrolling
function scrollToSection(event) {
  event.preventDefault();
  // Get the target section's ID from the clicked link
  var targetId = event.target.getAttribute("href").substring(1);
  // Find the target section element
  var targetSection = document.getElementById(targetId);
  // Calculate the offset based on the topOffset value
  var offset = -50; // Set the desired topOffset value
  // Calculate the target position by adding the offset to the target section's top position
  var targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + offset;
  // Scroll to the target position smoothly
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Get all the navigation links
var navLinks = document.querySelectorAll('a[href^="#"]');

// Add click event listeners to each navigation link
navLinks.forEach(function(link) {
  link.addEventListener('click', scrollToSection);
});

//   $.scrollIt({
//     topOffset: -50
//   });


//   //gallery popup
//   const wHeight = $(window).height();
//   $(".gallery-popup .gp-img").css("max-height", wHeight + "px");


//   let itemIndex = 0;
//   const totalGalleryItems = $(".gallery-item").length;

//   $(".gallery-item").click(function () {
//     itemIndex = $(this).index();
//     $(".gallery-popup").addClass("open");
//     $(".gallery-popup .gp-img").hide();
//     gpSlideShow();

//   })

//   //  next And prev controls
//   $(".gp-controls .next").click(function () {
//     if (itemIndex == totalGalleryItems - 1) {
//       itemIndex = 0;
//     }
//     else {
//       itemIndex++;
//     }
//     $(".gallery-popup .gp-img").fadeOut(function () {
//       gpSlideShow();

//     })

//   })
//   $(".gp-controls .prev").click(function () {
//     if (itemIndex === 0) {
//       itemIndex = totalGalleryItems - 1;
//     }
//     else {
//       itemIndex--;
//     }
//     $(".gallery-popup .gp-img").fadeOut(function () {
//       gpSlideShow();

//     })
//   })

//   function gpSlideShow() {
//     const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
//     $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
//     $(".gp-counter").text((itemIndex + 1) + "/" + totalGalleryItems);
//   }

//   // hide gallery Popup
//   $(".gp-close").click(function () {
//     $(".gallery-popup").removeClass("open");
//   })

//   // hide gallery popup  when clickes outside of gp-container
//   $(".gallery-popup").click(function (event) {
//     if ($(event.target).hasClass("open")) {
//       $(".gallery-popup").removeClass("open");
//     }
//   })

//   $(".Click-here").on('click', function () {
//     $(".custom-model-main").addClass('model-open');
//   });
//   $(".close-btn, .bg-overlay").click(function () {
//     $(".custom-model-main").removeClass('model-open');
//   });
// })

// });

new Swiper(".mySwiper", {
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
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },
});
new Swiper(".mySwiper1", {
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
    300: {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  },
});
new Swiper(".mySwiper3", {
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
    300: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    }
  }
}
)