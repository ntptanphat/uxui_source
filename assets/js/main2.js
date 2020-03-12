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
					console.log("fullpage exiting");
					
					$.fn.fullpage.setAllowScrolling(false);
				}
			}
		});
	});

	$mainNavContainer.on('click', function(event) {
		if($(event.target).is('a:not(".close-button")')) return;

		event.preventDefault();

		$mainNavContainer.removeClass('open').fadeOut();

		if ($('.homepage').length > 0) {
			if (typeof fullpage !== "undefined") {
				$.fn.fullpage.setAllowScrolling(true);
			}
		}
	});

})(this.jQuery);