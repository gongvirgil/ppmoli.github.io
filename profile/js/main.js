jQuery(document).ready(function($) {
    /* ---------------------------------------------------------------------- */
    /*  ------------------------------- Loading ----------------------------- */
    /* ---------------------------------------------------------------------- */

    /* ---------------------------------------------------------------------- */
    /* ---------------------- redimensionnement ----------------------------- */
    /* ---------------------------------------------------------------------- */

    function redimensionnement() {

        if (window.matchMedia("(max-width: 800px)").matches) {
            $(".tab-content").mCustomScrollbar("destroy");
            $(".tab-container").css("height", "100%");
            $(".tab-content").css("height", "100%");
        } else {
            $(".resp-vtabs .resp-tabs-container").css("height", "580px");
            $(".tab-content").css("height", "580px");
            $(".tab-content").mCustomScrollbar("destroy");
            $(".tab-content").mCustomScrollbar({
                theme: "dark-2",
                contentTouchScroll: true,
                advanced: {
                    updateOnContentResize: true,
                    updateOnBrowserResize: true,
                    autoScrollOnFocus: false
                }
            });
        }
    }

    window.addEventListener('load', redimensionnement, false);
    window.addEventListener('resize', redimensionnement, false);
    /* ---------------------------------------------------------------------- */
    /* --------------------------- Scroll tabs ------------------------------ */
    /* ---------------------------------------------------------------------- */
    $(".tab-content").mCustomScrollbar({
        theme: "dark-2",
        contentTouchScroll: true,
        advanced: {
            updateOnContentResize: true,
            updateOnBrowserResize: true,
            autoScrollOnFocus: false
        }
    });
    /* ---------------------------------------------------------------------- */
    /* -------------------------- easyResponsiveTabs ------------------------ */
    /* ---------------------------------------------------------------------- */

    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    /* ---------------------------------------------------------------------- */
    /* -------------------------- Tabs -------------------------------------- */
    /* ---------------------------------------------------------------------- */
    $("h2.resp-accordion").click(function() {
        $(this).toggleClass("active");
        /*  Scroll To */
        $('html, body').animate({
            scrollTop: $('h2.resp-accordion').offset().top - 50
        }, 600);
    });
    $('.tab-list li').click(function(event) {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.tab-container').find('.tab-content').eq($(this).index()).addClass('active').siblings('.tab-content').removeClass('active');
        var animation_style = 'bounceIn';
        $('.tab-container').addClass('animated ' + animation_style);
        $('.tab-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.tab-container').removeClass('animated ' + animation_style);
        });
        $(".tab-content").mCustomScrollbar("destroy");
        $(".tab-content").mCustomScrollbar({
            theme: "dark-2",
            contentTouchScroll: true,
            advanced: {
                updateOnContentResize: true,
                updateOnBrowserResize: true,
                autoScrollOnFocus: false
            }
        });
    });

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- icon menu ------------------------------- */
    /* ---------------------------------------------------------------------- */

    $(".tab-container h2.resp-accordion").each(function() {
        if ($(this).hasClass('resp-tab-active')) {
            $(this).append("<i class='glyphicon glyphicon-chevron-up arrow-tabs'></i>");
        } else {
            $(this).append("<i class='glyphicon glyphicon-chevron-down arrow-tabs'></i>");
        }
    });
    $(".tab-container h2.resp-accordion").click(function() {
        if ($(this).hasClass('resp-tab-active')) {
            $(this).find("i.arrow-tabs").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
        }
        $(".tab-container h2.resp-accordion").each(function() {
            if (!$(this).hasClass('resp-tab-active')) {
                $(this).find("i.arrow-tabs").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
            }
        });
    });
    /* ---------------------------------------------------------------------- */
    /* -------------------------------- skillbar ---------------------------- */
    /* ---------------------------------------------------------------------- */
    $('.tab-li-2').click(function(event) {
        $('.skill').each(function() {
            $(this).find('.skill-bar').width(0);
        });
        $('.skill').each(function() {
            $(this).find('.skill-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    });
    $('#tab-content-2').prev('h2.resp-accordion').click(function(event) {
        $('.skill').each(function() {
            $(this).find('.skill-bar').width(0);
        });
        $('.skill').each(function() {
            $(this).find('.skill-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    });
    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Portfolio ------------------------------ */
    /* ---------------------------------------------------------------------- */
    var filterList = {
        init: function() {
            $('#portfolio-list').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                onMixEnd: filterList.hoverEffect()
            });
        },
        hoverEffect: function() {
            $('#portfolio-list .portfolio').hover(
                function() {
                    $(this).find('.label').stop().animate({
                        bottom: 0
                    }, 200);
                    $(this).find('img').stop().animate({
                        top: -30
                    }, 500);
                },
                function() {
                    $(this).find('.label').stop().animate({
                        bottom: -40
                    }, 200);
                    $(this).find('img').stop().animate({
                        top: 0
                    }, 300);
                }
            );
        }
    };
    // Run the show!
    filterList.init();
});
