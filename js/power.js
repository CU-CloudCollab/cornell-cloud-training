$(document).ready(function() {
    $('#searchClick').click(function() {
        $('#searchWrap').slideToggle('fast', function() {
          // if visiible or not, focus/blur
          $(this).is(":visible") ? $('#search-form-query').focus() : $('#search-form-query').blur();
          if ($(this).is(":visible")) {
            $('#searchClick span').removeClass('glyphicon-search');
            $('#searchClick span').addClass('glyphicon-remove')
          } else {
            $('#searchClick span').removeClass('glyphicon-remove');
            $('#searchClick span').addClass('glyphicon-search')
          }
        });
      }); //searchClick.click

    // Determine original position of navbar
    var navOffset = $('nav.site-nav').offset().top;

    // Menus need to be fixed on initial load, scroll, and resize
    // (if resize causes element heights to change, positions need to update accordingly)
    menuFix();

    $(window).scroll(menuFix).resize(menuFix);

    // TODO: bug: when searchwrap is opened, offset is calculated incorrectly
    function menuFix() {
      // When user scrolls past original position of nav
      if ($(window).scrollTop() >= navOffset) {
        $('nav.site-nav').addClass('navbar-fixed-top'); // add fixed position to nav,
        $('#cu-identity-wrap').addClass('menu-margin'); // account for new gap in page flow,
      } else {
        $('nav.site-nav').removeClass('navbar-fixed-top');
        $('#cu-identity-wrap').removeClass('menu-margin');
      }
    }

});


/*====================================
=            DOM IS READY            =
====================================*/
$(function() {
    $('.pagination .active a').click(function() {
        return false;
    });
});


/*========================================
=            WINDOW IS LOADED            =
========================================*/
$(window).load(function() {

});


/*=========================================
=            WINDOW IS RESIZED            =
=========================================*/
$(window).resize(function() {

});


/*==========================================
=            WINDOW IS SCROLLED            =
==========================================*/
$(window).scroll(function() {

});
