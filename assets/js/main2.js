(function ($) {
	// Mobile detection

	var $window = $(window),
		windowouterWidth,
		windowHeight;

	// Main Nav
	$mainNavContainer = $('#main-nav-container');
	$('#header').on('click', '#hamburger', function(event) {
		event.preventDefault();
		
		$mainNavContainer.fadeIn(function() {
			$(this).addClass('open');			
			if ($('.homepage').length > 0) {
				$.fn.fullpage.setAllowScrolling(false);
			}
		});
	});

	$mainNavContainer.on('click', function(event) {
		if($(event.target).is('a:not(".close-button")')) return;

		event.preventDefault();

		$mainNavContainer.removeClass('open').fadeOut();

		if ($('.homepage').length > 0) {
			$.fn.fullpage.setAllowScrolling(true);
		}
	});

})(this.jQuery);