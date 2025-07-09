(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    // $(".header-carousel").owlCarousel({
    //     items: 1,

    // });

    // Mobile menu toggle (supports multiple navbars)
    document.addEventListener('DOMContentLoaded', function () {
        const mobileMenuToggles = document.querySelectorAll('.mobile-menu-toggle');
        const navMenus = document.querySelectorAll('.nav-menu');
        mobileMenuToggles.forEach((toggle, idx) => {
            // Try to pair each toggle with the closest nav-menu in the DOM tree
            let navMenu = toggle.parentElement.querySelector('.nav-menu');
            if (!navMenu) navMenu = navMenus[idx] || navMenus[0];
            if (navMenu) {
                toggle.addEventListener('click', function (e) {
                    e.preventDefault();
                    navMenu.classList.toggle('active');
                    toggle.classList.toggle('open');
                });
                // Close menu when a link is clicked (for better UX)
                navMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navMenu.classList.remove('active');
                        toggle.classList.remove('open');
                    });
                });
            }
        });
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Only play and unmute YouTube video when Contact Us is clicked, and pause/reset when closed
// (this replaces the previous script block for Contact Us)
document.addEventListener('DOMContentLoaded', function () {
    var contactLink = document.querySelector('.nav-menu a[href="#contact"]');
    var modalEl = document.getElementById('customersModal');
    var videoIframe = document.getElementById('testimonialVideo');
    var videoBlock = document.getElementById('testimonialVideoBlock');
    var imageBlock = document.getElementById('testimonialImageBlock');
    var bsModal = null;
    if (contactLink && modalEl && videoIframe && videoBlock && imageBlock) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Show video, hide image/testimonial
            imageBlock.style.display = 'none';
            videoBlock.style.display = '';
            videoIframe.src = videoIframe.getAttribute('data-src');
            if (!bsModal) bsModal = new bootstrap.Modal(modalEl);
            bsModal.show();
        });
        modalEl.addEventListener('hidden.bs.modal', function () {
            // Remove src to stop video
            videoIframe.src = '';
        });
    }
});


// Mobile menu toggle logic for navbar
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggles = document.querySelectorAll('.mobile-menu-toggle');
    const navMenus = document.querySelectorAll('.nav-menu');
    mobileMenuToggles.forEach((toggle, idx) => {
        let navMenu = toggle.parentElement.querySelector('.nav-menu');
        if (!navMenu) navMenu = navMenus[idx] || navMenus[0];
        if (navMenu) {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                navMenu.classList.toggle('active');
                toggle.classList.toggle('open');
            });
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    toggle.classList.remove('open');
                });
            });
        }
    });
});


function hideSpinners() {
            var spinner = document.getElementById('spinner');
            if (spinner) spinner.classList.remove('show');
            if (spinner) spinner.style.display = 'none';
            var ayurvedaSpinner = document.getElementById('ayurveda-spinner');
            if (ayurvedaSpinner) ayurvedaSpinner.classList.remove('show');
            if (ayurvedaSpinner) ayurvedaSpinner.style.display = 'none';
        }
        window.addEventListener('load', hideSpinners);
        // Fallback: forcibly hide after 2 seconds in case load event is missed
        setTimeout(hideSpinners, 2000);

