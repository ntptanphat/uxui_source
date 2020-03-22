(function ($) {
	// Mobile detection

	var $window = $(window),
		windowouterWidth,
		windowHeight;

	// Main Nav
	let $mainNavContainer = $('#main-nav-container');
	$('#header').on('click', '#hamburger', function(event) {
		event.preventDefault();
		
		$mainNavContainer.fadeIn(function() {
			$(this).addClass('open');			
			if ($('.homepage').length > 0) {
				if (typeof fullpage !== "undefined") {					
					$.fn.fullpage.setAllowScrolling(false);
				}
			}
		});
	});

	$mainNavContainer.on('click', function(event) {
		if($(event.target).is('a:not(".close-button")')) return;		
		// if($(event.target).is('.expand')) {
		// 	$(event.target).toggleClass("expanded");
		// 	return;
		// };
		event.preventDefault();

		$mainNavContainer.removeClass('open').fadeOut();

		if ($('.homepage').length > 0) {
			if (typeof fullpage !== "undefined") {
				$.fn.fullpage.setAllowScrolling(true);
			}
		}
	});
	var lastScroll = 0;
	const $header = $('header');
	window.onscroll = function() {
		let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
		if (currentScroll > 100) {
			if(!$header.hasClass('no-animation') && !$header.hasClass('is-top')) {
				$header.addClass("is-top");  
			}
			if (lastScroll <= currentScroll){
				lastScroll = currentScroll;
				if(!$header.hasClass('no-animation') && !$header.hasClass('is-background')) {
					$header.addClass("is-background");  
				}
			} else {
				lastScroll = currentScroll;
				if(!$header.hasClass('no-animation') && $header.hasClass('is-background')) {
					$header.removeClass("is-background");  
				}
			}
		} else {
			if(!$header.hasClass('no-animation') && $header.hasClass('is-top')) {
				$header.removeClass("is-top");  
			}  
		}
	};
	// scroll function for changed css starts
	const $scrollup = $('.scrollup');
	$(window).on('scroll', function() {
		// back to top
		if ($(this).scrollTop() > 200) {
			$scrollup.fadeIn();
		} else {
			$scrollup.fadeOut();
		}
	});
	$scrollup.on("click", function() {
		$('html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})(this.jQuery);