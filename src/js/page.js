//@prepros-prepend lib/jquery.js

(function(window,$){
  $(function(){
    hamburgerNav();
    productDetailImageSwitcher();
    backTop();

    $(window).scroll(function(){
      titleParallax();
    });

  });

	function backTop() {
		$(window).scroll(function(){
			var $windowScroll = $(window).scrollTop();
			$('.back-top').toggleClass('visible',$windowScroll > 600);
		});

		$('.back-top').click(function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop: 0},700);
		});
	}

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

	function productDetailImageSwitcher() {
		$('.woocommerce-product-gallery__image a').click(function(e){
			e.preventDefault();
		});

		$('.woocommerce-product-gallery__image a img').click(function() {
			var $baseImageSrc = $('.woocommerce-product-gallery__image:first-of-type a img').attr('src');
			var $href = $(this).attr('src');

			$('.woocommerce-product-gallery__image:first-of-type a img').attr('src',$href);
			$(this).attr('src',$baseImageSrc);
		});
	}
})(window,jQuery);
