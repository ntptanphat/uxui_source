// The resize function
function resize() {
    var vheight = $(window).height();
    var vwidth = $(window).width();
    if($(window).width() > 768) {
        $('.fullsize-background').css({
            'height': vheight,
            'width': vwidth 
          });
    }   
  };
  
  // The scroll-up function
  function scrollUp() {
    var vheight = $(window).height();
    $('html, body').animate({
      scrollTop: (Math.ceil($(window).scrollTop() / vheight)-1) * vheight
    }, 10);
  };
  
  // The scroll-down function
  function scrollDown() {
    var vheight = $(window).height();
    $('html, body').animate({
      scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
    }, 10);  
  };
  
  // Do stuff when document is ready
  $(document).ready(function(){
    
    // Resize Container Function
    resize();
    
    // Click to Scroll DOWN Functions
    $('.scroll-next').click(function(event){
      scrollDown();
      event.preventDefault();
    });
    
    // Click to Scroll UP Functions
    $('.scroll-prev').click(function(event){
      scrollUp();
      event.preventDefault();
    });
    
  });
  
  // Key Events
  $(document).keydown(function(e) {
   if (e.keyCode == 40) { scrollDown(); };
   if (e.keyCode == 34) { scrollDown(); };
   if (e.keyCode == 33) { scrollUp(); };
   if (e.keyCode == 38) { scrollUp(); };
    e.preventDefault;
  });
  
  // Mousewheel events
  $(window).bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
        scrollUp();
    }
    else {
        scrollDown();
      }
      event.preventDefault;
  });
  
  // Resize Container on window resize
  $(window).resize(function(){    
    resize();    
  });

  
  (function ($) {
    // Gallery Detail
var openDetail = function(obj) {
      var $this = obj,
          isAnimating = $('.gallery-detail-image').hasClass('animating'),
          detailLink = $this.attr('href'),
          offsetLeft = $this.parent().position().left,
          offsetTop = $this.parent().position().top + $this.outerHeight() / 2 - 23;

      if (!isAnimating) {
          $('.gallery-detail-image').addClass('animating');
          $(detailLink).css({
              width: 0,
              top: offsetTop,
              left: offsetLeft,
              opacity: 0,
              height: 1
          }).animate({
              width: 403,
              left: offsetLeft - (403 / 2),
              opacity: 1
          }, function() {
              $(this).animate({
                  top: 0,
                  height: '100%'
              }, function() {
                  $(this).find('.detail-box-content').fadeIn(function() {
                      $(this).parent().addClass('open');
                      $('.gallery-detail-image').removeClass('animating');
                  });
              });
          });
          $this.fadeOut();
      }
  },
  closeDetail = function() {
      
      if ($('.detail-box').hasClass('open')) {
          var $open = $('.gallery-detail-image').find('.open'),
              $openName = $open.attr('id'),
              $openBtn = $('.' + $openName).find('a'),
              offsetLeft = $openBtn.parent().position().left,
              offsetTop = $openBtn.parent().position().top + $openBtn.outerHeight() / 2;

          $open.removeClass('open').animate({
              height: 1,
              top: offsetTop
          }, function() {
              $(this).animate({
                  width: 0,
                  left: offsetLeft,
                  opacity: 0
              });
              $openBtn.fadeIn('slow');
          }).find('.detail-box-content').fadeOut('fast');
      }
  },
  repositionDetail = function() {
      if ($('.detail-box').hasClass('open')) {
          var $open = $('.gallery-detail-image').find('.open'),
              $openName = $open.attr('id'),
              $openBtn = $('.' + $openName),
              offsetLeft = $openBtn.position().left;

          $open.css({
              left: offsetLeft - (403 / 2)
          });
      }
  },
  topSpeedDots = function() {
      var deg = -90;

      for (i = 0; i < 37; i++) {
          $('.top-speed').append('<div class="dot" style="-ms-transform: rotate(' + deg + 'deg); -webkit-transform: rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg); "><span /></div>');
          deg = deg + 5;
      }
  },
  count = 0,
  length,
  animateIdx = 'all',
  $specs = $('.specs'),
  maxSpeed = new Date().getFullYear(),
  topSpeedInterval = function(obj) {
      var $this = obj,
          speed = $this.find('.top-speed').find('strong').data('number'),
          percent = 100,
          range = Math.floor( percent * length );
      setTimeout(function() {
          if (count < range) {
              $this.find('.dot').eq(count).addClass('active');
              count++;
              topSpeedInterval($this);
          }
      }, 50);
  },
  numberCount = function() {
      $specs.each(function() {
          $(this).find('strong').each(function(key) {

              var $this = $(this),
                  options = {
                      number: $this.data('number')
                  };

              if(key == 1) {
                  $this.prop('number',1990).animateNumber(options, 1800);
              } else {
                  $this.animateNumber(options, 1800);
              }

          });
      });
  }
 // Open Detail Box
$('.detail').on('click', 'a', function(event) {
  event.preventDefault();

  closeDetail();
  openDetail($(this));
  // $.scrollTo(0, 600);
  });
  
  // Close Detail Box
$('.detail-box').on('click', '.close-button', function(event) {
  event.preventDefault();

  closeDetail();
});
  
})(this.jQuery);