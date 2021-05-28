// Ready ----------------------------------------------->

(function ($) {
"use strict";

// meanmenu Activation:
$('nav').meanmenu({
	meanMenuContainer: '#mobile-menu',
	meanScreenWidth: "767"
});

// One Page Nav
// var top_offset = $('.main-menu').height() - 10;
// $('nav ul').onePageNav({
// 	currentClass: 'active',
// 	scrollOffset: top_offset,
// });


// $(window).on('scroll', function () {
// 	var scroll = $(window).scrollTop();
// 	if (scroll < 245) {
// 		$(".header-sticky").removeClass("sticky");
// 	} else {
// 		$(".header-sticky").addClass("sticky");
// 	}
// });



// MainSlider_slick Activation:

	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			dots: true,
			fade: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [{
				breakpoint: 1000,
				settings: {
					dots: false,
					arrows: false 
				} 
			}]
		});
	
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

// Counter_Counterup Activation:

	$('.counting-up').counterUp({
		delay: 10,
		time: 3000
	});





// Slider01-owlCarousel
// $('.owl-carousel').owlCarousel({
// 	loop:false,
//     items:1,
// 	dots:true,
// 	autoplay:true,
// 	autoplaySpeed:500,
// 	smartSpeed:1500,
// 	autoplayHoverPause:true
// })


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
	// use outer width of grid-sizer for columnWidth
	columnWidth: '.grid-item',
	}
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);