//@prepros-prepend lib/jquery.js

(function(window,$){
  $(function(){
    hamburgerNav();

    $(window).scroll(function(){
      titleParallax();
    });

  });

  function titleParallax() {
    var windowScroll = $(window).scrollTop();
    $('.title-container figure').css({
      'transform' : 'translate(0px, '+ windowScroll / 2 +'px)'
    });
  }

  function hamburgerNav() {
    $('.hamburger').click(function(){
      $(this).toggleClass('active');
      $('.off-canvas-nav').toggleClass('show-nav');
      $('.page-wrap').toggleClass('show-nav');
      $('html').toggleClass('no-scroll');
    });
  }
})(window,jQuery);
