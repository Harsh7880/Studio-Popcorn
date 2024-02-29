function closeForm() {
    $('.form-popup-bg').removeClass('is-visible');
  }
  
  $(document).ready(function($) {
    
    /* Contact Form Interactions */
    $('#btnOpenForm').on('click', function(event) {
      event.preventDefault();
  
      $('.form-popup-bg').addClass('is-visible');
    });
    
      //close popup when clicking x or off popup
    $('.form-popup-bg').on('click', function(event) {
      if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });
    });

    
  
// People Filter  show
$(document).ready(function () {

    // nav tooggle
    $(".hamburger-btn").click(function () {
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function () {
        if ($(window).width() < 782) {
            $(".header .nav").slideToggle();
        }
    })
    // fixed header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".header").addClass("fixed");
        }
        else {
            $(".header").removeClass("fixed");
        }
    })
    // // Scroll it

    // $.scrollIt({
    //     topOffset: -20
    // });


    //gallery popup
    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height", wHeight + "px");


    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function () {
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();

    })

    //  next And prev controls
    $(".gp-controls .next").click(function () {
        if (itemIndex == totalGalleryItems - 1) {
            itemIndex = 0;
        }
        else {
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function () {
            gpSlideShow();

        })

    })
    $(".gp-controls .prev").click(function () {
        if (itemIndex === 0) {
            itemIndex = totalGalleryItems - 1;
        }
        else {
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function () {
            gpSlideShow();

        })
    })

    function gpSlideShow() {
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
        $(".gp-counter").text((itemIndex + 1) + "/" + totalGalleryItems);
    }

    // hide gallery Popup
    $(".gp-close").click(function () {
        $(".gallery-popup").removeClass("open");
    })

    // hide gallery popup  when clickes outside of gp-container
    $(".gallery-popup").click(function (event) {
        if ($(event.target).hasClass("open")) {
            $(".gallery-popup").removeClass("open");
        }
    })

    $(".Click-here").on('click', function () {
        $(".custom-model-main").addClass('model-open');
    });
    $(".close-btn, .bg-overlay").click(function () {
        $(".custom-model-main").removeClass('model-open');
    });

     new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
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
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
        },
        loop: true,
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            300:{
                slidesPerView: 1,
                spaceBetween: 50,
              },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            }
          },
      });
      
})