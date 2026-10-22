(function ($) {

    "use strict";

    /*------------------------------------------
        Nice Select
    -------------------------------------------*/

    $('.select').niceSelect();

    $(function () {
        $("#datepicker").datepicker();
    });


    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".mobile-menu .open-btn");
        var xbutton = $(".mobile-menu .navbar-toggler");

        openBtn.on("click", function (e) {
            e.stopImmediatePropagation();
            navbar.toggleClass("slideIn");
            xbutton.toggleClass("x-close");
            return false;
        })
    }

    toggleMobileNavigation();

    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();

    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();

    $("body").on("click", function () {
        $('.navigation-holder').removeClass('slideIn');
    });
    $(".menu-close").on("click", function () {
        $('.navigation-holder').removeClass('slideIn');
    });
    $(".menu-close").on("click", function () {
        $('.open-btn').removeClass('x-close');
    });

    // tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /*------------------------------------------
       = TEAM SECTION
   -------------------------------------------*/
    var singleMember = $('.social');
    singleMember.on('click', function () {
        $(this).toggleClass('active');
    });

    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {

                //active wow
                wow.init();

            });
        }
    }

    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        });
    }

    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function () {
            $.fancybox({
                href: this.href,
                aspectRatio: true,
                type: $(this).data("type"),
                'title': this.title,
                helpers: {
                    title: { type: 'inside' },
                    media: {}
                },

                beforeShow: function () {
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }

    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
                enabled: true
            },

            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    /*------------------------------------------
       = POPUP YOUTUBE, VIMEO, GMAPS
   -------------------------------------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-filters li a").on("click", function () {
                $('.gallery-filters li .current').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    sortingGallery();

    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid = $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });
        }
    }

    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/


    /*------------------------------------------
       = BACK TO TOP BTN SETTING
   -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })

    /*------------------------------------------
          = TOUCHSPIN
      -------------------------------------------*/
    if ($("input[name='product-count']").length && $.fn.TouchSpin) {
        $("input[name='product-count']").TouchSpin({
            verticalbuttons: true
        });
    }

    /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
    if ($("#contact-form-main").length) {
        $("#contact-form-main").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                email: "required",

                phone: "required",

                adress: "required",

                guest: "required",

                meal: "required",

                date: "required",

                what: "required",

                service: "required",
            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
                phone: "Please enter your phone number",
                adress: "Please enter your adress",
                guest: "Please select your guest Number",
                meal: "Please select your Meal Name",
                date: "Please select your Date",
                what: "Please select your Reason",
                service: "Please select your Service"
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    success: function () {
                        $("#loader").hide();
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 3000);
                        form.reset();
                    },
                    error: function () {
                        $("#loader").hide();
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }
        });
    }

    /*------------------------------------------
        = CONTACT FORM SUBMISSION2
    -------------------------------------------*/
    if ($("#contact-form").length) {
        $("#contact-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                email: "required",

                phone: "required",

                adress: "required",

                service: {
                    required: true
                }
            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
                phone: "Please enter your phone number",
                service: "Please select your contact service",
                adress: "Please select your address"
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    success: function () {
                        $("#loader").hide();
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 3000);
                        form.reset();
                    },
                    error: function () {
                        $("#loader").hide();
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }
        });
    }

    /*------------------------------------------
     = Header shopping cart toggle
    -------------------------------------------*/
    if ($(".mini-cart").length) {
        var cartToggleBtn = $(".cart-toggle-btn");
        var cartContent = $(".mini-cart-content");
        var cartCloseBtn = $(".mini-cart-close");
        var body = $("body");

        cartToggleBtn.on("click", function (e) {
            cartContent.toggleClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        cartCloseBtn.on("click", function (e) {
            cartContent.removeClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        body.on("click", function () {
            cartContent.removeClass("mini-cart-content-toggle");
        }).find(cartContent).on("click", function (e) {
            e.stopPropagation();
        });
    }

    /*------------------------------------------
       = FUNFACT
     -------------------------------------------*/
    if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {

        const trigger = document.getElementById("daiderMenuTrigger");
        const menu = document.getElementById("daiderOverlayMenu");
        const close = document.getElementById("daiderOverlayClose");
        const overlay = document.getElementById("daiderOverlayBg");

        if (!trigger || !menu || !close || !overlay) {
            return;
        }

        menu.classList.remove("active");

        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            menu.classList.add("active");
        });

        close.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            menu.classList.remove("active");
        });

        overlay.addEventListener("click", function () {
            menu.classList.remove("active");
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                menu.classList.remove("active");
            }
        });
    });

    /*------------------------------------------
      = PRODUCT SINGLE SLIDER
    -------------------------------------------*/
    if ($(".product-single-slider").length && $.fn.slick) {

        $('.slider-for').slick({
            slidesToShow: 1,
            fade: true,
            arrows: false,
            asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            focusOnSelect: true,

            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 3,
                        nav: false
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                        nav: false
                    }
                }
            ]
        });
    }

    // product single //
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".product-item").forEach(parent => {
            parent.addEventListener("click", function (e) {
                const option = e.target.closest(".option");
                if (!option) return;

                parent.querySelectorAll(".option").forEach(el => {
                    el.classList.remove("active");
                });

                option.classList.add("active");
            });
        });

        const form = document.getElementById("productForm");

        if (form) {
            form.addEventListener("submit", function () {

                const sizeActive = document.querySelector("#size .active");
                const colorActive = document.querySelector("#color .active");

                const sizeInput = document.getElementById("sizeInput");
                const colorInput = document.getElementById("colorInput");

                if (sizeInput && sizeActive) {
                    sizeInput.value = sizeActive.innerText;
                }

                if (colorInput && colorActive) {
                    colorInput.value = colorActive.innerText;
                }
            });
        }
    });


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function () {

        preloader();
        masonryGridSetting();
        sortingGallery();
        toggleMobileNavigation();
        smallNavFunctionality();
    });

    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {

        // Default header sticky
        if ($(".sticky-header").length) {
            stickyMenu($('.sticky-header'), "sticky-on");
        }

        // Bottom-style sticky
        if ($(".sticky-header-bottom").length) {
            stickyMenuBottom($('.sticky-header-bottom'), "sticky-on");
        }
        toggleBackToTopBtn();

    });

    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {

        toggleClassForSmallNav();

        clearTimeout($.data(this, 'resizeTimer'));

        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();

        }, 200));

    });

})(window.jQuery);