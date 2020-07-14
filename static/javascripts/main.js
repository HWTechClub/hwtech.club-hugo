/* ===================================================================
 * Glint - Main JS
 *
 * ------------------------------------------------------------------- */

jQuery(document)
    .ready(function () {
        if (jQuery('.aqua').length) {
            var words = [
                    'AI <i class="mi mi-Robot"></i>',
                    'Linux <i class="fa fa-linux"></i>',
                    'Space <i class="fa fa-rocket" aria-hidden="true"></i>',
                    'Education <i class="fa fa-university" aria-hidden="true"></i>',
                    'Web Dev <i class="fa fa-laptop-code"></i>',
                    'Hacking <i class="fa fa-theater-masks"></i>',
                    'Excursions <i class="fa fa-bus"></i>',
                    'Games <i class="fa fa-gamepad" aria-hidden="true"></i>',
                    'Hardware <i class="fa fa-memory"></i>',
                    'Innovation <i class="fa fa-lightbulb"></i>',
                    'Hackathons <i class="fa fa-chalkboard-teacher"></i>'
                ],

                i = 0;

            setInterval(function () {
                jQuery('.aqua')
                    .fadeOut(function () {
                        jQuery(this).html(words[i = (i + 1) % words.length]).fadeIn();
                    });
            }, 1000);
        }
    });

(function ($) {



        $WIN = $(window);


    /* Menu on Scrolldown
     * ------------------------------------------------------ */
    var clMenuOnScrolldown = function () {

        var menuTrigger = $('.header-menu-toggle');

        $WIN.on('scroll', function () {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            } else {
                menuTrigger.removeClass('opaque');
            }

        });
    };

    /* OffCanvas Menu
     * ------------------------------------------------------ */
    var clOffCanvas = function () {

        var menuTrigger = $('.header-menu-toggle'),
            nav = $('.header-nav'),
            closeButton = nav.find('.header-nav__close'),
            siteBody = $('body'),
            mainContents = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function (e) {
            e.preventDefault();
            // menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function (e) {
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function (e) {
            if (!$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span')) {
                // menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };


    /* Stat Counter
     * ------------------------------------------------------ */
    var clStatCount = function () {

        var statSection = $(".about-stats"),
            stats = $(".stats__count");

        statSection.waypoint({

            handler: function (direction) {

                if (direction === "down") {

                    stats
                        .each(function () {
                            var $this = $(this);

                            $({Counter: 0}).animate({
                                Counter: $this.text()
                            }, {
                                duration: 4000,
                                easing: 'swing',
                                step: function (curValue) {
                                    $this.text(Math.ceil(curValue));
                                }
                            });
                        });

                }

                // trigger once only
                this.destroy();

            },

            offset: "90%"

        });
    };

    /* Animate On Scroll
     * ------------------------------------------------------ */
    var clAOS = function () {

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };

    /* Back to Top
     * ------------------------------------------------------ */
    var clBackToTop = function () {

        var pxShow = 500, // height on which the button will show
            fadeInTime = 400, // how slow/fast you want the button to show
            fadeOutTime = 400, // how slow/fast you want the button to hide
            scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
            goTopButton = $(".go-top")

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };

    /* Initialize
     * ------------------------------------------------------ */
    (function ssInit() {

        clMenuOnScrolldown();
        clOffCanvas();
        clStatCount();
        clAOS();
        clBackToTop();

    })();

})(jQuery);
