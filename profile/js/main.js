jQuery(document).ready(function($) {
    /* ---------------------------------------------------------------------- */
    /*  ------------------------------- Loading ----------------------------- */
    /* ---------------------------------------------------------------------- */
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
    /* -------------------------- Tabs -------------------------------------- */
    /* ---------------------------------------------------------------------- */
    $('.tab-list li').click(function(event) {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.tabs-container').find('.tab-content').eq($(this).index()).addClass('active').siblings('.tab-content').removeClass('active');
        var animation_style = 'bounceIn';
        $('.tabs-container').addClass('animated ' + animation_style);
        $('.tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.tabs-container').removeClass('animated ' + animation_style);
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
