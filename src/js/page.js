//@prepros-prepend lib/jquery.js

(function(window,$){
  $(function(){

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
})(window,jQuery);
