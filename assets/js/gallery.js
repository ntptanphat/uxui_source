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
		$(window).load(function(){
			$('.section-is-content-wp').isotope({
				// options
				itemSelector: '.isotopeItem',
				layoutMode: 'fitRows'
			});
		});	
  
	  var $container = $('.section-is-content-wp');
	  $(document).on('click','.filter-tab a',function(){
		// removeClass a current
		  $('.filter-tab a').removeClass('current');
		  $('.filter-tab ').removeClass('filter-active');
		  // Add class a current
		  $(this).addClass('current');       
		  $(this).parents(".filter-tab").addClass('filter-active');
		  // Get text when choose item
		  $(this).parents(".filter-section").children(".show-tabs-mobile").text($(this).text());
		  // Remove menu filter in mobile
		  // if (screen.width <= 768) {
		  //     $(this).parents(".filter-section").removeClass("open-tab-filter");
		  //     new WOW().init();
		  // }
  
		  // filter
		  var selector = $(this).attr('data-filter');
		  $container.isotope({
			  filter: selector,
			  animationOptions: {
				  duration: 1000,
				  easing: 'easeOutQuart',
				  queue: false
			  }
		  });
		  return false;
	  });

})(this.jQuery);