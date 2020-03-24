(function ($) {
	var lastScroll = 0;
	const $navigation = $('.gallery-navigation');
	window.onscroll = function() {
		let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

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