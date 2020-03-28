(function ($) {
	var lastScroll = 0;
	const $navigation = $('.gallery-navigation');
	const $panelFilter = $('.panel-filter');
	window.onscroll = function() {
		let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
		if(currentScroll > 100) {
			if(!$panelFilter.hasClass('fixed')) {
				$panelFilter.addClass('fixed');
			}
		} else {
			if($panelFilter.hasClass('fixed')) {
				$panelFilter.removeClass('fixed');
			}
		}
		if (lastScroll <= currentScroll){
			if($navigation.hasClass('is-show')) {
				$navigation.removeClass("is-show");  
			}
		}else{
            if(!$navigation.hasClass('is-show')) {
				$navigation.addClass("is-show");  
			}
        }
		lastScroll = currentScroll;        
	};

})(this.jQuery);