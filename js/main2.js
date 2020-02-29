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

	// Homepage Box
	var $homepageBoxContainer = $('#homepage-box-container'),
		$homepageBox = $('.homepage-box'),
		$homepageNav = $('#homepage-nav'),

		// center full size images
		centerBackgroundImage = function() {
			$homepageBoxContainer.add($homepageBox).height(windowHeight);
			$('.homepage-background').find('img').each(function() {
				var $this = $(this);

				$this.css({
					'width': 'auto',
					'height': windowHeight
				});

				// if the window width is wider than the resized image we need to set the image width to the window width
				if ($this.width() < $window.width()) {
					$this.css({
						'width': $window.width(),
						'height': 'auto'
					});
				}

				var marginLeft = Math.floor($window.width() / 2 - ($this.width() / 2));

				$this.css('left', marginLeft);
			});
		},

		// Homepage Logo
		homepageLogo = function(index) {
			if (index > 1) {
				$('#header-logo').addClass('show');
			} else{
				$('#header-logo').removeClass('show');
			};
		},

		// Set Title for Next Button
		homepageSectionTitle = function(index) {
			var homepageTitle = $homepageBox.eq(index).find('h1').html();

			$('#homepage-next').find('.nav-text').html(homepageTitle);
		};

	if ($('.homepage').length > 0) {
		$homepageBoxContainer.fullpage({
			sectionSelector: '.homepage-box',
			afterLoad: function(anchorLink, index) {
				$homepageNav.find('.active').removeClass('active');
				$homepageNav.find('a').eq(index - 1).addClass('active');
				$homepageBox.eq(index - 1).addClass('active-box');
				homepageLogo(index);
				homepageSectionTitle(index);
				if (index == $('#homepage-nav').find('a').length) {
					$('#homepage-next').addClass('hide');
				} else {
					$('#homepage-next').removeClass('hide');
				}
			},
			onLeave: function(index, nextIndex, direction) {
				$homepageBox.removeClass('active-box');
			},
			loopBottom: true
		});
	}

	// Homepage Scrollto
	$('#homepage-nav').on('click', 'a', function(event) {
		event.preventDefault();

		var isActive = $(this).hasClass('active');

		if (!isActive) {
			$.fn.fullpage.moveTo($(this).index() + 1);

			if ($('#container').hasClass('animate-footer')) {
				$('#container').removeClass('animate-footer');
			}
		}
	});

	$('#homepage-next').on('click', function(event) {
		event.preventDefault();

		$.fn.fullpage.moveSectionDown();
	});

})(this.jQuery);